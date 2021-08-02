{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // interface
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    //interface에는 I IcoffeeMaker처럼... 라 붙이는 경우도 있고 구현하는 class에 다른 이름을 쓰는 경우도 있다.
  }

  //  상속 !!!

  class CoffeeMachine implements CoffeeMaker {
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

    constructor(coffeeBeans: number) {
      //상속 가능하게 하려면 protected나 public으로 해야함
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

  // 어떻게 상속하는가?????
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      // 자식 class가 constructor를 가지려면 부모 constructor 가져와야한다.

      super(beans); // super() 자체가 부모의 constructor이다.
    }
    private steamMilk(): void {
      console.log("steaming some milk");
    }

    makeCoffee(shots: number) {
      const coffee = super.makeCoffee(shots); // super는 부모의 함수를 쓸 때 사용한다. !!!!
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, serialNumber: string) {
      super(beans);
    }
    private sugar(): void {
      console.log("add sugar");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.sugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  const machine = new CoffeeMachine(32);
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
  maker.makeCoffee(2);
  // interface 예제

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "2"),
    new SweetCoffeeMaker(22, "22"),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
