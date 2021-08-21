# Tarea Buda - Metro

Este programa escrito en javascript encuentra alguna de las rutas mas cortas entre dos puntos de una red descrita de acuerdo a los requerimientos de la tarea de Buda.

El programa recibe una configuracion a partir de un archivo json con el siguiente formato:
````js
{
  "paths": {
    "a": ["b"],
    "b": ["a", "c"],
    "c": ["b"]
},
  "stations": {
    "a": "white",
    "b": "white",
    "c": "white",
  }
}

````
la propiedad paths contiene las conexiones que posee una estacion con otra. Es decir, cada key representa una estacion, y el array que contiene como valor todas las conexiones directas que salen o entran a ese nodo (la direccionalidad no es parte del problema).
Entonces, de acuerdo a este archivo de ejemplo, la red seria a - b - c. En otras palabras, se colocan todos los vecinos por cada nodo.

La propiedad stations contiene los colores de cada estacion, con la key como el nombre de cada estacion, y el valor el color. Los posibles colores son white (por defecto), red y green.

Para usar el programa, se debe usar el siguiente comando: 
```
node index.js --input=./file.json --from=a --to=f --color=red
```
color es opcional y puede ser white (por defecto), red o green.

El archivo file.json posee la red descrita en el enunciado del problema traducido al diseño que propongo.