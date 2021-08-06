const x = {}
const y = {}
console.log(x)
console.log(y)
console.log(x.__proto__ === y.__proto__) // true
// 모든 오브젝트는 오브젝트프로토타입을 상속한다.

const array = [];
console.log(array) // array 프로토를 가진다. 
//그리고 array는 object를 상속한다. 그래서 항상 toString을 이용할 수 있다. 

function CoffeeMachine(beans) {
    this.makeCoffee = shots => {
        console.log('making....')
    }
    //만들어지는 인스턴스보다 만들어지는 instance member level 
    this.beans = beans;
}
// 이건 prototype 수준으로 만드는 prototype member level 
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making')
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20); // object 상속 
console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype) //프로토타입을 연결시켜줘서 상속받을 수 있다. 
const latteeMachine = new LatteMachine(123);
console.log(LatteMachine);