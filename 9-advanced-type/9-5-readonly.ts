// 이미 유틸리티 타입을 다 만들어놨다

type ToDo = {
  title: string;
  description: string;
};

function display(todo: Readonly<ToDo>) {}
