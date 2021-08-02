interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next: StackNode | undefined; // 불변성을 가지는 것이 좋다.
};

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서만 바뀌어야지 밖에서는    바뀌어지면 안되지만 읽을 수는 있어야함 그때 getter를 사용해야함
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("stack is full");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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
