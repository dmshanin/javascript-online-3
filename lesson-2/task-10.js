/**
 # Задача 10

 Отсортируйте массив по возрастанию.

 Использовать встроенные методы массивов — нельзя.

 ```javascript
 const arr = [6, 5, 4, 3, 2, 1];
 // [1,2,3,4,5,6]
 ```
 */

const arr = [6, 5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        const currentItem = arr[i];
        const sortItem = arr[j];

        if (currentItem < sortItem) {
            let memory = currentItem;
            arr[i] = sortItem;
            arr[j] = memory;
        }
    }
}
console.log(arr);
