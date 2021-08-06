{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resourceLoadState: ResourceLoadState) {
    switch (resourceLoadState.state) {
      case "success":
        console.log("loaded");
      case "loading":
        console.log("loading");
      case "fail":
        console.log("fail");
      default:
        throw Error(`${resourceLoadState.state}`);
    }
  }
  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
