{
  // Union Types: OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left"); //위에 정의되어져 있는 값만 쓸 수 있다.

  // function: login -> success, fail union 예시

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "login in!!!!",
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
  //위 함수와는 다르게 쓴다. 보통 discriminated 를 쓴다. 1-6으로
}
