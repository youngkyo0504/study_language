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
  // abastract 키워드를 붙이면 커피머신은 그 자체로 object를 만들지 못한다.  그러면 부모로서 필요한 것을 정의하는 용도로만 사용
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;
    clean() {
      console.log('cleaning the machine');
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   // return new CoffeeMachine(coffeeBeans);
    // }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up....');
    }

    protected abstract extract(shots: number): CoffeeCup;
    //이제 자식 클래스마다 다르게 구현해야한다면 abstract를 붙인다.
    // 그리고 자식 수준에서 접근 해야하기 때문에 protected를 붙인다.

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
      console.log('steaming some milk');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    } // 여기서 따로 설정해주어야한다.

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
      console.log('add sugar');
    }
    protected extract(shots: number): CoffeeCup {
      this.sugar();
      return {
        shots,
        hasSugar: true,
      };
    } // 여기서 따로 설정해주어야한다.
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.sugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // const machine = new CoffeeMachine(32);
  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(3);
  // maker.makeCoffee(2);
  // interface 예제

  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16),
    new CaffeLatteMachine(16, '2'),
    new SweetCoffeeMaker(22, '22'),
  ];

  machines.forEach((machine) => {
    console.log('---------------------');
    machine.makeCoffee(1);
  });
}
