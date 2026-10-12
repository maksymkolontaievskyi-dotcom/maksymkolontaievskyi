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

console.log("Average salary:", average);

