export default class Transaction {

    constructor () {

        // Ассоциативный массив Map, в котором каждое свойство хранит в себе данные, необходимые для выполнения следующего шага сценария
        this.store = new Map();

        // Массив, который содержит в себе объекты, где каждый объект описывает результат выполнения или отката каждого шага сценария
        this.logs = [];

        // Статус выполнения транзакции
        this.status = null;
    }

    // Запуск транзакции
    async dispatch (scenario) {
        const { store, logs } = this;

        const stepData = {};
        for (let [ index, step ] of scenario.entries()) {

            // Записываем во временное хранилище данные
            stepData.index = scenario[index].index;
            stepData.meta = scenario[index].meta;

            try {
                // Записываем во временное хранилище результат выполнения функции
                stepData.stepResult = await step.call(store, logs);
                stepData.error = null;

                // Устанавливаем успешной статус транзакции на текущем шаге
                this.status = 'Успешно выполнена';
            } catch (error) {
                // Разбираем объект ошибки
                const { name, message, stack } = error;

                // Записываем во временное хранилище данные об ошибке
                stepData.NextStep = null;
                stepData.error = {
                    name,
                    message,
                    stack,
                };

                // Выполняем откат
                this.rollback(scenario, step);

                // Останавливаем выполнение транзакции
                break;
            }

            store.set(scenario[index].index, JSON.parse(JSON.stringify(stepData.stepResult)));
            logs.push(stepData);
        }


    }

    async rollback (scenario, step) {
        // Выполняем откат и проставляем соответствующий статус выполнения
        try {
            await step.restore(this.store, this.logs);
            this.status = 'Успешно выполнена';
        } catch (e) {
            this.status = 'Неуспешно восстановлена';
        }
    }
}
