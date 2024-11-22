function multiplicarMatricesMod(matrizA, matrizB, modulo) {
  let resultado = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        resultado[i][j] =
          (resultado[i][j] + matrizA[i][k] * matrizB[k][j]) % modulo;
      }
    }
  }
  return resultado;
}

// Calcula la potencia de una matriz de forma eficiente usando el método de exponentiación rápida
function potenciaMatrizMod(matriz, exponente, modulo) {
  // Matriz identidad (no cambia el resultado al multiplicar)
  let resultado = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  while (exponente > 0) {
    if (exponente % 2 === 1) {
      resultado = multiplicarMatricesMod(resultado, matriz, modulo);
    }
    matriz = multiplicarMatricesMod(matriz, matriz, modulo);
    exponente = Math.floor(exponente / 2);
  }
  return resultado;
}

// Encuentra los últimos 4 dígitos del término en la posición 'posicion'
function ultimosCuatroDigitos(posicion) {
  const modulo = 10000;

  // Matriz de transición para la sucesión
  const matrizTransicion = [
    [1, 1, 1],
    [1, 0, 0],
    [0, 1, 0],
  ];

  // Estado inicial con los tres primeros términos de la sucesión
  const estadoInicial = [2025, 2024, 2023];

  // Si la posición está en los tres primeros términos, devolvemos el valor directamente
  if (posicion === 1) return 2023;
  if (posicion === 2) return 2024;
  if (posicion === 3) return 2025;

  // Calcula la matriz de transición elevada a la potencia (posición - 3)
  const matrizElevada = potenciaMatrizMod(
    matrizTransicion,
    posicion - 3,
    modulo
  );

  // Multiplica la matriz elevada por el estado inicial para obtener el término deseado
  const resultado =
    (matrizElevada[0][0] * estadoInicial[0] +
      matrizElevada[0][1] * estadoInicial[1] +
      matrizElevada[0][2] * estadoInicial[2]) %
    modulo;

  // Devuelve los últimos 4 dígitos del resultado
  return resultado;
}

// Llama a la función con la posición deseada
console.log(ultimosCuatroDigitos(2023202320232023));
