console.log(this) // 윈도우가 뜬다.  아무것도 안하면 

function simpleFunc() {
    console.log(this)
}
simpleFunc()
class Counter {
    count = 0;
    increase = function () {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase()
const func = counter.increase; // increase 포인터를 func에 할당.. 
caller(); // this의 정보를 잃어버리게 된다.  왜냐면 class를 가져온게 아니라 매서드만 가져와서 
// undefined가 뜬다. 

// 우리가 선언한 함수는 window에서 접근 가능한다. 
window.simpleFunc()

// 그런데 const 와 let은 global 객체 즉 window에서 접근 불가능하다. 
//그런데var 키워드를 이용하면 window에 등록이 됩니다. 

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run()// bob을 this로 받는다. 

// 이 관계를 bind로 묶어줘야 그 class까지 가져갈 수 있다. 
const caller = counter.increase.bind(counter);
caller()