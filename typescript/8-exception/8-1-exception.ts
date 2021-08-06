// java: Exception
// JavaScript : Error
// 우리가 예상할 수 없는 것을 exceptions이라 하고 예상할 수 있는 것은 error state라고 한다.

const array = new Array(10000000000); //이러면 에러가 생긴다. 이렇게 예상하지 못한 것들

function move(direction: 'up' | 'down' | 'left' | 'right' | 'he') {
  switch (direction) {
    case 'up':
      break;
    case 'down':
      break;
    case 'right':
      break;
    case 'right':
      break;
    default:
      //컴파일때 에러를 헨들링할 수 있다. 위에서 direction은 'he'가 올 수 있어야하는데
      // he가 오는 케이스를 정의하지 않았기 때문에 에러가 발생한다. 왜냐면 으로
      //invalid는 never타입인데 direction에 'he' 스트링이 올 수 있기 때문이다.
      // 이 밑에 문장에 대한 설명이다.
      // const invalid : never = direction;

      throw new Error('unknown direction: ${invalid}');
  }

  // Error handling 의 3단계: try -> catch -> finally 우아하게 처리하는 법?
  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`file not exist ${fileName}`);
    }
    return 'file content';
  }

  function closeFile(file: string) {
    //
  }

  const fileName = 'file';
  console.log(readFile(fileName));
  closeFile(fileName);

  //에러가 발생할 것 같은 부분에만 try를 감싸준다.
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched');
  } finally {
    closeFile(fileName);
    console.log('finally');
    //finally는 항상 호출된다. 에러가 생기든 안생기든 호출되기 때문에 두경우 모두에 처리해야할 일이 있다면 그렇게 하는 것이 좋다.
    // catch 안에서 return을 하거나 그러지 말고 마무리 해야하는 게 있다면 finally안에서 하는 것이 좋다.
  }
}
