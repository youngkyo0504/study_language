// 스택 구조 구현하기 LIFO 구현 .. push , pop , 절대 typescript에서 제공하는 자료구조 이용 x 배열 이용 x 문자열을 담을 수 있는 스택

{
  type StackNode = {
    next?: StackNode;
    data?: string;
    prev?: StackNode;
  };

  interface Stack {
    push(item: string): void;
    pop(): string;
  }

  class LinkedList {
    node: StackNode = {};

    constructor() {}

    findLast(node: StackNode): StackNode {
      // if (node.next) {
      //   return this.findLast(node.next)
      // } else {
      //    return node
      // }
      return node.next ? this.findLast(node.next) : node;
    }
  }

  class StackFrame implements Stack {
    linkedList: LinkedList;

    constructor() {
      this.linkedList = new LinkedList();
    }

    push(item: string): void {
      const lastNode = this.linkedList.findLast(this.linkedList.node);
      lastNode.next = {
        data: item,
        prev: lastNode,
      };
    }

    pop(): string {
      const lastNode = this.linkedList.findLast(this.linkedList.node);

      if (lastNode.prev) {
        lastNode.prev.next = undefined;
      }
      const popedData = lastNode.data ? lastNode.data : "there is no data";

      return popedData;
    }
  }

  const stack: Stack = new StackFrame();
  stack.push("금교영");
  stack.push("himynameis");
  console.log(stack.pop());
  console.log(stack.pop());
}
