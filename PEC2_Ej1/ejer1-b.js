
/* Esta función recibe como parámetros:
 - Un array de objectos
 - Una llave y un valor específico
*/

const findOne = async (list, { key, value }) => {
    // list es el array 'users' declarado más adelante en el código. 'users' incluye dos objetos con dos key-values: name y rol. 
    return new Promise((resolve, reject) => {
        // Esta promesa esperará dos segundos antes de ejecutarse, gracias al setTimeout.


        // Una vez que se ha evaluado si 'element[key]' es igual a 'value', se acumulará el valor devuelto por el método .find() en la variable declarada como 'element' (si es verdadero se devuelve el objeto con su clave/valor, si es falso se devuelve el valor 'undefined'), y posteriormente habrá dos caminos:
        // Si 'element' tiene un valor entonces se llamará a la función onSuccess con 'element' como parámetro, si no cumple esta condición se llamará a la función onErrror con un mensaje (string) como parámetro, en este caso: 'ERROR: Element Not Found'.
        setTimeout(() => {
            // list.find() permite hacer una búsqueda dentro del array 'users' para buscar elementos que coincidan con el parámetro 'value' pasado a esta función.
            // En la búsqueda a través del array, 'element' respresenta cada uno de los objetos en 'users' y 'element[key]' representa el valor de 'name' de cada objeto en el array 'users'.
            // Así el método .find() compara si element[key] es igual al valor pasado en el parámetro value. Ej.: Si Fermin es igual a Ana.
            // Una vez que se ha evaluado si 'element[key]' es igual a 'value', se acumulará el valor devuelto por el método .find() en la variable declarada como 'element' (si es verdadero se devuelve el objeto con su clave/valor, si es falso se devuelve el valor 'undefined').
            const element = list.find(element => element[key] === value);


            if (element !== undefined) {
                // Si 'element' no es undefined, es decir, si ha encontrado una coincidencia en 'users' con el valor del parámetro value, entonces la promesa será resuelta y el método resolve() será ejecutado con el valor element.value como parámetro.
                resolve(element.name);
            } else {
                //Si no encuentra coincidencias, la promesa será rechazada y se ejucatrá el método reject() con un mensaje (string) como parámetro, en este caso: 'ERROR: Element Not Found'.
                reject({ msg: 'ERROR: Element Not Found' });
            }
        }, 2000);
    });
};

// // Aquí se declaran las dos funciones que recibe findOne como callback.
// // onSuccess imprime en consola el valor name recibido.
const onSuccess = (name) => console.log(`user: ${name}`);
// // onError imprime en consola el mensaje recibido desde la función findOne.
const onError = (msg) => console.log(msg);

// Este es el array que es pasado a la función findOne como parámetro
const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

// impresión de una string en consola, que sucede previa a la ejecución de la función findOne, misma que espera 2 segundos en ejecutarse.
console.log('findOne success');
// Ejecución de la función findOne con parámetros específicos. Este ejemplo ejecutará el método then y por consecuencia la función onSuccess() se ejecutará.
findOne(users, { key: 'name', value: 'Carlos' }).then(value => onSuccess(value)).catch(error => onError(error.msg));

// impresión de una string en consola, que sucede previa a la ejecución de la función findOne, misma que espera 2 segundos en ejecutarse.
console.log('findOne error');
// // Ejecución de la función findOne con parámetros específicos. Este ejemplo ejecutará el método catch con la función onError, ya que Fermin no aparece en el array 'users'.
findOne(users, { key: 'name', value: 'Fermin' }).then(value => onSuccess(value)).catch(error => onError(error.msg));



/* Al finalizar de ejecutarse este código, veremos impreso en la consola lo siguiente: 

ejer1.js:22 findOne success
ejer1.js:25 findOne error
// una espera de dos segundos
ejer1.js:8 user: Carlos
ejer1.js:9 ERROR: Element Not Found

*/
