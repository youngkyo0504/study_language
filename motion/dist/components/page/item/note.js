import { BaseComponent } from '../../component.js';
export class NoteComponent extends BaseComponent {
    constructor(title, content) {
        super(`<section class="note">
            <div class="note__holder">
            <h2 class="note__title"></h2>
            <p class="note__body"></p>
          </div>
          </section>`);
        const contentElement = this.element.querySelector('.note__body');
        contentElement.textContent = content;
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
    }
}
