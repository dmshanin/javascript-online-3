/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение
function flatten(array) {
    return array.reduce(function (flat, toFlatten) {
        // Если на каком-то уровне было найдено не число и не массив:
        if (typeof toFlatten !== 'number' && typeof toFlatten !== 'object') {
            throw new Error('Array item is not a number or array type');
        }

        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

function collect(array) {
    // При вызове функции не был передан один аргумент:
    if (typeof arguments[0] === 'undefined') {
        throw new Error('missing argument in function call');
    }

    // В качестве первого аргумента был передан не массив:
    if (typeof array !== 'object') {
        throw new Error('first parameter is not a object type');
    }

    const flatArray = Array.from(flatten(array));

    if (flatArray.length > 0) {
        return flatArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    return 0;
}

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
