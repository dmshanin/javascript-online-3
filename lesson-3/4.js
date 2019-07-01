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
const f = function(dayNumber) {
    if (typeof dayNumber === 'number') {
        if (dayNumber > 0 && dayNumber < 8) {
            const week = [];

            week[1] = 'Воскресенье';
            week[2] = 'Понедельник';
            week[3] = 'Вторник';
            week[4] = 'Среда';
            week[5] = 'Четверг';
            week[6] = 'Пятница';
            week[7] = 'Суббота';

            return week[dayNumber];
        } else {
            throw new Error('parameter should be in the range of 1 to 7');
        }
    } else {
        throw new Error('parameter type is not a Number');
    }
};

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */