/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(fill, quantity) {
    // При вызове функции не было передано два аргумента
    if (typeof fill === 'undefined' || typeof quantity === 'undefined') {
        throw new Error('missing one or some parameters');
    }

    // В качестве первого аргумента были переданы не число, не строка, не объект и не массив:
    if (typeof arguments[0] !== 'number' && typeof arguments[0] !== 'string' && typeof arguments[0] !== 'object') {
        throw new Error('first parameter is not a number, string, object type and is not an array');
    }

    // В качестве второго аргумента был передан не число:
    if (typeof arguments[1] !== 'number') {
        throw new Error('second parameter is not a number type');
    }

    let array;
    array = [];

    for (let i = 0; i < quantity; i++) {
        array.push(fill);
    }

    return array;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
