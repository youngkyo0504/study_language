type Check<T> = T extends string ? boolean : number; // T가 string을 상속한다면 불리언타입이 되고 아니면 number
type Type = Check<string>; // boolean이 된다.

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "function"
  : "object";
