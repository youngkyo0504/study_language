{
  // JavaScript ❌
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ❤
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ❌
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TypeScript ❤
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript

  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    // lastName: string | undefined 이렇게 할 수도 있는데 이러면 꼭 둘중하나를 입력해야한다. undefined이나 string
    // ?를 넣게되면 전달받을 수 있고 아닐 수도 있고 라는 뜻이다. 만약에 값을 전달받지 못하면 undefined로 인식한다.
    console.log(firstName);
    console.log(lastName);
  }
  // default parameter 기본 메세지 출력
  function printMessage(message: string = "default message") {
    //기본값으로 출력이 된다.
    console.log(message);
  }
  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
    // ...은 restparameter 이고 input되는 모든 것들을 말한다.  numbers라는 number타입 변수로 받아오는 것을 말한다.
  }
  console.log(addNumbers(1, 2));
}
