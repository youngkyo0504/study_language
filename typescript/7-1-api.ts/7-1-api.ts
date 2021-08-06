{
  // every 사용법 타입 확인하는 법 !!!! 함수 만들어서 사용
  class Animal {}

  class Cat extends Animal {
    isCat: boolean = true;
  }

  class Dog extends Animal {
    isDog: boolean = false;
  }

  const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
  }

  console.log(animals.every<Cat>(isCat));
}
