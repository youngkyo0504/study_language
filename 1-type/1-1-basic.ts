{
  // JavaScript
  // let
  // old : var는 절대 쓰지 않는다.
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  // 다시 선언하면 error
}

{
  // JavaScript
  // Primitive : number, string , boolean , bigint, symbol , null , undefined
  // Object : function , array ...undefined.

  // number
  const num: number = 1.2;

  // string
  const sty: string = "helllo";

  // boolean
  const boal: boolean = false;

  // undefined 값이 있는 지 없는지 결정 안된 상태 텅텅빈지 아직 정해지지 않은
  let name: undefined; // 이렇게 쓰면 안됨 undefined만 들어갈 수 있음
  let age: number | undefined; //age는 number 또는 undefined가 올수 있다. 라는 뜻 이렇게 쓴다.
  // 데이터 타입이 있거나 아직 결정되지 않았거나 보통 null보다는 undefined 를 사용함

  // null 여기는 텅텅 비어있다는 뜻
  let person: null; // 이렇게 하면 null 밖에 안들어옴
  let preson2: string | null;
  //값이 있거나 없거나 ... 일때는 null

  // unknown 알수 없는? 가능하면 안쓰는 것이 좋다.
  let notSure: unknown = 0; //아무거나 다 집어넣을 수 있다.
  notSure = "he";
  notSure = true;

  // any  안쓰는 것이 좋다. ❌
  let anything: any = 0;
  anything = "hello";

  // void 리턴값없는 경우
  function print(): void {
    console.log("hello");
  }

  // never 리턴하는 값이 없는 경우 에럴를 던지는 경우나 while 문일때 return;이것도 안됨
  function throwError(message: string): never {
    //예상치 못한 error메세지가 나오는 경우
    // message -> server(log)
    throw new Error(message); // -> 에러를 던지면 리턴되지 않는다.
    while (true) {
      // }계속 실행되어서 리턴하는 경우가 없다.
      // never타입에서는 아무것도 return 하면 안된다.
    }
  }

  // object : primative를 포함한 모든 object 타입을 말한다. ❌
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
