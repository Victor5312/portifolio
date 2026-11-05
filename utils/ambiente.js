import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { margemRio } from "./percurso.js";

// Momentos do dia ao longo do percurso: manhã, tarde dourada e entardecer.
const MOMENTOS = [
  {
    em: 0,
    topo: "#6fa6bd",
    horizonte: "#e3e4c4",
    nevoa: "#c9d6b4",
    sol: "#fff1c9",
    luzSol: 3.3,
    luzCeu: 2.1,
    alturaSol: 0.3,
  },
  {
    em: 0.5,
    topo: "#5f93b3",
    horizonte: "#f4d59a",
    nevoa: "#e2c994",
    sol: "#ffd98e",
    luzSol: 3.5,
    luzCeu: 1.8,
    alturaSol: 0.16,
  },
  {
    em: 0.8,
    topo: "#4f7196",
    horizonte: "#f3c088",
    nevoa: "#b9a77c",
    sol: "#ffc27e",
    luzSol: 3.1,
    luzCeu: 1.6,
    alturaSol: 0.09,
  },
  {
    em: 1,
    topo: "#3a4f78",
    horizonte: "#eda56f",
    nevoa: "#7f7a60",
    sol: "#ffb27a",
    luzSol: 2.5,
    luzCeu: 1.4,
    alturaSol: 0.04,
  },
];
MOMENTOS.forEach((momento) => {
  for (const chave of ["topo", "horizonte", "nevoa", "sol"])
    momento[chave] = new THREE.Color(momento[chave]);
});

function sementeira(inicial) {
  let semente = inicial;
  return () => {
    semente = (semente * 16807) % 2147483647;
    return (semente - 1) / 2147483646;
  };
}

function larguraRio(z) {
  return 2.5 + Math.sin(z * 0.09) * 0.8;
}

