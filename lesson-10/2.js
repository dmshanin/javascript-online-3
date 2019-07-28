/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение
function calculate() {
    let prevResult = undefined;

    Object.keys(arguments).forEach((index) => {
        // Любой из аргументов функции calculate() не является функцией;
        if (typeof arguments[index] !== 'function') {
            throw new Error('argument is not a function type');
        }

        // Первая коллбек-функция не принимает параметров.
        const result = arguments[index](typeof prevResult !== 'undefined' ? prevResult : undefined);

        if (typeof result !== 'undefined') {
            prevResult = result;
        } else {
            // Любая функция из аргументов не вернула значение.
            throw new Error('function does not return a value');
        }
    });

    // После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
    return prevResult;
}

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

exports.calculate = calculate;
