import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
        <div class="todo__holder">
            <h2 class="todo__title"></h2>
            <input class="todo_checkBox" type="checkbox">
        </div>
    </section>`);

    const labelElement = this.element.querySelector(
      '.todo_checkBox'
    )! as HTMLInputElement;
    console.log(labelElement, title);
    labelElement.textContent = todo;

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
}
