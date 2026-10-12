
let car = {
    model: "BMW",
    speed: 120,

    run: function() {
        console.log(`${this.model} їде зі швидкістю ${this.speed}`);
    },

    stop: function() {
        console.log(`${this.model} зупинилася`);
    }
};

car.run();
car.stop();
