export default class Bank {

    constructor() {

        this.users = [
            {
                id: 'first',
                balance: 312.75,
                currency: 'USD',
            },
            {
                id: 'second',
                balance: 27.18,
                currency: 'EUR',
            }
        ];

        // Для упрощения здесь задан усредненный курс для всех операций покупки и продажи
        this.rate = {
            USD: 1,
            EUR: 1.10,
        }
    }

    getUserData (userId) {
        return this.users.find((user) => user.id === userId);
    }

    setUserData (userId, data) {
        const index = this.users.findIndex((user) => user.id === userId);

        this.users[index] = data;

        return this.users[index];
    }

    withdrawFromAccountBalance (userId, value) {
        const user = this.getUserData(userId);
        user.balance = user.balance - Number(value);
    }

    increaseAccountBalance (userId, value) {
        const user = this.getUserData(userId);

        user.balance = user.balance + Number(value);
    }

    // смена статуса баланса пользователя
    availabilityUserBalance (userId, status) {
        const userData = this.users.find((user) => user.id === userId);

        Object.defineProperty(userData, 'balance', {
            writable: status,
        });

        return userData;
    }

    // Конвертация средств
    conversionOfFunds (value, currency) {
        const newValue = value / this.rate[currency];

        return newValue.toFixed(2);
    }
}
