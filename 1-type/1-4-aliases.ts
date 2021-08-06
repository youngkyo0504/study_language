{
  // Type Aliases 새로운 타입 지정

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';

  type Student = {
    name: string;
    age: number;
  }; // object 형태도 aliase 설정 가능하다.

  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  // String Literal Types
  // Name이라는 타입의 값을 지정하면 그 값만 올 수 있다.
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  // 이걸 왜 쓰는 거지?
  // 1-5로
}
