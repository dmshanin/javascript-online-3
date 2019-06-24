/**
 # Задача 9

 Отсортируйте массив по убыванию.

 Использовать встроенные методы массивов — нельзя.

 ```javascript
 const arr = [1, 2, 3, 4, 5, 6];
 // [6,5,4,3,2,1]
 ```
 */

const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let memory = arr[i];
            arr[i] = arr[j];
            arr[j] = memory;
        }
    }
}
console.log(arr);