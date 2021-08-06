{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<number> = [1, 3, 4]; //위와 아래는 같은 형식
  function printArray(fruits: readonly string[]) {
    // readonly 조건을 붙일 시  readonly 즉 수정할 수 없음  string[]만 됨 readonly Array<number>는 안됨
  }

  //Tuple 서로다른 타입을 함께 가질 수 있는 배열이다.
  let student: [string, number]; //첫번째 들어있는 것은 스트링 두번째는 숫자다.
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  //Tuple을 사용하는 것을 권장하지 않는다 . 차라리 객체를 사용하는 것이 좋다.
  // Tuple -> interface , type alias , class
}
