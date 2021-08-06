{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "login in!!!!",
      },
    };
  }

  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
