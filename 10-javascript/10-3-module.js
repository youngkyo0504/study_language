export default function add(a, b) {
    return a + b;
}

export function print() {
}
// } 동일 이름으로 가져와야한다.
export const number = 10;

// 만약 default 가 없고 다 export라면 import as calculator (정해지지 않은 이름임) 이렇개
// 설정하고 할 수 있다.  calculator.print(); calculator.number