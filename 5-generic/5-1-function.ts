{
    function checkNotNull(arg:number|null): number{
        if(arg == null ){
            throw new Error('not valid number');
        }
        return arg;
    }
    // null  체크를 할 때 타입마다 만들어야 하나??? 아니다!!!! 
    // 위엔건 확장성이 없다. 

     function checkNotNullAny(arg:any | null): any{
         if(arg==null){
             throw new Error('not valid number ');
         }
         return arg;
     }
     // any는 타입이 보장되지 않는다. 
     //generic이란 말은 일반적인 다 포용하는 이런 뜻이다. 
     //보통 대문자 하나만 쓴다. GENERIC 이렇게 안쓰고  T이런식임..... 
      function checkNotNullGeneric<GENERIC>(arg: GENERIC | null): GENERIC{
          if (arg== null ){
              throw new Error("not valid number");
          }
          return arg
      }

      const number =checkNotNullGeneric(123);
      const boal = checkNotNullGeneric(true)



}