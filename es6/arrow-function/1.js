function Car() {
    this.speed = 0;
    console.log(this.speed)
    this.speedUp = function (speed) {
        this.speed = speed;
        // console.log(this)
        setTimeout(
            () => console.log(this),
            1000);

    };
}

let car = new Car();
car.speedUp(50); // 50;