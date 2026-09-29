import * as THREE from "three";
import { margemRio } from "./percurso.js";

export function criarClareira(cena, guardar, tempo, vento) {
  let semente = 127;
  const aleatorio = () => {
    semente = (semente * 16807) % 2147483647;
    return (semente - 1) / 2147483646;
  };
  const grupo = new THREE.Group();
  grupo.position.set(0, 0, -150);
  cena.add(grupo);
  const terreno = new THREE.Mesh(
    guardar(new THREE.CircleGeometry(14, 80)),
    guardar(new THREE.MeshStandardMaterial({ color: "#658244", roughness: 1 })),
  );
  terreno.rotation.x = -Math.PI / 2;
  terreno.position.y = -0.12;
  grupo.add(terreno);
  const casca = guardar(
    new THREE.MeshStandardMaterial({ color: "#5b4933", roughness: 1 }),
  );
  function ramo(inicio, fim, base, ponta) {
    const direcao = new THREE.Vector3().subVectors(fim, inicio);
    const geometria = guardar(
      new THREE.CylinderGeometry(ponta, base, direcao.length(), 9),
    );
    const galho = new THREE.Mesh(geometria, casca);
    galho.position.copy(inicio).add(fim).multiplyScalar(0.5);
    galho.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direcao.normalize(),
    );
    grupo.add(galho);
  }
  ramo(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0.25, 5.6, 0.1),
    0.65,
    0.2,
  );
  const centros = [];
  for (let i = 0; i < 9; i++) {
    const angulo = (i / 9) * Math.PI * 2;
    const fim = new THREE.Vector3(
      Math.cos(angulo) * (2.6 + aleatorio()),
      6 + aleatorio() * 2,
      Math.sin(angulo) * (2.7 + aleatorio()),
    );
    ramo(
      new THREE.Vector3(0.15, 3.2 + aleatorio() * 1.8, 0.05),
      fim,
      0.25,
      0.055,
    );
    centros.push(fim);
    ramo(
      fim
        .clone()
        .multiplyScalar(0.7)
        .add(new THREE.Vector3(0, 1, 0)),
      fim.clone().add(new THREE.Vector3(0.7, 1, 0.5)),
      0.1,
      0.025,
    );
  }
  centros.push(new THREE.Vector3(0, 8, 0));
  const geometriaCopa = guardar(new THREE.IcosahedronGeometry(1, 1));
  const materialCopa = guardar(
    new THREE.MeshStandardMaterial({
      color: "#84a449",
      roughness: 0.88,
      flatShading: true,
    }),
  );
  const copa = guardar(
    new THREE.InstancedMesh(geometriaCopa, materialCopa, 480),
  );
  const auxiliar = new THREE.Object3D(),
    cor = new THREE.Color();
  for (let i = 0; i < 480; i++) {
    const centro = centros[i % centros.length];
    const angulo = aleatorio() * Math.PI * 2,
      raio = Math.sqrt(aleatorio()) * 2.2;
    auxiliar.position.set(
      centro.x + Math.cos(angulo) * raio,
      centro.y + (aleatorio() - 0.5) * 2,
      centro.z + Math.sin(angulo) * raio,
    );
    auxiliar.rotation.set(aleatorio() * 3, aleatorio() * 3, aleatorio() * 3);
    const escala = 0.35 + aleatorio() * 0.65;
    auxiliar.scale.set(escala, escala * 0.65, escala);
    auxiliar.updateMatrix();
    copa.setMatrixAt(i, auxiliar.matrix);
    cor.setHSL(
      0.22 + aleatorio() * 0.075,
      0.37 + aleatorio() * 0.2,
      0.2 + aleatorio() * 0.18,
    );
    copa.setColorAt(i, cor);
  }
  grupo.add(copa);
  const quantidade = window.innerWidth < 650 ? 600 : 1200;
  const geometriaPetala = guardar(new THREE.SphereGeometry(1, 7, 4));
  const materialPetala = guardar(
    new THREE.MeshStandardMaterial({
      color: "#f5f8df",
      roughness: 0.65,
      side: THREE.DoubleSide,
    }),
  );
  materialPetala.onBeforeCompile = (shader) => {
    shader.uniforms.tempo = tempo;
    shader.uniforms.vento = vento;
    shader.vertexShader =
      "uniform float tempo; uniform float vento;\n" + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
      transformed.x+=sin(tempo*1.2+instanceMatrix[3].x+instanceMatrix[3].z)*.07+vento*.09;`,
    );
  };
  const petalas = guardar(
    new THREE.InstancedMesh(geometriaPetala, materialPetala, quantidade * 6),
  );
  const miolos = guardar(
    new THREE.InstancedMesh(
      geometriaPetala,
      guardar(
        new THREE.MeshStandardMaterial({ color: "#e4c853", roughness: 0.75 }),
      ),
      quantidade,
    ),
  );
  const hastes = guardar(
    new THREE.InstancedMesh(
      guardar(new THREE.CylinderGeometry(0.009, 0.016, 1, 4)),
      guardar(
        new THREE.MeshStandardMaterial({ color: "#31532c", roughness: 1 }),
      ),
      quantidade,
    ),
  );
  for (let i = 0; i < quantidade; i++) {
    let x, z;
    do {
      const angulo = aleatorio() * Math.PI * 2,
        raio = 3 + Math.sqrt(aleatorio()) * 9;
      x = Math.cos(angulo) * raio;
      z = Math.sin(angulo) * raio;
    } while (
      Math.abs(x - margemRio(z - 150)) <
      2.8 + Math.sin((z - 150) * 0.09) * 0.8
    );
    const altura = 0.3 + aleatorio() * 0.5;
    auxiliar.position.set(x, altura / 2, z);
    auxiliar.rotation.set(0, 0, 0);
    auxiliar.scale.set(1, altura, 1);
    auxiliar.updateMatrix();
    hastes.setMatrixAt(i, auxiliar.matrix);
    auxiliar.position.y = altura;
    auxiliar.scale.set(0.065, 0.045, 0.065);
    auxiliar.updateMatrix();
    miolos.setMatrixAt(i, auxiliar.matrix);
    for (let j = 0; j < 6; j++) {
      const a = (j / 6) * Math.PI * 2;
      auxiliar.position.set(
        x + Math.cos(a) * 0.12,
        altura,
        z + Math.sin(a) * 0.12,
      );
      auxiliar.rotation.set(0, -a, 0);
      auxiliar.scale.set(0.16, 0.025, 0.055);
      auxiliar.updateMatrix();
      petalas.setMatrixAt(i * 6 + j, auxiliar.matrix);
      cor.set(i % 4 === 0 ? "#e0edb3" : "#fffdf2");
      petalas.setColorAt(i * 6 + j, cor);
    }
  }
  grupo.add(hastes, miolos, petalas);
  const petalasSuspensas = guardar(
    new THREE.InstancedMesh(geometriaPetala, materialPetala, 240),
  );
  const sementes = Array.from({ length: 240 }, () => ({
    angulo: aleatorio() * Math.PI * 2,
    raio: 4 + aleatorio() * 3.5,
    altura: 1 + aleatorio() * 3,
    escala: 0.07 + aleatorio() * 0.07,
  }));
  petalasSuspensas.frustumCulled = false;
  grupo.add(petalasSuspensas);
  return {
    atualizar(instante, progresso) {
      grupo.visible = progresso > 0.42;
      if (!grupo.visible) return;
      sementes.forEach((folha, i) => {
        const angulo = folha.angulo + instante * 0.12;
        auxiliar.position.set(
          Math.cos(angulo) * folha.raio,
          folha.altura + Math.sin(instante * 0.6 + angulo) * 0.4,
          Math.sin(angulo) * folha.raio,
        );
        auxiliar.rotation.set(angulo + instante * 0.3, angulo, angulo * 0.5);
        auxiliar.scale.set(
          folha.escala,
          folha.escala * 0.2,
          folha.escala * 0.55,
        );
        auxiliar.updateMatrix();
        petalasSuspensas.setMatrixAt(i, auxiliar.matrix);
      });
      petalasSuspensas.instanceMatrix.needsUpdate = true;
      copa.rotation.y = Math.sin(instante * 0.3) * 0.012;
    },
  };
}
