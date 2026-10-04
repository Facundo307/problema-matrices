const MODULO = 10000;

const MATRIZ_TRANSICION = [
  [1, 1, 1],
  [1, 0, 0],
  [0, 1, 0],
];

const ESTADO_INICIAL = [2025, 2024, 2023];

function multiplicarMatrices(a, b) {
  const resultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        resultado[i][j] =
          (resultado[i][j] + a[i][k] * b[k][j]) % MODULO;
      }
    }
  }

  return resultado;
}

function potenciaMatriz(matriz, exponente) {
  let resultado = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  while (exponente > 0) {
    if (exponente % 2 === 1) {
      resultado = multiplicarMatrices(resultado, matriz);
    }

    matriz = multiplicarMatrices(matriz, matriz);
    exponente = Math.floor(exponente / 2);
  }

  return resultado;
}

function calcularTermino(posicion) {
  if (posicion === 1) return 2023;
  if (posicion === 2) return 2024;
  if (posicion === 3) return 2025;

  const matrizElevada = potenciaMatriz(
    MATRIZ_TRANSICION,
    posicion - 3
  );

  const resultado =
    matrizElevada[0][0] * ESTADO_INICIAL[0] +
    matrizElevada[0][1] * ESTADO_INICIAL[1] +
    matrizElevada[0][2] * ESTADO_INICIAL[2];

  return resultado % MODULO;
}

const posicion = 2023202320232023;

console.log(calcularTermino(posicion));
