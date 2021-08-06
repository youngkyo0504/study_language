// 스택 구조 구현하기 LIFO 구현 .. push , pop , 절대 typescript에서 제공하는 자료구조 이용 x 배열 이용 x 문자열을 담을 수 있는 스택
{
    var LinkedList_1 = /** @class */ (function () {
        function LinkedList() {
            this.node = {};
        }
        LinkedList.prototype.findLast = function (node) {
            // if (node.next) {
            //   return this.findLast(node.next)
            // } else {
            //    return node
            // }
            return node.next ? this.findLast(node.next) : node;
        };
        return LinkedList;
    }());
    var StackFrame = /** @class */ (function () {
        function StackFrame() {
            this.linkedList = new LinkedList_1();
        }
        StackFrame.prototype.push = function (item) {
            var lastNode = this.linkedList.findLast(this.linkedList.node);
            lastNode.next = {
                data: item,
                prev: lastNode
            };
        };
        StackFrame.prototype.pop = function () {
            var lastNode = this.linkedList.findLast(this.linkedList.node);
            if (lastNode.prev) {
                lastNode.next = undefined;
            }
            var popedData = lastNode.data ? lastNode.data : "there is no data";
            return popedData;
        };
        return StackFrame;
    }());
    var stack = new StackFrame();
    stack.push("금교영");
    console.log(stack.pop())
}
