/* Esta función recibe como parámetros:
 - Un array de objectos
 - Una llave y un valor específico
*/

const findOne = async (list, { key, value }) => {
    // list es el array 'users' declarado más adelante en el código. 'users' incluye dos objetos con dos key-values: name y rol. 
    return new Promise((resolve, reject) => {
        // Esta promesa esperará dos segundos antes de ejecutarse, gracias al setTimeout.

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

// Aquí se declaran las dos funciones que se ejecutarán cuando la promesa dentro de findOne() se resuelva o se rechace.
// onSuccess imprime en consola el valor name recibido como parámetro.
const onSuccess = (name) => console.log(`user: ${name}`);
// onError imprime en consola el mensaje recibido como parámetro.
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
// impresión de una string en consola, que sucede previa a la ejecución de la función findOne, misma que espera 2 segundos en ejecutarse.
console.log('findOne error');

// Nueva función asíncrona que llama a findOne y espera el resultado de la promesa, si esta ha sido resuelta entonces 
// entrar en el método try y ejecuta onSuccess. Si ha sido rechazada, entra al método catch y ejecuta onError
const getResults = async (list, {key, value}) => {
    try {
        const result = await findOne(list, {key, value});
        onSuccess(result);
     } catch(e) {
        onError(e.msg);
     }
}

// Ejecución de la función asíncrona con parámetros específicos
getResults(users, { key: 'name', value: 'Carlos' });
getResults(users, { key: 'name', value: 'Fermin' })


/* Al finalizar de ejecutarse este código, veremos impreso en la consola lo siguiente: 

ejer1.js:22 findOne success
ejer1.js:25 findOne error
// una espera de dos segundos
ejer1.js:8 user: Carlos
ejer1.js:9 ERROR: Element Not Found

*/
