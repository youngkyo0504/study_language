import {
  Composable,
  PageComponent,
  PageItemComponent,
} from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/page/item/dialog.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    // 안에서 다른 클래서 인스턴스 만드는 거 별로안좋지맘ㄴ 우선 이렇게함
    this.page.attachTo(appRoot, 'beforeend');

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      '방구석을 한강뷰 오피스텔로',
      'https://www.youtube.com/watch?v=E7vwKR5voFU'
    );
    this.page.addChild(video);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const imageBtn = document.querySelector('#new-image')! as HTMLElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      console.log(dialog);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
// 동적이지 않고 정적이기 때문에
// type assertion 사용
