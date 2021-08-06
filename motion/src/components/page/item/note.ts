import { BaseComponent } from '../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`<section class="note">
            <div class="note__holder">
            <h2 class="note__title"></h2>
            <p class="note__body"></p>
          </div>
          </section>`);

    const contentElement = this.element.querySelector(
      '.note__body'
    )! as HTMLParagraphElement;
    contentElement.textContent = content;

    const titleElement = this.element.querySelector(
      '.note__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }
}