function criarCeu(cena, guardar, tempo, ceu) {
  const material = guardar(
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false,
      fog: false,
      uniforms: {
        tempo,
        topo: ceu.topo,
        horizonte: ceu.horizonte,
        corSol: ceu.corSol,
        direcaoSol: ceu.direcaoSol,
      },
      vertexShader: `varying vec3 direcao;
        void main(){ direcao=normalize(position); vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.); gl_Position=p.xyww; }`,
      fragmentShader: `uniform float tempo; uniform vec3 topo; uniform vec3 horizonte; uniform vec3 corSol; uniform vec3 direcaoSol; varying vec3 direcao;
        float ruido(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5453);
          float b=fract(sin(dot(i+vec2(1.,0.),vec2(127.1,311.7)))*43758.5453);
          float c=fract(sin(dot(i+vec2(0.,1.),vec2(127.1,311.7)))*43758.5453);
          float d=fract(sin(dot(i+vec2(1.,1.),vec2(127.1,311.7)))*43758.5453);
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
        float nuvens(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=ruido(p)*a; p=p*2.03+vec2(1.7,.4); a*=.5; } return v; }
        void main(){
          vec3 d=normalize(direcao);
          float altura=clamp(d.y,0.,1.);
          vec3 cor=mix(horizonte,topo,pow(altura,.55));
          float alinhado=max(dot(d,normalize(direcaoSol)),0.);
          cor+=corSol*pow(alinhado,5.)*.22;
          cor+=corSol*pow(alinhado,60.)*.55;
          cor+=corSol*smoothstep(.9994,.9998,alinhado)*2.4;
          vec2 plano=d.xz/(d.y+.16);
          float massa=nuvens(plano*1.15+vec2(tempo*.012,tempo*.004));
          float nuvem=smoothstep(.5,.78,massa)*smoothstep(.015,.2,d.y);
          vec3 corNuvem=mix(horizonte*1.1,corSol*1.15,pow(alinhado,3.)*.8+.15);
          cor=mix(cor,corNuvem,nuvem*.72);
          gl_FragColor=vec4(cor,1.);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }),
  );
  const domo = new THREE.Mesh(
    guardar(new THREE.SphereGeometry(1, 32, 20)),
    material,
  );
  domo.scale.setScalar(120);
  domo.frustumCulled = false;
  domo.renderOrder = -10;
  cena.add(domo);
  return domo;
}

function criarFloresta(cena, guardar, tempo, vento) {
  const aleatorio = sementeira(4021);
  const estreito = window.innerWidth < 650;
  const total = estreito ? 170 : 300;
  const pontos = [];
  let tentativas = 0;
  while (pontos.length < total && tentativas++ < 12000) {
    const lado = aleatorio() < 0.5 ? -1 : 1;
    const x = lado * (8 + Math.pow(aleatorio(), 1.4) * 52);
    const z = 8 - aleatorio() * 225;
    if (Math.abs(x - margemRio(z)) < larguraRio(z) + 4) continue;
    // Mantém livre a órbita final da câmera ao redor da clareira.
    if (Math.hypot(x, z + 150) < 37) continue;
    pontos.push({ x, z });
  }

  const pinheiro = [];
  for (let camada = 0; camada < 3; camada++) {
    const cone = new THREE.ConeGeometry(1.25 - camada * 0.3, 2.3, 7, 1);
    cone.translate(0, 2.3 + camada * 1.35, 0);
    pinheiro.push(cone);
  }
  const geometriaPinheiro = guardar(mergeGeometries(pinheiro));
  pinheiro.forEach((parte) => parte.dispose());
  const geometriaCopa = guardar(new THREE.IcosahedronGeometry(1.5, 1));
  geometriaCopa.scale(1, 1.15, 1);
  geometriaCopa.translate(0, 3.5, 0);
  const geometriaTronco = guardar(new THREE.CylinderGeometry(0.13, 0.24, 2.4, 6));
  geometriaTronco.translate(0, 1.15, 0);

  const materialFolhagem = guardar(
    new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.92,
      flatShading: true,
    }),
  );
  materialFolhagem.onBeforeCompile = (shader) => {
    shader.uniforms.tempo = tempo;
    shader.uniforms.vento = vento;
    shader.vertexShader =
      "uniform float tempo; uniform float vento;\n" + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
      float fase=instanceMatrix[3].x*.31+instanceMatrix[3].z*.23;
      float curva=position.y*position.y*.006;
      transformed.x+=(sin(tempo*.9+fase)+vento*1.6)*curva;
      transformed.z+=cos(tempo*.7+fase)*curva*.6;`,
    );
  };
  const materialTronco = guardar(
    new THREE.MeshStandardMaterial({ color: "#3f3226", roughness: 1 }),
  );

  const metade = Math.ceil(pontos.length * 0.62);
  const pinheiros = guardar(
    new THREE.InstancedMesh(geometriaPinheiro, materialFolhagem, metade),
  );
  const copas = guardar(
    new THREE.InstancedMesh(
      geometriaCopa,
      materialFolhagem,
      pontos.length - metade,
    ),
  );
  const troncos = guardar(
    new THREE.InstancedMesh(geometriaTronco, materialTronco, pontos.length),
  );
  const auxiliar = new THREE.Object3D();
  const cor = new THREE.Color();
  pontos.forEach((ponto, i) => {
    const escala = 1.1 + aleatorio() * 1.5;
    auxiliar.position.set(ponto.x, -0.16, ponto.z);
    auxiliar.rotation.set(0, aleatorio() * Math.PI * 2, 0);
    auxiliar.scale.set(escala, escala * (0.95 + aleatorio() * 0.5), escala);
    auxiliar.updateMatrix();
    troncos.setMatrixAt(i, auxiliar.matrix);
    if (i < metade) {
      pinheiros.setMatrixAt(i, auxiliar.matrix);
      cor.setHSL(
        0.33 + aleatorio() * 0.06,
        0.28 + aleatorio() * 0.16,
        0.14 + aleatorio() * 0.09,
      );
      pinheiros.setColorAt(i, cor);
    } else {
      copas.setMatrixAt(i - metade, auxiliar.matrix);
      cor.setHSL(
        0.2 + aleatorio() * 0.09,
        0.35 + aleatorio() * 0.2,
        0.2 + aleatorio() * 0.13,
      );
      copas.setColorAt(i - metade, cor);
    }
  });
  cena.add(pinheiros, copas, troncos);
}

