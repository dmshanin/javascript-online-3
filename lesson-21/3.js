// Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
// $ yarn add fetch

// Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.
const send = (url) => {
    // Функция `send` должна возвращать промис;
    return new Promise(function (resolve, reject) {
        get(url, (error, meta, body) => {
            const statusCode = meta.status;

            // Если сервер ответил статус кодом `200` ...
            if (statusCode === 200) {
                const { data } = JSON.parse(body);

                // ... промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
                resolve(data);
            } else { // В том случае если сервер ответил статус кодом не `200` ...
                // ... промис **должен** реджектится с текстом `We have error, status code: ${statusCode}`
                reject(`We have error, status code: ${statusCode}`);
            }
        });
    });
};

// До рефакторинга
// const get = require('fetch').fetchUrl;
//
// const url = 'https://lab.lectrum.io/geo/api/countries?size=2';
// get(url, (error, meta, body) => {
//     const { data } = JSON.parse(body);
//     console.log(data);
// });

// После рефакторинга
const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
