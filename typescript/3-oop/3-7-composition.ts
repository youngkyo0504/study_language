{
  //상속의 문제점

  // 족보가 꼬인다...! 만약 우유와 설탕이 같이있는 머신을 만드려면 어떻게 상속해야할까?
  // 우리는 지금 우유 머신과 설탕 머신도 있는데 나중에 새로운 기능을 도입하려고 할때 자식의 특성도 변경된다.
  // 그리고 상속을 하나이상 받을 수 없다.

  // 그래서 composition을 사용한다. 레고를 만들 때 필요한 부품들을 조립해서 나가는 것처럼 ... 이것도 그렇다.

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

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      //상속 가능하게 하려면 protected나 public으로 해야함
      this.coffeeBeans = coffeeBeans;
    } // 만약 makeMachine같은 생성자 static함수가 있다면
    // constructor 를 private로 만들면 이제 다른 static 함수로 생성을 하게끔 유도할 수 있다.

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);

      // 추상화를 잘 시켜주는 것이 좋다. 사용자가 알아야할 것만 보여주면 된다.
    }
  }

  // 싸구려 거품기 만들기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steam....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("gett");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("get sugar from sugar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 인스턴스 만들기
  // class 끼리 상호작용 할 때는 계약서에 의거해서 의사소통을 해야한다.
  // 즉 interface 를 통해서 상호작용해야한다.
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const cheapMilkMaker = new CheapMilkSteamer();
  const noMilk = new NoMilk();
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();
  //

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetSugarMachine = new CoffeeMachine(12, noMilk, sugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
