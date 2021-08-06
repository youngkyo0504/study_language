{
  // Type Assertions ❌ 안좋음 but 불가피하게 써야할 때가 있다 .
  // 강제적으로 type을 지정해주는 것이다.
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  result.length(
    // js에서 이렇게 접근하면 result는 any타입이기 때문에 접근안됨
    //이런 때 assertion 이용 !!!
    result as string
  ).length; //이렇게 사용한다. 100% 장담할때만 사용만
  (<string>result).length; //위와 같음

  function findNumbers(): number[] | undefined {
    return undefined;
  }
}
