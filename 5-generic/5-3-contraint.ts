interface Employee {
    pay():void;
}

class FullTimeEmployee implements Employee{
    pay(){
        console.log('full time !!');
    }

    workFullTime(){

    }
}

class PartTimeEmployee implements Employee{
    pay(){
        console.log("part time!!")
    }

    workParttime(){}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥이다.....
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}
//generic은 일반적인 타입을 말하기 때문에 여기에는 메소드를 포함하지 않는다.
//  그 때 조건을 달아서 사용해야한다. 
function pay<T extends Employee>(employee:T):T{
    employee.pay();
    return employee
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
const ellieAfterpay = payBad(ellie); //이거는 이제  interface Employee 가 되어서   더이상 pay이외의
// 메소드에 접근하지 못한다. 
const bobAfterpay = payBad(bob)

const obj ={
    name: 'ellie',
    age : 20,
}

console.log(getValue(obj, 'name'))
console.log(getValue(obj, 'age'))

function getValue<T,K extends keyof T >(obj:T,key:K):T[K]{
    return obj[key];
}