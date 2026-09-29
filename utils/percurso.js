const limitar = (valor) => Math.min(1, Math.max(0, valor));
const suavizar = (valor) => {
  const t = limitar(valor);
  return t * t * (3 - 2 * t);
};
const misturar = (inicio, fim, t) =>
  inicio.map((valor, i) => valor + (fim[i] - valor) * t);
export function centroCaminho(z) {
  return Math.sin(z * 0.13) * 1.4 + 1;
}
export function margemRio(z) {
  return centroCaminho(z) - suavizar((-z - 126) / 14) * 23;
}
export function calcularPercurso(progresso, ponteiro = { x: 0, y: 0 }) {
  const tunel = limitar(progresso / 0.58);
  const alinhamento = suavizar(tunel / 0.14);
  const z = 12 - suavizar(tunel) * 140;
  let posicao = [centroCaminho(z) * alinhamento, 3.1, z];
  let olhar = [
    centroCaminho(z - 12) * alinhamento,
    3.7 - alinhamento * 0.6,
    z - 12,
  ];
  if (progresso > 0.58 && progresso <= 0.7) {
    const t = suavizar((progresso - 0.58) / 0.12);
    posicao = misturar([centroCaminho(-128), 3.1, -128], [0, 3.8, -137], t);
    olhar = misturar([centroCaminho(-140), 3.1, -140], [0, 4, -150], t);
  } else if (progresso > 0.7 && progresso <= 0.83) {
    const t = suavizar((progresso - 0.7) / 0.13);
    posicao = misturar([0, 3.8, -137], [0, 8.5, -123], t);
    olhar = [0, 4, -150];
  } else if (progresso > 0.83) {
    const angulo = suavizar((progresso - 0.83) / 0.17) * Math.PI * 1.5;
    posicao = [
      Math.sin(angulo) * 27,
      8.5 + Math.sin(angulo) * 0.8,
      -150 + Math.cos(angulo) * 27,
    ];
    olhar = [0, 4, -150];
  }
  posicao[0] += ponteiro.x * (1.6 - alinhamento * 1.3);
  posicao[1] -= ponteiro.y * (0.65 - alinhamento * 0.47);
  olhar[0] += ponteiro.x * (2 - alinhamento * 1.6);
  olhar[1] -= ponteiro.y * 0.2;
  return { posicao, olhar, tunel, alinhamento };
}
