/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение
const every = function (arr, callback, thisArg) {
    if (typeof arr === 'undefined' || typeof callback === 'undefined') {
        throw new Error('missing one or some parameters');
    }

    if (typeof arr !== 'object') {
        throw new Error('first parameter is not a object type');
    }

    if (typeof callback !== 'function') {
        throw new Error('second parameter is not a function type');
    }

    let i;
    const length = arr.length;
    for (i = 0; i < length; i = i + 1) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;
