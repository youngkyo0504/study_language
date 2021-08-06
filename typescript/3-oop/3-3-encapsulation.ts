{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // encapsulation 방법들
  // public 외부에서 접근 가능한  기본 default property값이다.
  // private 외부에서 접근 못한다.
  // protected 클래스를 상속한 다른 클래스 내에서만 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0; // 이제 private 속성이 생겨서 이제 함수로만 접근 가능하다.

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // 만약 makeMachine같은 생성자 static함수가 있다면
    // constructor 를 private로 만들면 이제 다른 static 함수로 생성을 하게끔 유도할 수 있다.

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = CoffeeMaker.makeMachine(3);

  //getter and setter

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    } // fullName 에 접근할 때마다 firstName 과 lastname의 값을 확인하면서 계산한다.

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        num = 0;
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      //constructor에서 firstNaem 과 lastName을 정의 할 수 있다. private 으로
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
}

// maker.coffeeBeans 는 음수가 되면 안된다. 따라서 이럴 때는 encapsulation을 이용해야한다
