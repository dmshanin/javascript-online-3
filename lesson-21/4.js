// Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
//

// Создайте класс `Countries`...
class Countries {
    // ... который при создании своего экземпляра принимает один параметр ...
    constructor(url) {
        // ... с типом строка.
        if (typeof url !== 'string') {
            // Генерировать ошибку если `url` по типу не строка.
            throw new Error('argument is not a string type');
        }

        // Этот параметр будет служить API эндпоинтом.
        this.url = url;
    }

    // У класса `Countries` должен быть один метод `send` ...
    send (size) {
        const url = `${this.url}?size=${size}`;

        // А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.
        if (typeof size !== 'number') {
            // Генерировать ошибку если методу `send` передать по типу не число.
            throw new Error('argument is not a number type');
        }

        // ... который должен возвращать промис.
        return new Promise(function (resolve, reject) {
            get(url, (error, meta, body) => {
                const statusCode = meta.status;

                // Если сервер ответил статус кодом `200` ...
                if (statusCode === 200) {
                    const { data } = JSON.parse(body);

                    // ... промис **должен** возвращать массив который содержит список объектов-стран.
                    resolve(data);
                } else { // В том случае если сервер ответил статус кодом не `200` ...
                    // ... промис **должен** генерировать ошибку с текстом `We have error, status code: ${statusCode}`
                    // TODO: Вот тут по формулировке задаачи не совсем ясно что должно быть. Написано генерировать ошибку, но так как это промис, должен быть реджект а не ошибка вв привычном виде, поэтому я здесь написал оба варианта
                    // throw new Error(`We have error, status code: ${statusCode}`);
                    reject(`We have error, status code: ${statusCode}`);
                }
            });
        });
    }
}

//
const get = require('fetch').fetchUrl;

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();
