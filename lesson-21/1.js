// Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность.
isCustomerVerified = (customer) => {
    // Функция `isCustomerVerified` должна возвращать промис;
    return new Promise(function (resolve, reject) {
        // Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`.
        if (typeof customer.verified !== 'undefined' && customer.verified) {
            // В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет `true`;
            resolve('true');
        } else {
            // В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`.
            reject('Customer is not verified');
        }
    });
};

//
const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))

isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified
