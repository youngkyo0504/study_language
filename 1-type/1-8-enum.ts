{
  // Enum 한 곳에 모여서

  // JavaScript
  const MAX_NUM = 6; //보통 변하지 않는 값을 대문자로 정의해서 저장한다.
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //이것을 묶어주는게 자바스크립트에서 불편함
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  //자바스크립트에서는 이렇게 이넘을 사용한다.
  const dayofToday = DAYS_ENUM.MONDAY;

  // TypeScript 에서는 어떻게?
  //타입 스크립트에서는 enum을 쓰지 않는 것이 좋다.
  // 왜냐하면 enum 으로 할당된 것에 다시 아무 거나 할당할 수 있다.
  enum Days {
    Monday, // 0 자동으로 숫자 해준다. 값을 정해주고 싶으면 Monday = 1 이러면 1부터 시작함
    TUESDAY, // 1
    Wednesday, // 3
    Thursday, // 4
    Friday,
    Satarday,
    Sunday,
  }
  let day = Days.Monday;
  day = 20; // 이게 문제 없이 돌아가서 안쓰는 것이 좋다.

  console.log(Days.TUESDAY);

  // 이 대안으로는 유니온 타입을 작성하는 것이 좋다.
  type DaysOfWeek = "Monday" | "Tuesday";
  let Today: DaysOfWeek = "Monday";
  //enum은 유니온으로 대체할 수 있다.
}