function criarPedras(cena, guardar) {
  const aleatorio = sementeira(7717);
  const geometria = guardar(new THREE.IcosahedronGeometry(1, 1));
  const vertices = geometria.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(vertices, i);
    // Mesma posição gera o mesmo desvio, para não abrir fendas na malha.
    const desvio =
      1 + Math.sin(v.x * 5.1 + v.y * 3.3) * 0.13 + Math.cos(v.z * 4.3) * 0.11;
    vertices.setXYZ(i, v.x * desvio, v.y * desvio * 0.68, v.z * desvio);
  }
  geometria.computeVertexNormals();
  const quantidade = 190;
  const pedras = guardar(
    new THREE.InstancedMesh(
      geometria,
      guardar(
        new THREE.MeshStandardMaterial({
          color: "#ffffff",
          roughness: 0.96,
          flatShading: true,
        }),
      ),
      quantidade,
    ),
  );
  const auxiliar = new THREE.Object3D();
  const cor = new THREE.Color();
  for (let i = 0; i < quantidade; i++) {
    const z = 14 - aleatorio() * 150;
    const lado = aleatorio() < 0.5 ? -1 : 1;
    const noRio = i % 7 === 0;
    const x =
      margemRio(z) +
      lado * (noRio ? aleatorio() * 1.6 : larguraRio(z) + aleatorio() * 0.7);
    const escala = noRio ? 0.1 + aleatorio() * 0.2 : 0.16 + aleatorio() * 0.5;
    auxiliar.position.set(x, 0, z);
    auxiliar.rotation.set(aleatorio() * 0.5, aleatorio() * 6.28, aleatorio() * 0.5);
    auxiliar.scale.set(escala * (1 + aleatorio() * 0.7), escala, escala);
    auxiliar.updateMatrix();
    pedras.setMatrixAt(i, auxiliar.matrix);
    cor.setHSL(0.2 + aleatorio() * 0.1, 0.07 + aleatorio() * 0.09, 0.26 + aleatorio() * 0.24);
    pedras.setColorAt(i, cor);
  }
  cena.add(pedras);
}

function criarRaios(cena, guardar, tempo, corSol) {
  const material = guardar(
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      fog: false,
      uniforms: { tempo, corSol, intensidade: { value: 0.3 } },
      vertexShader: `varying vec2 faixa; varying float variacao;
        void main(){ faixa=uv; variacao=instanceMatrix[3].z; gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.); }`,
      fragmentShader: `uniform float tempo; uniform vec3 corSol; uniform float intensidade; varying vec2 faixa; varying float variacao;
        void main(){
          float lados=pow(sin(faixa.x*3.14159),2.);
          float queda=smoothstep(0.,.3,faixa.y)*(1.-smoothstep(.45,1.,faixa.y));
          float pulso=.72+.28*sin(tempo*.4+variacao);
          gl_FragColor=vec4(corSol,lados*queda*pulso*intensidade);
        }`,
    }),
  );
  const quantidade = 16;
  const raios = guardar(
    new THREE.InstancedMesh(
      guardar(new THREE.PlaneGeometry(1, 1)),
      material,
      quantidade,
    ),
  );
  const aleatorio = sementeira(3301);
  const auxiliar = new THREE.Object3D();
  for (let i = 0; i < quantidade; i++) {
    const z = 2 - i * 11 - aleatorio() * 6;
    const lado = i % 2 ? -1 : 1;
    auxiliar.position.set(lado * (5 + aleatorio() * 9), 10, z);
    auxiliar.rotation.set(0, 0.5 + aleatorio() * 0.3, lado * 0.32);
    auxiliar.scale.set(3 + aleatorio() * 3.5, 26, 1);
    auxiliar.updateMatrix();
    raios.setMatrixAt(i, auxiliar.matrix);
  }
  raios.frustumCulled = false;
  cena.add(raios);
  return material.uniforms.intensidade;
}

function criarPassaros(cena, guardar, tempo) {
  // Duas asas triangulares; o vértice da ponta bate no shader.
  const geometria = guardar(new THREE.BufferGeometry());
  geometria.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      [0, 0, 0.26, 0, 0, -0.2, -1, 0, -0.06, 0, 0, 0.26, 1, 0, -0.06, 0, 0, -0.2],
      3,
    ),
  );
  const material = guardar(
    new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: { tempo, cor: { value: new THREE.Color("#1c2420") } },
      vertexShader: `uniform float tempo;
        void main(){ vec3 p=position; float fase=instanceMatrix[3].x*2.3+instanceMatrix[3].y*1.7;
          p.y+=abs(position.x)*sin(tempo*7.+fase)*.55;
          gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(p,1.); }`,
      fragmentShader: `uniform vec3 cor; void main(){ gl_FragColor=vec4(cor,1.); }`,
    }),
  );
  const quantidade = 22;
  const bando = new THREE.InstancedMesh(geometria, material, quantidade);
  bando.frustumCulled = false;
  bando.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  cena.add(bando);
  const aleatorio = sementeira(9151);
  const passaros = Array.from({ length: quantidade }, (_, i) => ({
    x: (i % 2 ? -1 : 1) * Math.ceil(i / 2) * (1.5 + aleatorio()),
    y: (aleatorio() - 0.5) * 3,
    z: Math.ceil(i / 2) * (1.3 + aleatorio()),
    fase: aleatorio() * 6.28,
    escala: 0.28 + aleatorio() * 0.2,
  }));
  const auxiliar = new THREE.Object3D();
  return (instante, camera) => {
    // O bando cruza o céu sempre à frente da câmera e recomeça ao sair de cena.
    const ciclo = (instante * 0.045) % 1;
    const direita = new THREE.Vector3();
    const frente = new THREE.Vector3();
    camera.getWorldDirection(frente);
    frente.y = 0;
    frente.normalize();
    direita.crossVectors(frente, camera.up);
    const centro = camera.position
      .clone()
      .addScaledVector(frente, 62)
      .addScaledVector(direita, (ciclo - 0.5) * 150);
    centro.y = 19 + Math.sin(instante * 0.2) * 2.5;
    const rumo = Math.atan2(-direita.x, -direita.z);
    passaros.forEach((passaro, i) => {
      auxiliar.position
        .copy(centro)
        .addScaledVector(direita, -passaro.z * 1.3)
        .addScaledVector(frente, passaro.x);
      auxiliar.position.y +=
        passaro.y + Math.sin(instante * 0.8 + passaro.fase) * 0.4;
      auxiliar.rotation.set(0, rumo, 0);
      auxiliar.scale.setScalar(passaro.escala);
      auxiliar.updateMatrix();
      bando.setMatrixAt(i, auxiliar.matrix);
    });
    bando.instanceMatrix.needsUpdate = true;
  };
}

