
let user = {};

user.name = "Cris";
user.surname = "Simons";

user.name = "Brain";

delete user.name;

console.log(user);
Результат у консолі:

javascript
{ surname: "Simons" }
