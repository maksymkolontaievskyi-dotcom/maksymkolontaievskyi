function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));          // true
console.log(isEmpty({ name: "John" })); // false
Пояснення:

Object.keys(obj) повертає масив власних перелічуваних властивостей об'єкта.

Якщо довжина цього масиву дорівнює нулю, об'єкт порожній.

Функція повертає true або false.
