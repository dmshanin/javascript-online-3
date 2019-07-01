/**
 * Задача 6.
 *
 * Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 *
 * Заметки:
 * - Чётные числа могут делится на 2 без остатка.
 */

// Решение
const isEven = function(number) {
    if (typeof number === 'number') {
        return number % 2 === 0; // true || false
    } else {
        throw new Error('parameter type is not a Number');
    }
};

// Для сортировки массива из предыдущей задачи.
// const array = [1, 2, -4, 3, -9, -1, 7];
// const newArr = [];
// for (let i = 0; i <= array.length; i++) {
//     if (isEven(array[i])) {
//         newArr.push(array[i]);
//     }
// }
//
// console.log('newArr', newArr);

/* не удалять */
isEven(3); // false
isEven(4); // true
isEven('Content'); // Error: parameter type is not a Number

export { isEven };
/* не удалять */