function criarVagalumes(cena, guardar, tempo) {
  const aleatorio = sementeira(5519);
  const quantidade = 340;
  const posicoes = new Float32Array(quantidade * 3);
  const fases = new Float32Array(quantidade);
  for (let i = 0; i < quantidade; i++) {
    const angulo = aleatorio() * Math.PI * 2;
    const raio = 3 + Math.sqrt(aleatorio()) * 26;
    posicoes[i * 3] = Math.cos(angulo) * raio;
    posicoes[i * 3 + 1] = 0.4 + aleatorio() * 5.5;
    posicoes[i * 3 + 2] = -150 + Math.sin(angulo) * raio;
    fases[i] = aleatorio() * 6.28;
  }
  const geometria = guardar(new THREE.BufferGeometry());
  geometria.setAttribute("position", new THREE.BufferAttribute(posicoes, 3));
  geometria.setAttribute("fase", new THREE.BufferAttribute(fases, 1));
  const material = guardar(
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
      uniforms: {
        tempo,
        intensidade: { value: 0 },
        escala: { value: window.devicePixelRatio || 1 },
      },
      vertexShader: `uniform float tempo; uniform float escala; attribute float fase; varying float brilho;
        void main(){ vec3 p=position;
          p.x+=sin(tempo*.5+fase*3.)*.7; p.y+=sin(tempo*.8+fase)*.45; p.z+=cos(tempo*.4+fase*2.)*.7;
          brilho=pow(.5+.5*sin(tempo*1.9+fase*5.),3.);
          vec4 visao=modelViewMatrix*vec4(p,1.);
          gl_PointSize=escala*(18.+brilho*26.)*(14./max(1.,-visao.z));
          gl_Position=projectionMatrix*visao; }`,
      fragmentShader: `uniform float intensidade; varying float brilho;
        void main(){ float d=length(gl_PointCoord-.5); float halo=pow(max(0.,1.-d*2.),2.2);
          gl_FragColor=vec4(vec3(1.,.9,.42),halo*(.25+brilho*.75)*intensidade); }`,
    }),
  );
  const pontos = new THREE.Points(geometria, material);
  pontos.frustumCulled = false;
  cena.add(pontos);
  return { pontos, intensidade: material.uniforms.intensidade };
}

