# Cálculo de una sucesión mediante matrices

Este proyecto surgió a partir de un ejercicio técnico que me encontré durante una búsqueda laboral como desarrollador web.

El problema consistía en trabajar con una sucesión definida por una recurrencia y calcular el término que se encuentra en una posición extremadamente grande. En concreto, se pedían los **últimos 4 dígitos del término en la posición `2023202320232023`**.

La sucesión comienza:

$$
2023,\ 2024,\ 2025,\ldots
$$

y cada término se obtiene sumando los tres anteriores:

$$
a_n = a_{n-1} + a_{n-2} + a_{n-3}
$$

Una solución directa consistiría en calcular todos los términos anteriores hasta llegar a la posición buscada. Sin embargo, para una posición tan grande, esto requeriría una cantidad enorme de operaciones.

## Enfoque

Mientras estaba estudiando Álgebra y transformaciones lineales, decidí representar la recurrencia mediante una matriz de transición.

Si tenemos el estado:

$$
\begin{pmatrix}
a_n\\
a_{n-1}\\
a_{n-2}
\end{pmatrix}
$$

podemos obtener el siguiente estado mediante:

$$
\begin{pmatrix}
a_{n+1}\\
a_n\\
a_{n-1}
\end{pmatrix}
=
\begin{pmatrix}
1 & 1 & 1\\
1 & 0 & 0\\
0 & 1 & 0
\end{pmatrix}
\begin{pmatrix}
a_n\\
a_{n-1}\\
a_{n-2}
\end{pmatrix}
$$

Por lo tanto, en lugar de aplicar la transformación una vez por cada término, puedo calcular potencias de esta matriz.

Para hacer esto utilicé **exponenciación rápida**, que reduce la cantidad de pasos necesarios de aproximadamente \(n\) a \(O(\log n)\).

Además, como solamente interesan los últimos cuatro dígitos, todas las operaciones se realizan módulo `10000`.

## Resultado

El programa calcula:

```text
a[2023202320232023] mod 10000
```

y obtiene:

```text
3363
```

Por lo tanto, los últimos cuatro dígitos del término buscado son:

**3363**

## Tecnologías

* JavaScript
* Node.js
* Matrices
* Exponenciación rápida
* Aritmética modular

No se utilizaron librerías externas para las operaciones matriciales. La implementación se realizó manualmente para comprender y mostrar el algoritmo.

## Ejecución

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar en la carpeta:

```bash
cd <NOMBRE_DEL_REPOSITORIO>
```

Ejecutar:

```bash
node index.js
```

El programa debería mostrar:

```text
3363
```

## Objetivo del proyecto

El objetivo no es presentar una implementación de matrices genérica, sino mostrar cómo un problema de programación puede transformarse utilizando conceptos matemáticos.

En este caso:

**recurrencia → transformación lineal → matriz de transición → exponenciación rápida → resultado**

git clone https://github.com/Facundo307/problema-matrices

