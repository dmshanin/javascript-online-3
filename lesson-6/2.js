/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение
const filter = function (arr, callback, thisArg) {
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
    const results = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            results.push(arr[i]);
        }
    }
    return results;
};

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
