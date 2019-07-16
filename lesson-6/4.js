/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение
const some = function (arr, callback, thisArg) {
    if (typeof arr === 'undefined' || typeof callback === 'undefined') {
        throw new Error('missing one or some parameters');
    }

    if (typeof arr !== 'object') {
        throw new Error('first parameter is not a object type');
    }

    if (typeof callback !== 'function') {
        throw new Error('second parameter is not a function type');
    }

    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
