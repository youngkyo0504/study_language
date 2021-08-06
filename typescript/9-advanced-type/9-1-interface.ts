type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object 는 둘다 따를 수 있다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

// class 둘다 가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionType {
  x: number;
  y: number;
}

// extends 가능 둘다
interface ZpositionInterface extends PositionInterface {
  z: number;
}

type ZpositionType = PositionType & { z: number }; // 타입은 이렇게 확장
// 오직 인터페이스만 머지가 가능하다. 인터페이스는 이렇게 겹치게 하면 머지가 됨
//하지만 타입은 안됨 그러나 computed properties를 이용하면 됨
interface PositionTypeInterface {
  z: number;
}
// Type aliases can use Computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // Name 은 string타입이 된다.

type NumberType = number;
type Direction = 'left' | 'right'; //이런 유니온 타입은 인터페이스로는 못만든다.

// 그런데 무엇을 써야하나????
// 인터페이스는 어떤 것의 규격사항입니다. 오브젝트간의 의사소통을 인터페이스를 통해서 한다. 상호작용 도움
// 어떤 특정한 것을 누가 구현해야한다면 타입보단 인터페이스를 사용하는 것이 좋다.
// 반면 타입은 데이터의 모습 , 데이터의 타입을 결정하는 것이다.
// interface 는 규격사항이고 데이터를 담는 경우는 타입으로 ....
// 어떤 것을 구현해야하는 class가 없고 담아야할 데이터만 있는 경우에는 타입엘리어스를 쓰는 것이 좋다.
