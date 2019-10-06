import Transaction from "./Transaction/index.mjs";
import Bank from "./Bank/index.mjs";

function log(argument) {
    console.log(argument);
}

const bank = new Bank();

const scenario = [
    {
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario',
        },
        async call(store, logs) {
            // Логика выполнения шага
            const from = bank.getUserData('first');
            const to = bank.getUserData('second');

            return {
                from,
                to,
                transfer: {
                    value: 50,
                }
            }
        },
        async restore(store, logs) {
            // Логика отката шага
            // На данном этапе откатывать еще нечего, мы просто прочитали данные
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            // Логика выполнения шага

            // Берем предыдущий шаг сценария
            const indexPreviousStep = this.index - 1;

            // Смотрим в store с индексом шага
            const { from, to, transfer } = store.get(indexPreviousStep);

            try {
                // обращаемся в банк и говорим, что с баланса такого-то пользователя снимаем такую-то сумму
                bank.withdrawFromAccountBalance(from.id, transfer.value);

                // после чего замораживаем баланс его счета
                bank.availabilityUserBalance(from.id, false);

                // далее сравнивая два счета проверяем необходимость конвертации снятых средств
                if (from.currency !== to.currency) {
                    // если конвертация необходима то запрашиваем у банка курс конвертации и конвертируем средства
                    const convertedFunds = bank.conversionOfFunds(transfer.value, to.currency);

                    // полученный объем средств в нужной валюте отправляем на другой счёт
                    bank.increaseAccountBalance(to.id, convertedFunds);
                } else {
                    // если валюта та же, то зачисляем средства сразу на другой счет
                    bank.increaseAccountBalance(to.id, transfer.value);
                }

                // далее замораживаем счет получателя
                bank.availabilityUserBalance(to.id, false);

                // возвращаем для стора и логгирования
                return {
                    from: bank.getUserData(from.id),
                    to: bank.getUserData(to.id),
                }
            } catch (error) {
                throw new Error(error.message)
            }
        },
        async restore(store, logs) {
            // Логика отката шага

            // Получаем данные к которым требуется откатиться (данные первого шага)
            const initialData = store.get(1);

            // Берем предыдущий шаг сценария
            const indexPreviousStep = this.index - 1;

            // Смотрим в store с индексом шага
            const { from, to, transfer } = store.get(indexPreviousStep);

            // далее размораживаем счет получаетеля
            bank.availabilityUserBalance(to.id, true);

            // восстаналиваем его счет в первоначальное состояние
            bank.setUserData(to.id, initialData.to);

            // размораживаем счет отправителя
            bank.availabilityUserBalance(from.id, true);

            // восстаналиваем его счет в первоначальное состояние
            bank.setUserData(from.id, initialData.from);

            return {
                from: bank.getUserData(from.id),
                to: bank.getUserData(to.id),
            }
        },
    },
    {
        index: 3,
        meta: {
            title: 'Complete the transfer of funds',
            description: 'Unfreeze user accounts and completes the script.',
        },
        async call(store, logs) {
            // Берем предыдущий шаг сценария
            const indexPreviousStep = this.index - 1;

            // Смотрим в store с индексом шага
            const { from, to, transfer } = store.get(indexPreviousStep);

            // если все прошло успешно то размораживаем первый счет
            bank.availabilityUserBalance(from.id, true);

            // размораживаем второй счет
            bank.availabilityUserBalance(to.id, true);

            // возвращаем для стора и логгирования
            return {
                from: bank.getUserData(from.id),
                to: bank.getUserData(to.id),
            }
        },
        async restore(store, logs) {
            return {}
        },
    }
];
const transaction = new Transaction();
(async () => {
    try {
        await transaction.dispatch(scenario);
        const {store, logs, status} = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        // Send email about broken transaction
    }
})();
