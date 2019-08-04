/**
 # Задача 6

 Написать код который посчитает сумму всех элементов в массиве.

 Использовать встроенные методы массивов — нельзя.

 ```js
 const array = [1, 2, 3, 4];
 ```
 */

const array = [1, 2, 3, 4];

let result = 0;

for (let i = 0; i < array.length; i++) {
    result += array[i]; // result = result + array[i];
}

console.log(result);
