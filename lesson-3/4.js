/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
const week = {
    1: 'Воскресенье',
    2: 'Понедельник',
    3: 'Вторник',
    4: 'Среда',
    5: 'Четверг',
    6: 'Пятница',
    7: 'Суббота',
};

const f = function(dayNumber) {
    if (arguments.length > 1) {
        throw new Error('should be one parameters');
    }

    if (typeof dayNumber !== 'number') {
        throw new Error('parameter type is not a Number');
    }

    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    return week[dayNumber];
};

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */
