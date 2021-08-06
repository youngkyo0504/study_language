{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    //interface에는 I IcoffeeMaker처럼... 라 붙이는 경우도 있고 구현하는 class에 다른 이름을 쓰는 경우도 있다.
  }

  // 더 상업적인 interface
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // CoffeeMachine이 CoffeeMaker라는 interface를 구현하는 아이라는 것을 알려주어야한다.
    // 그래서 CoffeeMachine은 interface의 속성을 구현해야하는 의무가 생긴다.
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0; // 이제 private 속성이 생겨서 이제 함수로만 접근 가능하다.

    clean() {
      console.log("cleaning the machine");
    }

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

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up....");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // 추상화를 잘 시켜주는 것이 좋다. 사용자가 알아야할 것만 보여주면 된다.
    }
  }
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
  maker.makeCoffee(2);
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(3); // 인터페이스 타입이 될 수도 class타입이 될 수 도 있다.
  // interface 타입으로 받으면 interface에 있는 메소드만 사용가능하다.
  maker2.makeCoffee(2);
  maker2.clean();

  // interface 예제

  class AmatuerUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amatuer = new AmatuerUser(maker3);
  const pro = new ProBarista(maker3);
  amatuer.makeCoffee();
  pro.makeCoffee();
}

// maker.coffeeBeans 는 음수가 되면 안된다. 따라서 이럴 때는 encapsulation을 이용해야한다
