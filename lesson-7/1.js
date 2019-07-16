/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


// Решение
const inspect = function (array) {
    // При вызове функции не был передан один аргумент:
    if (typeof arguments[0] === 'undefined') {
        throw new Error('missing argument in function call');
    }

    // В качестве первого аргумента был передан не массив:
    if (typeof array !== 'object') {
        throw new Error('first parameter is not a object type');
    }

    return Array.from(array.filter(item => typeof item === 'string'), item => {
        return item.length;
    });
};

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
