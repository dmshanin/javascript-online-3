class DB {
    constructor() {
        this.id = '0';
        this.map = new Map();
    }

    create(obj) {
        // принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
        if (obj !== Object(obj)) {
            throw new Error('parameter is not a object type');
        }

        // при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
        const id = this.id;

        this.id = String(Number(this.id) + 1);

        this.map.set(id, obj);

        // возвращает `id`
        return id;
    };

    // принимает идентификатор пользователь
    read(id) {
        // если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
        if (typeof id === 'undefined' || typeof id !== 'string') {
            throw new Error('`id` is not a string type');
        }

        const entry = this.map.get(id);

        //  если такого пользователя нет возвращать `null`
        if (typeof entry === 'undefined') {
            return null
        }

        // если есть — возвращать объект пользователя с полем `id` внутри объекта.
        return entry;
    };

    readAll() {
        // генерировать ошибку если в метод `readAll` передан параметр
        if (arguments.length > 0) {
            throw new Error('parameter passed to method');
        }

        const arr = [];

        this.map.forEach((value, key, ownMap) => {
            arr.push({
                [key]: value
            })
        });

        // возвращает массив пользователей
        return arr;
    };

    // принимает 2 обязательных параметра
    update(id, obj) {
        const entry = this.map.get(id);

        // генерирует ошибку если передан `id` с типом не строка
        if (typeof id !== 'string') {
            throw new Error('`id` is not a string type');
        }

        // генерирует ошибку если передан несуществующий `id`
        if (typeof entry === 'undefined') {
            throw new Error('passed non-existent `id`');
        }

        // генерирует ошибку если второй параметр не валидный
        if (obj !== Object(obj)) {
            throw new Error('the second parameter is not valid');
        }

        // обновляет пользователя
        Object.assign(this.map.get(id), obj); // подозреваю что здесь может быть решение не то которое ожидалось из-за ссылки на объект в мапе

        return id;
    };

    delete(id) {
        const entry = this.map.get(id);

        // Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
        if (typeof entry === 'undefined' || typeof id !== 'string') {
            throw new Error('passed non-existent or invalid `id`');
        }

        // удаляет пользователя
        this.map.delete(id);

        return true;
    };

    // Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
    find(query) {
        // Изначально массив пуст
        const data = [];

        // Генерировать ошибку, если query не валидный
        if (query !== Object(query)) {
            throw new Error('`query` is not valid');
        }

        const temporaryCollection = new Map();

        this.map.forEach((value, key, ownMap) => {
            if (typeof query.name !== 'undefined') {
                if (value.name === query.name) {
                    // запись в промежуточную коллекцию
                    temporaryCollection.set(key, ownMap.get(key));
                } else {
                    // удаляем запись из промежуточной коллекции
                    temporaryCollection.delete(key);
                    // останавливаем пребор ключей для этой запис
                    return false;
                }
            }

            if (typeof query.country !== 'undefined') {
                if (value.country === query.country) {
                    // запись в промежуточную коллекцию
                    temporaryCollection.set(key, ownMap.get(key));
                } else {
                    // удаляем запись из промежуточной коллекции
                    temporaryCollection.delete(key);
                    // останавливаем пребор ключей для этой запис
                    return false;
                }
            }

            if (typeof query.age !== 'undefined') {
                if (typeof query.age === 'number') {
                    if (value.age === query.age) {
                        // запись в промежуточную коллекцию
                        temporaryCollection.set(key, ownMap.get(key));
                    } else {
                        // удаляем запись из промежуточной коллекции
                        temporaryCollection.delete(key);
                        // останавливаем пребор ключей для этой запис
                        return false;
                    }
                }

                if (typeof query.age.min === 'number') {
                    if (value.age >= query.age.min) {
                        // запись в промежуточную коллекцию
                        temporaryCollection.set(key, ownMap.get(key));
                    } else {
                        // удаляем запись из промежуточной коллекции
                        temporaryCollection.delete(key);
                        // останавливаем пребор ключей для этой запис
                        return false;
                    }
                }

                if (typeof query.age.max === 'number') {
                    if (value.age <= query.age.max) {
                        // запись в промежуточную коллекцию
                        temporaryCollection.set(key, ownMap.get(key));
                    } else {
                        // удаляем запись из промежуточной коллекции
                        temporaryCollection.delete(key);
                        // останавливаем пребор ключей для этой запис
                        return false;
                    }
                }
            }

            if (typeof query.salary !== 'undefined') {
                if (value.salary >= query.salary.min) {
                    // запись в промежуточную коллекцию
                    temporaryCollection.set(key, ownMap.get(key));
                } else {
                    // удаляем запись из промежуточной коллекции
                    temporaryCollection.delete(key);
                    // останавливаем пребор ключей для этой запис
                    return false;
                }

                if (value.salary <= query.salary.max) {
                    // запись в промежуточную коллекцию
                    temporaryCollection.set(key, ownMap.get(key));
                } else {
                    // удаляем запись из промежуточной коллекции
                    temporaryCollection.delete(key);
                    // останавливаем пребор ключей для этой запис
                    return false;
                }
            }

            // добавляем в массив значения из временной коллекции
            data.push(Array.from(temporaryCollection.values()));

            // очищаем временную коллекцию
            temporaryCollection.clear();
        });

        // Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
        // Если во временной коллекции не будет записей то в data будет пустой массив
        return data;
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};

const customers = db.find(query); // массив пользователей
