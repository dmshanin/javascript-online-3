/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
const f = function(value) {
    if (typeof value !== 'number') {
        throw new Error('parameter is not a number type');
    }

    return Math.pow(value, 3); // value ** 3
};

/* не удалять */
f(4); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
