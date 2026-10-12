

let salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};

let sum = 0;
let count = 0;

for (let name in salaries) {
    sum += salaries[name];
    count++;
}

let average = count === 0 ? 0 : sum / count;

console.log("Середня зарплата:", average);
Результат для першого об'єкта:

text
Середня зарплата: 216.66666666666666
Для другого об'єкта із завдання:

javascript
let salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};

