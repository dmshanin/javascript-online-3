/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = function (arr, callback, startValue) {
    if (typeof arr === 'undefined' || typeof callback === 'undefined' || typeof startValue === 'undefined') {
        throw new Error('missing one or some parameters');
    }

    if (typeof arr !== 'object') {
        throw new Error('first parameter is not a object type');
    }

    if (typeof callback !== 'function') {
        throw new Error('second parameter is not a function type');
    }

    if (typeof startValue !== 'number') {
        throw new Error('third parameter is not a number type');
    }

    let i;
    const length = arr.length;
    let result = startValue;
    for (i = 0; i < length; i = i + 1) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
};

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
