import { PageComponent, PageItemComponent, } from './components/page/page.js';
import { ImageComponent } from './components/page/item/image.js';
import { VideoComponent } from './components/page/item/video.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { InputDialog } from './components/page/item/dialog.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot, 'beforeend');
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('방구석을 한강뷰 오피스텔로', 'https://www.youtube.com/watch?v=E7vwKR5voFU');
        this.page.addChild(video);
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
        const imageBtn = document.querySelector('#new-image');
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
new App(document.querySelector('.document'));
