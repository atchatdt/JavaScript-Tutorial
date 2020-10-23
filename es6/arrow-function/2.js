function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
        this.speed = speed;
        // let self = this;
        setTimeout(function () {
            console.log(this);
        }, 1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;