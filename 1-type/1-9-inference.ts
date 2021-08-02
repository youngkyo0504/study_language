// Type Inference 언제쓸까?
{
  let text = "hello";
  text = "hi"; //이제 type 을 string으로 알아서 바꿔준다.

  function print(message: string) {
    console.log(message);
  }

  function add(x: number, y: number) {
    return x + y;
  }
  //자동으로 return 값 type 추론

  const result = add(1, 2); // 자동으로 type 추론
}
