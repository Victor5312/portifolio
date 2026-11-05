<script setup>
import * as THREE from "three";
import { calcularPercurso, centroCaminho, margemRio } from "~/utils/percurso";
import { criarClareira } from "~/utils/clareira";
import { criarAmbiente } from "~/utils/ambiente";

const props = defineProps({ movimento: Boolean });
const emitir = defineEmits(["progresso"]);
const recipiente = ref(null);
const disponivel = ref(true);
let renderizador, cena, camera, quadro, tamanho, visibilidade;
let visivel = true;
let tempo = 0;
const ponteiro = { x: 0, y: 0 };
const recursos = [];
const uniformeTempo = { value: 0 };
const uniformeVento = { value: 0 };
const uniformeCeu = { value: new THREE.Color("#e3e4c4") };
const uniformeNevoa = { value: new THREE.Color("#c9d6b4") };
let percurso,
  progressoAlvo = 0,
  progresso = 0,
  forcaPonteiro = 0;
const ponteiroSuave = new THREE.Vector2();
const ponteiroAlvo = new THREE.Vector2();
let impulso = 0;
const raioPonteiro = new THREE.Raycaster();
const encontro = new THREE.Vector3();
const afastamento = new THREE.Vector3();
const alvoCamera = new THREE.Vector3();
function atualizarRolagem() {
  if (!percurso) return;
  const area = percurso.getBoundingClientRect();
  progressoAlvo = THREE.MathUtils.clamp(
    -area.top / Math.max(1, area.height - window.innerHeight),
    0,
    1,
  );
  emitir("progresso", progressoAlvo);
}
function sair() {
  ponteiro.x = 0;
  ponteiro.y = 0;
  forcaPonteiro = 0;
}

function acompanhar(evento) {
  const area = recipiente.value.getBoundingClientRect();
  if (
    !area.width ||
    !area.height ||
    evento.clientY < area.top ||
    evento.clientY > area.bottom ||
    evento.clientX < area.left ||
    evento.clientX > area.right
  ) {
    sair();
    return;
  }
  const x = (evento.clientX - area.left) / area.width - 0.5;
  const y = (evento.clientY - area.top) / area.height - 0.5;
  impulso = Math.min(
    2,
    impulso + Math.hypot(x - ponteiro.x, y - ponteiro.y) * 5,
  );
  ponteiro.x = x;
  ponteiro.y = y;
  forcaPonteiro = 1;
}
function deixarJanela(evento) {
  if (!evento.relatedTarget) sair();
}
function guardar(recurso) {
  recursos.push(recurso);
  return recurso;
}
function redimensionar() {
  if (!renderizador) return;
  const { width, height } = recipiente.value.getBoundingClientRect();
  // Aba oculta ou painel ainda sem tamanho: largura 0 geraria NaN na câmera.
  if (!width || !height) return;
  renderizador.setSize(width, height);
  camera.aspect = width / height;
  camera.fov = width < 650 ? 62 : 47;
  camera.updateProjectionMatrix();
  atualizarRolagem();
}
function margem(z) {
  return margemRio(z);
}
function larguraRio(z) {
  return 2.5 + Math.sin(z * 0.09) * 0.8;
}

