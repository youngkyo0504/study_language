{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // 배열에서 map을 이용하는 것과 같다.

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in과 같다.  t가 가진 key중 p
  };

  type VideoOptional = Optional<Video>; // 이거는 {title?:string, author?: string, description?: string 이렇게 된다. }

  type Animal = {
    name: string;
    age: number;
  };

  //이렇게도 쓸 수 있다. 재사용성이 좋다.
  const animal: Optional<Animal> = {
    name: "dog",
  };

  //
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const video: ReadOnly<Video> = {
    title: "sf",
    author: "kyo",
    description: "hey...",
  };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
