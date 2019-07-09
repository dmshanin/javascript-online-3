/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение
const forEach = function (arr, callback, thisArg) {
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
        callback.call(thisArg, arr[i], i, arr);
    }
};

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
