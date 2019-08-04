/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение
// "Дан массив с числами `[1, 2, 3]`" - возможно имелось ввиду, что необходмо установить дефолтное значение для входного параметра
// Если нужно дефолтное значение, то первая строчка этой функции будет выглядеть так: const f = function (array = [1, 2, 3]) {
const f = function (array) {
    if (!Array.isArray(array)) {
        throw new Error('parameter type should be an array');
    }

    if (array.length === 0) {
        throw new Error('parameter can\'t be an empty');
    }

    console.log(array[0]);

    array.splice(0, 1);

    f(array);
};

/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

export { f };
/* не удалять */
