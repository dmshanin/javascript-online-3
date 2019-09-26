// Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.
getCustomers = (customers, countries) => {
    // Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

    // В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
    // Склеивание происходит **только** для объектов с флагом `verified: true`.

    // Функция `getCustomers` должна возвращать промис;
    return new Promise(function (resolve, reject) {
        customers.forEach((customer, index) => {
            // только для объектов у которых установлен флаг `verified: true`.
            if (typeof customer.verified !== 'undefined' && customer.verified) {
                // // В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
                    // Операция объединения происходит по ключу `id`
                    if (customer.id === countries[index].id) {
                        // Object.assign(customer, countries[index]);
                        resolve(Object.assign(customer, countries[index]));
                    } else {
                        // В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
                        reject(`We don't have information about country for this customer: ${customer.name}`);
                    }
            } else {
                // В том случае если объект невалидный промис реджектится с текстом `Customer is not verified`.
                reject('Customer is not verified');
            }
        })
    });
};

//
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
