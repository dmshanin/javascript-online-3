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
    if (typeof value === 'number') {

        let result = value;

        for (let i = 1; i < 3; i++) {
            result *= value;
        }

        // можно было бы просто пеермножить, скорее всего так даже работать будет быстрее:
        // result = value * value * value;

        return result;
    } else {
        throw new Error('parameter is not a number type');
    }
};

/* не удалять */
f(4); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
