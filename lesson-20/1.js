class Customers {
    // который умеет работать с механизмом `for of`

    constructor() {
        this.persons = [];
        this.verifed = [];
    }

    add (person) {
        // который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.
        if (typeof person.name === 'undefined') {
            throw new Error('Missing required field `name`');
        }

        this.persons.push(person);
    }

    [Symbol.iterator]() {
        let i = 0;

        // при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.
        this.persons.forEach((person) => {
            if (typeof person.verified !== 'undefined' && person.verified) {
                this.verifed.push(person);
            }
        });

        return {
            next: () => {
                const done = i >= this.verifed.length;
                const value = !done ? this.verifed[i++] : undefined;

                return {
                    done,
                    value,
                }
            }
        }
    }
}


const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }
