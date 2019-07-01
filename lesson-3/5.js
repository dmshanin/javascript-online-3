/**
 * Задача 5.
 *
 * Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
 * Создайте из него новый массив, где останутся только положительные числа `[1, 2, 3, 7]`.
 * Создайте для этого вспомогательную функцию `isPositive(-3)`,
 * которая параметром будет принимать число и возвращать true,
 * если число положительное, и false — если отрицательное.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Для добавление нового элемента в конец массива используйте метод push.
 */

const array = [1, 2, -4, 3, -9, -1, 7];

// Решение
const isPositive = function(number) {
    if (typeof number === 'number') {
        return number > 0 ? true : number < 0 ? false : null;
    } else {
        throw new Error('parameter type is not a Number');
    }
};

const newArr = [];
for (let i = 0; i <= array.length; i++) {
    if (isPositive(array[i])) {
        newArr.push(array[i]);
    }
}

/* не удалять */
isPositive(-3); // false
isPositive(3); // true
isPositive('s'); // Error: parameter type is not a Number

export { isPositive };
/* не удалять */