function criarBorboletas(grupoCena, guardar, tempo) {
  const geometria = guardar(new THREE.BufferGeometry());
  geometria.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      [0, 0, 0.5, 0, 0, -0.5, 1, 0, 0.1, 0, 0, 0.5, -1, 0, 0.1, 0, 0, -0.5],
      3,
    ),
  );
  const material = guardar(
    new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: { tempo },
      vertexShader: `uniform float tempo; varying float tom;
        void main(){ vec3 p=position; float fase=instanceMatrix[3].x*3.1+instanceMatrix[3].z*1.3;
          p.y+=abs(position.x)*sin(tempo*15.+fase)*.8; tom=fract(fase*.37);
          gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(p,1.); }`,
      fragmentShader: `varying float tom;
        void main(){ vec3 a=vec3(.96,.55,.13), b=vec3(.97,.93,.78); gl_FragColor=vec4(mix(a,b,step(.55,tom)),1.);
          #include <colorspace_fragment>
        }`,
    }),
  );
  const quantidade = 26;
  const borboletas = new THREE.InstancedMesh(geometria, material, quantidade);
  borboletas.frustumCulled = false;
  borboletas.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  grupoCena.add(borboletas);
  const aleatorio = sementeira(6143);
  const dados = Array.from({ length: quantidade }, () => ({
    angulo: aleatorio() * 6.28,
    raio: 4 + aleatorio() * 9,
    altura: 0.9 + aleatorio() * 1.8,
    ritmo: 0.15 + aleatorio() * 0.25,
    escala: 0.09 + aleatorio() * 0.07,
  }));
  const auxiliar = new THREE.Object3D();
  return (instante, ativa) => {
    borboletas.visible = ativa;
    if (!ativa) return;
    dados.forEach((b, i) => {
      const a = b.angulo + instante * b.ritmo;
      const oscila = Math.sin(instante * 0.9 + b.angulo * 3) * 1.4;
      auxiliar.position.set(
        Math.cos(a) * (b.raio + oscila),
        b.altura + Math.sin(instante * 2.1 + b.angulo) * 0.35,
        -150 + Math.sin(a) * (b.raio + oscila),
      );
      auxiliar.rotation.set(0.4, -a, 0);
      auxiliar.scale.setScalar(b.escala);
      auxiliar.updateMatrix();
      borboletas.setMatrixAt(i, auxiliar.matrix);
    });
    borboletas.instanceMatrix.needsUpdate = true;
  };
}

export function criarAmbiente({ cena, guardar, tempo, vento, sol, luzCeu }) {
  const ceu = {
    topo: { value: new THREE.Color() },
    horizonte: { value: new THREE.Color() },
    corSol: { value: new THREE.Color() },
    direcaoSol: { value: new THREE.Vector3() },
  };
  const domo = criarCeu(cena, guardar, tempo, ceu);
  criarFloresta(cena, guardar, tempo, vento);
  criarPedras(cena, guardar);
  const intensidadeRaios = criarRaios(cena, guardar, tempo, ceu.corSol);
  const atualizarPassaros = criarPassaros(cena, guardar, tempo);
  const vagalumes = criarVagalumes(cena, guardar, tempo);
  const atualizarBorboletas = criarBorboletas(cena, guardar, tempo);

  const corNevoa = { value: new THREE.Color() };
  function aplicarMomento(progresso) {
    let indice = 0;
    while (indice < MOMENTOS.length - 2 && progresso > MOMENTOS[indice + 1].em)
      indice++;
    const a = MOMENTOS[indice],
      b = MOMENTOS[indice + 1];
    const t = THREE.MathUtils.smoothstep(progresso, a.em, b.em);
    ceu.topo.value.lerpColors(a.topo, b.topo, t);
    ceu.horizonte.value.lerpColors(a.horizonte, b.horizonte, t);
    ceu.corSol.value.lerpColors(a.sol, b.sol, t);
    corNevoa.value.lerpColors(a.nevoa, b.nevoa, t);
    cena.fog.color.copy(corNevoa.value);
    const altura = THREE.MathUtils.lerp(a.alturaSol, b.alturaSol, t);
    ceu.direcaoSol.value.set(-0.42, altura, -0.9).normalize();
    sol.position.copy(ceu.direcaoSol.value).multiplyScalar(60);
    sol.color.copy(ceu.corSol.value);
    sol.intensity = THREE.MathUtils.lerp(a.luzSol, b.luzSol, t);
    luzCeu.intensity = THREE.MathUtils.lerp(a.luzCeu, b.luzCeu, t);
    luzCeu.color.lerpColors(ceu.horizonte.value, ceu.topo.value, 0.4);
  }

  return {
    corCeu: ceu.horizonte,
    corNevoa,
    atualizar(instante, progresso, camera) {
      aplicarMomento(progresso);
      domo.position.copy(camera.position);
      // Os raios só fazem sentido dentro da mata; somem antes da vista aberta.
      intensidadeRaios.value =
        (0.12 + THREE.MathUtils.smoothstep(progresso, 0.2, 0.55) * 0.12) *
        (1 - THREE.MathUtils.smoothstep(progresso, 0.56, 0.68));
      const anoitecer = THREE.MathUtils.smoothstep(progresso, 0.72, 0.95);
      vagalumes.intensidade.value = anoitecer;
      vagalumes.pontos.visible = anoitecer > 0.01;
      atualizarPassaros(instante, camera);
      atualizarBorboletas(instante, progresso > 0.45);
    },
  };
}
