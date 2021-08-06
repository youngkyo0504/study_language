{
  const obj = {
    name: 'ellie',
  };

  // obj key 접근 방법두개
  obj.name; // ellie
  obj['name']; // ellie
  // 이것처럼 인덱스입이란 이런 것이다. 타입의 키에 접근하는 것
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // declare Name type to string type
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' 이렇게 3가지만 된다.

  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  const person: Person = {
    name: 'ellie',
    gender: 'male',
  };
}
