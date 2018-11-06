var car = new Object();

car.name = prompt();
car.model = prompt();
car.cor = prompt();


var    car = {

    name: prompt(),
    model: prompt(),
    color: prompt()
}

console.log(JSON.stringify(car));

car.start = function(){
    console.log(this.name + 'pronto para iniciar o trajeto...')
}

car.start();