onMounted(() => {
  percurso = recipiente.value.closest(".percurso-campo");
  window.addEventListener("pointermove", acompanhar, { passive: true });
  window.addEventListener("pointerout", deixarJanela);
  window.addEventListener("blur", sair);
  window.addEventListener("scroll", atualizarRolagem, { passive: true });
  window.addEventListener("resize", atualizarRolagem, { passive: true });
  atualizarRolagem();
  try {
    renderizador = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderizador.toneMapping = THREE.ACESFilmicToneMapping;
    renderizador.toneMappingExposure = 1.08;
    recipiente.value.appendChild(renderizador.domElement);
    cena = new THREE.Scene();
    cena.fog = new THREE.FogExp2("#c9d6b4", 0.017);
    camera = new THREE.PerspectiveCamera(47, 1, 0.1, 300);
    camera.position.set(0, 3.1, 12);
    camera.lookAt(0, 3.7, -12);
    const luzCeu = new THREE.HemisphereLight("#f5ffe8", "#16331b", 2.1);
    cena.add(luzCeu);
    const sol = new THREE.DirectionalLight("#fff1c9", 3.3);
    sol.position.set(-12, 18, -8);
    cena.add(sol);

    const terreno = guardar(new THREE.PlaneGeometry(180, 300, 1, 1));
    const terra = guardar(
      new THREE.MeshStandardMaterial({ color: "#263e20", roughness: 1 }),
    );
    const solo = new THREE.Mesh(terreno, terra);
    solo.rotation.x = -Math.PI / 2;
    solo.position.set(0, -0.16, -115);
    cena.add(solo);

    for (let camada = 0; camada < 4; camada++) {
      const geometria = guardar(new THREE.PlaneGeometry(190, 22, 100, 1));
      const posicoes = geometria.attributes.position;
      for (let i = 0; i < posicoes.count; i++) {
        const x = posicoes.getX(i);
        const topo =
          3.5 +
          camada * 1.3 +
          Math.sin(x * 0.065 + camada * 2) * 2.8 +
          Math.cos(x * 0.16 + camada) * 1.2;
        posicoes.setY(i, posicoes.getY(i) > 0 ? topo : -6);
      }
      geometria.computeVertexNormals();
      const material = guardar(
        new THREE.MeshBasicMaterial({
          color: ["#354d36", "#466349", "#5c755b", "#73886b"][camada],
          side: THREE.DoubleSide,
        }),
      );
      const colina = new THREE.Mesh(geometria, material);
      colina.position.z = -215 - camada * 13;
      cena.add(colina);
    }

    const geometriaEncosta = guardar(new THREE.SphereGeometry(1, 20, 12));
    const materialEncosta = guardar(
      new THREE.MeshStandardMaterial({ color: "#3b5831", roughness: 1 }),
    );
    for (let i = 0; i < 14; i++) {
      const encosta = new THREE.Mesh(geometriaEncosta, materialEncosta);
      encosta.position.set(
        (i % 2 ? -1 : 1) * (24 + Math.sin(i) * 5),
        -2,
        -8 - i * 12,
      );
      encosta.scale.set(13, 4 + Math.sin(i * 2) * 2, 19);
      cena.add(encosta);
    }
    const pontosRio = [],
      coordenadasRio = [],
      indicesRio = [];
    const faixasRio = 20,
      comprimentoRio = 480;
    for (let i = 0; i <= comprimentoRio; i++) {
      const z = 17 - i * 0.5;
      const meio = margem(z),
        largura = larguraRio(z);
      for (let j = 0; j <= faixasRio; j++) {
        const lateral = j / faixasRio;
        pontosRio.push(meio + (lateral * 2 - 1) * largura, 0.025, z);
        coordenadasRio.push(lateral, i / comprimentoRio);
        if (i < comprimentoRio && j < faixasRio) {
          const n = i * (faixasRio + 1) + j;
          indicesRio.push(
            n,
            n + faixasRio + 1,
            n + 1,
            n + 1,
            n + faixasRio + 1,
            n + faixasRio + 2,
          );
        }
      }
    }
    const geometriaRio = guardar(new THREE.BufferGeometry());
    geometriaRio.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(pontosRio, 3),
    );
    geometriaRio.setIndex(indicesRio);
    geometriaRio.setAttribute(
      "uv",
      new THREE.Float32BufferAttribute(coordenadasRio, 2),
    );
    geometriaRio.computeVertexNormals();
    const geometriaLeito = guardar(geometriaRio.clone());
    geometriaLeito.translate(0, -0.13, 0);
    const materialLeito = guardar(
      new THREE.ShaderMaterial({
        uniforms: { tempo: uniformeTempo, corNevoa: uniformeNevoa },
        vertexShader: `varying vec3 ponto; varying vec2 faixa; void main(){ ponto=position; faixa=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
        fragmentShader: `
        uniform float tempo; uniform vec3 corNevoa; varying vec3 ponto; varying vec2 faixa;
        vec2 semente(vec2 p){ return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453); }
        void main(){
          vec2 p=ponto.xz*5.5+vec2(sin(ponto.z*2.+tempo*.5),cos(ponto.x*3.-tempo*.4))*.09;
          vec2 celula=floor(p), local=fract(p), identidade=vec2(0.); float distancia=8.;
          for(int x=-1;x<=1;x++) for(int y=-1;y<=1;y++){
            vec2 vizinha=vec2(float(x),float(y)); vec2 centro=vizinha+semente(celula+vizinha)-local;
            float d=dot(centro,centro); if(d<distancia){ distancia=d; identidade=celula+vizinha; }
          }
          float variedade=semente(identidade).x;
          vec3 pedra=mix(vec3(.28,.39,.32),vec3(.68,.72,.53),variedade);
          pedra*=.65+.35*(1.-smoothstep(.03,.5,distancia));
          float luz=sin(ponto.x*3.8+ponto.z*2.5+tempo*.9+sin(ponto.z*2.-tempo*.4));
          float luz2=sin(ponto.x*2.9-ponto.z*4.2-tempo*.65+cos(ponto.x*2.4+tempo*.3));
          float reflexo=pow(max(0.,1.-abs(luz+luz2)*.62),12.);
          float centro=sin(faixa.x*3.14159);
          vec3 cor=mix(pedra,vec3(.025,.38,.33),centro*.6)+vec3(.48,.66,.42)*reflexo*.38;
          float nevoa=1.-exp(-length(cameraPosition-ponto)*.021);
          gl_FragColor=vec4(mix(cor,corNevoa,nevoa*.45),1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
        side: THREE.DoubleSide,
      }),
    );
    cena.add(new THREE.Mesh(geometriaLeito, materialLeito));
    const agua = guardar(
      new THREE.ShaderMaterial({
        uniforms: {
          tempo: uniformeTempo,
          corCeu: uniformeCeu,
          corNevoa: uniformeNevoa,
        },
        vertexShader: `uniform float tempo; varying vec3 ponto; varying vec2 faixa;
          void main(){ vec3 posicao=position; faixa=uv;
            posicao.y+=(sin(position.x*2.2+position.z*1.4-tempo*.8)*.016+sin(position.z*3.3-position.x*1.7+tempo*.6)*.009)*sin(uv.x*3.14159);
            ponto=posicao; gl_Position=projectionMatrix*modelViewMatrix*vec4(posicao,1.);
          }`,
        fragmentShader: `uniform float tempo; uniform vec3 corCeu; uniform vec3 corNevoa; varying vec3 ponto; varying vec2 faixa;
          void main(){
            float a=ponto.x*2.2+ponto.z*1.4-tempo*.8;
            float b=ponto.z*3.3-ponto.x*1.7+tempo*.6;
            float c=ponto.x*7.1+ponto.z*5.2+sin(ponto.z*1.3+tempo*.4)-tempo*1.2;
            vec3 normal=normalize(vec3(-cos(a)*.07+cos(b)*.045+sin(c)*.018,1.,-cos(a)*.05-cos(b)*.08+cos(c)*.023));
            vec3 olhar=normalize(cameraPosition-ponto);
            float fresnel=.04+.96*pow(1.-max(dot(olhar,normal),0.),4.);
            vec3 ceu=mix(vec3(.04,.24,.28),corCeu,clamp(normal.z*3.+.58,0.,1.));
            vec3 cor=mix(vec3(.055,.49,.43),ceu,fresnel);
            vec3 meio=normalize(olhar+normalize(vec3(-.28,.52,-.8)));
            float brilho=pow(max(dot(normal,meio),0.),120.);
            cor+=vec3(1.,.98,.78)*brilho*1.6;
            float borda=pow(abs(faixa.x*2.-1.),14.);
            cor=mix(cor,vec3(.61,.83,.64),borda*.25);
            float nevoa=1.-exp(-length(cameraPosition-ponto)*.018);
            cor=mix(cor,corNevoa,nevoa*.35);
            gl_FragColor=vec4(cor,clamp(.32+fresnel*.32+brilho*.25,.32,.8));
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
      }),
    );
    cena.add(new THREE.Mesh(geometriaRio, agua));

    const geometriaGrama = guardar(new THREE.PlaneGeometry(0.07, 1, 1, 4));
    geometriaGrama.translate(0, 0.5, 0);
    const verticesGrama = geometriaGrama.attributes.position;
    for (let i = 0; i < verticesGrama.count; i++)
      verticesGrama.setX(
        i,
        verticesGrama.getX(i) * (1 - verticesGrama.getY(i) * 0.96),
      );
    const materialGrama = guardar(
      new THREE.MeshStandardMaterial({
        color: "#638f39",
        roughness: 0.95,
        side: THREE.DoubleSide,
      }),
    );
    materialGrama.onBeforeCompile = (shader) => {
      shader.uniforms.tempo = uniformeTempo;
      shader.uniforms.vento = uniformeVento;
      shader.vertexShader =
        "uniform float tempo; uniform float vento;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        float fase=instanceMatrix[3].x*.6+instanceMatrix[3].z*.5;
        transformed.x += (sin(tempo*1.4+fase)*.22+vento*.5)*position.y*position.y;
        transformed.z += cos(tempo*.9+fase)*position.y*position.y*.1;`,
      );
    };
    const totalTrechos = 10;
    const porTrecho = window.innerWidth < 650 ? 4750 : 9500;
    const quantidade = porTrecho * totalTrechos;
    const trechosGrama = Array.from({ length: totalTrechos }, () =>
      guardar(
        new THREE.InstancedMesh(geometriaGrama, materialGrama, porTrecho),
      ),
    );
    const auxiliar = new THREE.Object3D();
    const cor = new THREE.Color();
    let semente = 913;
    const aleatorio = () => {
      semente = (semente * 16807) % 2147483647;
      return (semente - 1) / 2147483646;
    };
    for (let i = 0; i < quantidade; i++) {
      const trecho = Math.floor(i / porTrecho);
      const grama = trechosGrama[trecho];
      let x, z;
      do {
        x = (aleatorio() - 0.5) * (i % 4 === 0 ? 76 : 24);
        z = 16 - trecho * 24 - aleatorio() * 24;
      } while (Math.abs(x - margem(z)) < larguraRio(z) + 0.12);
      auxiliar.position.set(x, -0.12, z);
      auxiliar.rotation.set(
        (aleatorio() - 0.5) * 0.2,
        aleatorio() * Math.PI,
        (aleatorio() - 0.5) * 0.2,
      );
      const altura =
        (0.22 + aleatorio() * 0.75) *
        THREE.MathUtils.lerp(
          0.22,
          1,
          THREE.MathUtils.smoothstep(Math.hypot(x, z + 150), 12, 19),
        );
      auxiliar.scale.set(0.7 + aleatorio(), altura, 1);
      auxiliar.updateMatrix();
      grama.setMatrixAt(i % porTrecho, auxiliar.matrix);
      cor.setHSL(
        0.23 + aleatorio() * 0.065,
        0.3 + aleatorio() * 0.25,
        0.12 + aleatorio() * 0.2,
      );
      grama.setColorAt(i % porTrecho, cor);
    }
    cena.add(...trechosGrama);

    const formatoFolha = new THREE.Shape();
    formatoFolha.moveTo(0, -0.5);
    formatoFolha.bezierCurveTo(0.43, -0.16, 0.31, 0.28, 0, 0.5);
    formatoFolha.bezierCurveTo(-0.31, 0.24, -0.42, -0.17, 0, -0.5);
    const geometriaFolha = guardar(new THREE.ShapeGeometry(formatoFolha, 5));
    const verticesFolha = geometriaFolha.attributes.position;
    for (let i = 0; i < verticesFolha.count; i++)
      verticesFolha.setZ(i, Math.abs(verticesFolha.getX(i)) * 0.4);
    geometriaFolha.computeVertexNormals();
    const materialFolha = guardar(
      new THREE.MeshStandardMaterial({
        color: "#acdc69",
        roughness: 0.64,
        metalness: 0.12,
        side: THREE.DoubleSide,
      }),
    );
    const quantidadeFolhas = window.innerWidth < 650 ? 3200 : 6000;
    const folhas = new THREE.InstancedMesh(
      geometriaFolha,
      materialFolha,
      quantidadeFolhas,
    );
    folhas.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    folhas.frustumCulled = false;
    const sementesFolhas = Array.from({ length: quantidadeFolhas }, (_, i) => {
      cor.setHSL(
        0.19 + aleatorio() * 0.14,
        0.38 + aleatorio() * 0.35,
        0.18 + aleatorio() * 0.47,
      );
      folhas.setColorAt(i, cor);
      return {
        angulo: aleatorio() * Math.PI * 2,
        raio: 2.05 + (aleatorio() - 0.5) * 1.2,
        espessura: (aleatorio() - 0.5) * 1.7,
        escala: 0.12 + aleatorio() * 0.24,
        fase: aleatorio() * 10,
        solta: i < 240,
        resposta:
          i % 5 < 3 ? 0.18 + aleatorio() * 0.12 : 0.8 + aleatorio() * 0.2,
        deslocamento: new THREE.Vector3(),
      };
    });
    cena.add(folhas);
    const poeiraGeometria = guardar(new THREE.BufferGeometry());
    const poeiraPosicoes = new Float32Array(480 * 3);
    for (let i = 0; i < poeiraPosicoes.length; i += 3) {
      poeiraPosicoes[i] = (aleatorio() - 0.5) * 36;
      poeiraPosicoes[i + 1] = aleatorio() * 12;
      poeiraPosicoes[i + 2] = 7 - aleatorio() * 190;
    }
    poeiraGeometria.setAttribute(
      "position",
      new THREE.BufferAttribute(poeiraPosicoes, 3),
    );
    const poeiraMaterial = guardar(
      new THREE.PointsMaterial({
        color: "#f0ffce",
        size: 0.025,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      }),
    );
    const poeira = new THREE.Points(poeiraGeometria, poeiraMaterial);
    cena.add(poeira);
    const clareira = criarClareira(cena, guardar, uniformeTempo, uniformeVento);
    const ambiente = criarAmbiente({
      cena,
      guardar,
      tempo: uniformeTempo,
      vento: uniformeVento,
      sol,
      luzCeu,
    });
    uniformeCeu.value = ambiente.corCeu.value;
    uniformeNevoa.value = ambiente.corNevoa.value;

    tamanho = new ResizeObserver(redimensionar);
    tamanho.observe(recipiente.value);
    redimensionar();
    visibilidade = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
    });
    visibilidade.observe(recipiente.value);
    let anterior = 0;
    // Ao recarregar no meio da página, a câmera já nasce no ponto certo.
    atualizarRolagem();
    progresso = progressoAlvo;
    let entrada = props.movimento && progresso < 0.01 ? 0 : 1;
    let quadrosMedidos = 0;
    let tempoMedido = 0;
    let qualidade = Math.min(window.devicePixelRatio, 1.5);
    let ultimoProgresso = -1;
    function ajustarQualidade(delta) {
      // Em aparelhos lentos reduz a resolução em vez de engasgar o percurso.
      quadrosMedidos++;
      tempoMedido += delta;
      if (quadrosMedidos < 50) return;
      const medio = tempoMedido / quadrosMedidos;
      quadrosMedidos = 0;
      tempoMedido = 0;
      if (medio > 0.027 && qualidade > 0.75) {
        qualidade = Math.max(0.75, qualidade - 0.2);
        renderizador.setPixelRatio(qualidade);
        redimensionar();
      }
    }
    function animar(agora) {
      quadro = requestAnimationFrame(animar);
      const delta = Math.min((agora - anterior) / 1000, 0.05);
      anterior = agora;
      if (!visivel || document.hidden) return;
      ajustarQualidade(delta);
      if (props.movimento) tempo += delta;
      uniformeTempo.value = tempo;
      const suavidade = 1 - Math.exp(-delta * 5);
      // O percurso sempre acompanha a rolagem; pausar para só o vento e as folhas.
      progresso += (progressoAlvo - progresso) * suavidade;
      if (
        !props.movimento &&
        ultimoProgresso >= 0 &&
        Math.abs(progresso - ultimoProgresso) < 0.00002
      )
        return;
      ultimoProgresso = progresso;
      entrada = Math.min(1, entrada + delta / 2.6);
      const aproximacao = 1 - Math.pow(1 - entrada, 3);
      if (props.movimento) {
        ponteiroAlvo.set(ponteiro.x, ponteiro.y);
        ponteiroSuave.lerp(ponteiroAlvo, suavidade);
        impulso *= Math.exp(-delta * 2.5);
        uniformeVento.value +=
          (ponteiroSuave.x * forcaPonteiro * (1 + impulso) -
            uniformeVento.value) *
          suavidade;
        poeira.rotation.y = tempo * 0.006;
      }
      const percursoAtual = calcularPercurso(progresso, ponteiroSuave);
      camera.position.fromArray(percursoAtual.posicao);
      camera.position.y += (1 - aproximacao) * 2.6;
      camera.position.z += (1 - aproximacao) * 7;
      alvoCamera.fromArray(percursoAtual.olhar);
      camera.lookAt(alvoCamera);
      camera.rotateZ(percursoAtual.inclinacao);
      camera.updateMatrixWorld();
      raioPonteiro.setFromCamera(
        { x: ponteiro.x * 2, y: -ponteiro.y * 2 },
        camera,
      );
      const estreito = camera.aspect < 1;
      const progressoTunel = Math.min(1, progresso / 0.58);
      const alinhamento = THREE.MathUtils.smoothstep(progressoTunel, 0, 0.14);
      const dispersao = THREE.MathUtils.smoothstep(progressoTunel, 0.06, 0.38);
      const chegadaClareira = THREE.MathUtils.smoothstep(progresso, 0.54, 0.7);
      const retornoFolhas = 1 - Math.exp(-delta * 10);
      const deslocarEnxame = Math.max(0, 12 - camera.position.z - 24);
      sementesFolhas.forEach((folha, i) => {
        const angulo =
          folha.angulo + tempo * 0.16 + progressoTunel * Math.PI * 3;
        const raio = folha.raio + Math.sin(tempo + folha.fase) * 0.12;
        if (folha.solta) {
          auxiliar.position.set(
            Math.sin(folha.fase * 7 + tempo * 0.12) * 16,
            1 + ((folha.fase * 2 + tempo * 0.23) % 10),
            -12 + Math.cos(folha.fase) * 10 - deslocarEnxame,
          );
        } else {
          const zFolha =
            -7 +
            folha.espessura +
            Math.cos(angulo) * 0.7 -
            dispersao * folha.fase * 2.8 -
            deslocarEnxame;
          auxiliar.position.set(
            THREE.MathUtils.lerp(
              estreito ? 0 : 3.5,
              centroCaminho(zFolha),
              alinhamento,
            ) +
              Math.cos(angulo) * (raio + dispersao * 1.4),
            THREE.MathUtils.lerp(5.5, 3.1, alinhamento) +
              Math.sin(angulo) * (raio + dispersao * 0.6),
            zFolha,
          );
        }
        const voltaClareira = folha.angulo + tempo * 0.16 + folha.fase * 0.35;
        const raioClareira = 10 + (folha.raio - 1.45) * 7;
        auxiliar.position.lerp(
          encontro.set(
            Math.cos(voltaClareira) * raioClareira,
            0.8 + folha.fase * 1.05 + Math.sin(tempo * 0.7 + folha.angulo) * 0.5,
            -150 + Math.sin(voltaClareira) * raioClareira,
          ),
          chegadaClareira,
        );
        if (props.movimento) {
          raioPonteiro.ray.closestPointToPoint(auxiliar.position, encontro);
          afastamento.subVectors(auxiliar.position, encontro);
          const distancia = afastamento.length();
          // Um único NaN aqui apagaria a folha para sempre.
          if (!Number.isFinite(distancia)) afastamento.set(0, 0, 0);
          const influencia = Math.max(0, 1 - distancia / 5.5) * forcaPonteiro;
          afastamento
            .normalize()
            .multiplyScalar(
              influencia * Math.min(4.2, (6.5 + impulso * 2) * folha.resposta),
            );
          if (Number.isFinite(afastamento.x))
            folha.deslocamento.lerp(afastamento, retornoFolhas);
        }
        auxiliar.position.add(folha.deslocamento);
        auxiliar.rotation.set(
          folha.fase + tempo * 0.55,
          angulo + tempo * 0.2,
          angulo + folha.fase,
        );
        // Folhas encolhem ao passar rente à lente, sem tapar a tela inteira.
        const perto = THREE.MathUtils.smoothstep(
          auxiliar.position.distanceTo(camera.position),
          0.8,
          4.5,
        );
        auxiliar.scale.setScalar(
          folha.escala * (1 - chegadaClareira * 0.3) * (0.15 + perto * 0.85),
        );
        auxiliar.updateMatrix();
        folhas.setMatrixAt(i, auxiliar.matrix);
      });
      folhas.instanceMatrix.needsUpdate = true;
      clareira.atualizar(tempo, progresso);
      ambiente.atualizar(tempo, progresso, camera);
      trechosGrama.forEach((trecho, indice) => {
        const distancia = camera.position.z - (4 - indice * 24);
        trecho.visible =
          progresso > 0.67
            ? Math.abs(distancia) < 85
            : distancia > -20 && distancia < 85;
      });
      renderizador.render(cena, camera);
    }
    quadro = requestAnimationFrame(animar);
  } catch {
    disponivel.value = false;
    renderizador?.dispose();
  }
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", atualizarRolagem);
  window.removeEventListener("resize", atualizarRolagem);
  window.removeEventListener("pointermove", acompanhar);
  window.removeEventListener("pointerout", deixarJanela);
  window.removeEventListener("blur", sair);
  cancelAnimationFrame(quadro);
  tamanho?.disconnect();
  visibilidade?.disconnect();
  recursos.forEach((recurso) => recurso.dispose());
  renderizador?.dispose();
});
</script>

<template>
  <div
    ref="recipiente"
    class="campo-interativo"
    role="img"
    aria-label="Campo tridimensional: role para avançar pelo riacho e atravesse as folhas; mova o ponteiro para afastá-las e mudar a direção do vento"
  >
    <div v-if="!disponivel" class="campo-alternativo" aria-hidden="true">
      <span
        v-for="n in 28"
        :key="n"
        :style="{
          left: `${(n * 17) % 100}%`,
          top: `${(n * 23) % 80}%`,
          transform: `rotate(${n * 37}deg)`,
        }"
      ></span>
    </div>
  </div>
</template>
