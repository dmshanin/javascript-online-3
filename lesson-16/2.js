/**
 * Задача 2.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Сделайте все свойства приватными, а для чтения каждого из них создайте соответствующие методы:
 *
 * - getName — возвращает конкатенацию приватных свойств firstName и lastName;
 * - getRate — возвращает значение приватного свойства rate
 * - getDays — возвращает значение приватного свойства days
 * - getSalary — возвращает зарплату
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение
class Worker {
    constructor(firstName, lastName, rate, days) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._rate = rate;
        this._days = days;
    }

    getName () {
        return `${this._firstName} ${this._lastName}`;
    }

    getRate () {
        return this._rate;
    }

    getDays () {
        return this._days;
    }

    getSalary () {
        return this._rate * this._days;
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

exports.Worker = Worker;
