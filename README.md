# Tarea Buda - Metro

Este programa escrito en javascript encuentra alguna de las rutas mas cortas entre dos puntos de una red descrita de acuerdo a los requerimientos de la tarea de postulacion a Buda.

## Requerimientos

Para ejecutar el programa, se requiere node v16.6.0, npm 7.19.0 y ejecutar ``npm install``

## Diseño de la solucion

El programa recibe una configuracion a partir de un archivo json con el siguiente formato:
````js
{
  "stations": {
    "a": { "color": "white", "connections": ["b"] },
    "b": { "color": "white", "connections": ["a", "c"] },
    "c": { "color": "white", "connections": ["b"] }
  }
}
````

la propiedad connections contiene las conexiones que posee una estacion con otra. Es decir, cada key representa una estacion, y el array que contiene connections son todas las conexiones directas que salen o entran a ese nodo (la direccionalidad no es parte del problema).
Entonces, de acuerdo a este archivo de ejemplo, la red seria a - b - c. En otras palabras, se colocan todos los vecinos por cada nodo.

La propiedad color corresponde al color de cada estacion. Los posibles colores son white, red y green.

Este diseño esta enfocado en facilitar la operacion del algoritmo que ideé, que consiste en tomar la estacion inicial y realizar busquedas "eager" en todos sus posibles ramificaciones (explorar todos los connections), y recursivamente hacer lo mismo con los connections de sus connections hasta que llega a la estacion final, y realiza un ordenamiento entre los caminos posibles buscando un minimo local. Para el tamaño del problema propuesto no detecte ningun problema de stack o memoria, pero no he realizado pruebas con sets de datos muy grandes. Dado el enunciado encontré que este algoritmo recursivo se comporta bien, ya que no hay requerimientos de tiempo o complejidad. Estuve estudiando algoritmos conocidos para problemas de rutas y encontre que resolvian problemas mas complejos con mas variables, como ponderacion de las rutas o direccionalidad, por lo que descarte invertir tiempo en profundizarlos o implementarlos.

## Uso

Para usar el programa, se debe usar el siguiente comando: 
```
node index.js --input=./file.json --from=a --to=f --color=red
```
color es opcional y puede ser white (por defecto), red o green.

El archivo de [demostracion](demoFile.json) posee la red descrita en el enunciado del problema traducido al diseño que propongo.