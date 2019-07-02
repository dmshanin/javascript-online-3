/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение
// Получаем количество дней в текущем месяце
Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

// Получаем количество оставшихся дней в текущем месяце
Date.prototype.monthDelta = function() {
    return new Date().daysInMonth() - new Date().getDate();
};

Object.defineProperty(person, 'salary', {
    value: new Date().monthDelta() > 20 ? `good salary` : `bad salary`
});

person.salary; // good salary

exports.person = person;
