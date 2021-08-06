{interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }
  
  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T> ; // 불변성을 가지는 것이 좋다. //? 붙으면 undefined가 올 수 도 있는 것 
  };
  
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0; // 내부에서만 바뀌어야지 밖에서는    바뀌어지면 안되지만 읽을 수는 있어야함 그때 getter를 사용해야함
    private head?: StackNode<T>;
  
    constructor(private capacity: number) {}
  
    get size() {
      return this._size;
    }
  
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("stack is full");
      }
      const node: StackNode<T> = { value, next: this.head }; //타입추론을 이용해서 stacknode 생략 가능이다. 
      this.head = node;
      this._size++;
    }
  
    pop(): T {
      if (this.head == null) {
        // 왜 undefined가 아니고 null 체크인가 ts가 js로 바뀔 때 head를 undefined으로  null은 undefined이 아니어서 통과될 수도 있다.
        // head가 null인지 확인하면 둘다 거를 수 있다.
        // null == undefined , null !== undefined 엄연히 다르지만 ==로 이콜사인 두개로 비교하면 같다고 나온다.
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }

    
}
const stack2 = new StackImpl<number>(10); //제너릭은 사용할 때 타입을 지정해줘야하는 듯!??
stack2.push(123);
stack2.push(456);
stack2.push(5645);
while(stack2.size !== 0){
    console.log(stack2.pop())
}
const stack = new StackImpl<string>(10); //제너릭은 사용할 때 타입을 지정해줘야하는 듯!??
stack.push("sfd");
stack.push("456");
stack.push("5645");
while(stack.size !== 0){
    console.log(stack.pop())
}

} 