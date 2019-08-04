/**
 # Задача 8

 Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

 Использовать встроенные методы массивов — нельзя.

 ```js
 const array = [1, 2, 3, 4, 5, 6];
 ```
 */

const array = [1, 2, 3, 4];

let result = 0;

for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    if (currentItem % 2 === 0 && currentItem > 3) {
        result += currentItem; // result = result + currentItem;
    }
}

console.log(result);
