//either : a or by
interface Either<L,R>{
    left:()=> L;
    right: ()=>R;
}

class SimpleEither<L,R> implements Either<L,R>{
    constructor(private leftValue:L , private rightValue: R){}
    left():L {
        return this.leftValue
    }

    right(): R {
        return this.rightValue
    }
}

// 어떤 모든 것을 받을 수 있게 하려면 제네릭을 받게 해야함

const either: Either<number,number> = new SimpleEither(4,5);
const best = new SimpleEither({name:"ellie"}, 'hello')