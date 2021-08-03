{
  class TimeoutError extends Error {}

  class OfflineError extends Error {}

  //무엇때문에 문제가 발생하는지 알 때에는 직접 타입을 만들어서 에러를 전달한다.
  //throw를 남발하면 안된다.
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      //어떤 상태인지
      return { result: 'success' };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      try {
        this.client.tryConnect();
      } catch (error) {
        console.log('catch');
      } //에러가 뜨기 전에 catch만 표츌하고 끝남. 여기가 의미가 있는 catch 일까?? 아니다.
      // 여기서는 아무것도 못한다. 에러가 발생했을 때 처리를 제대로 못할거면 catch를 안하는 것이 낫다.
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  service.login(); // 에러가 생긴다.

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // catch try의  error는 항상 any타입이다.
        // application수준에서 error처리를 하는 것이 좋다.
        console.log('show network');
      }
    }
  }
}
