class Transaction {

    constructor () {

        // ассоциативный массив Map, в котором каждое свойство хранит в себе данные, необходимые для выполнения следующего шага сценария
        this.store = new Map();

        // массив, который содержит в себе объекты, где каждый объект описывает результат выполнения или отката каждого шага сценария
        this.logs = [
            // Структура массива logs
            //     {
            //         index: 1,
            //         meta: {
            //             title: 'Read popular customers'
            //             description: 'This action is responsible for reading the most popular customers'
            //         },
            //         stepResult: {},
            //         error: null
            //     },
            //     {
            //         index: 2,
            //         meta: {
            //             title: 'Add customer'
            //             description: 'This action will add some customer'
            //         },
            //         NextStep: null,
            //         error: {
            //             name: 'TypeError',
            //             message: 'name is not a function',
            //             stack: 'Stack trace'
            //         }
            //     }
        ];

        //
        this.status = null;
    }

    async dispatch (scenario) {
        const { store, logs } = this;

        console.group('async dispatch (scenario)');
        console.log('метод для выполнения шага', scenario.call(store, logs));
        console.log('метод для восстановления шага', scenario.restore(store, logs));
        console.log('свойство, обозначающее порядковый номер шага', scenario.index);
        console.log('свойство, с описанием шага', scenario.meta);
        console.groupEnd();
    }

    async rollback () {

    }
}

function log() {
    console.log(arguments);
}

//
const scenario = [
    {
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario',
        },
        async call(store, logs) {
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
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
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
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
