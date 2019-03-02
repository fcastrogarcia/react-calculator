instalé math.js como dependencia en npm. La quise añadir como CDN pero pude constatar que mucha gente había tenido problemas instalando esa librería por esa vía.
Usé la función math.eval, ya que la función eval a secas de javascript hacía crashear el sitio cada vez que solicitaba un resultado pero el string terminaba con un operador, no con un número.
Decidí crear una función para cada tipo de input (uno para los números, otro para los operadores, otro para el decimal, otro para el backspace y otro para el clear).
En el state puse tres pares de key-value: uno para el último valor ingresado (currVal), otro para la formula, que vendría a ser toda la cuenta acumulada y otro que especifique si el número presente en el display es un resultado o no, dato que permite reemplazar ese resultado por otro número ingresado o mantenerlo si lo que se ingresa es un operador.   
Una de las funciones que tuve que afrontar fue la del decimal (handleDecimal). Tenía que evitar que se pusieran dos puntos seguidos o que se pusiera un punto a un número que ya tuviera un punto (ej., 6.5.7). Tuve que crear un regular expression para identificar el número después del último operador ingresado o simplemente el último número que apareciera en la formula para averiguar si ese número tenía decimal o no. 

Diseño
-Para la botonera usé un grid, que era lo más práctico para el caso.
-usé font awesome para agregar el ícono del backspace.

cosas que cambiaré en el futuro:
que el display muestre la formula por un lado y el resultado provisorio por el otro, como un math.eval en real time, como hacen en general las calculadoras ahora (más que mostrar
la fórmula y el último input introducido, que no tiene mucho sentido).
