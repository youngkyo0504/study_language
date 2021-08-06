import { BaseComponent, Component } from '../component.js';

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

export interface Composable {
  addChild(child: Component): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer; // 아무런 것도 전달받지 않는 생성자가 있고
  //생성자를 호출하면 sectioncontainer 을 만드는 어떤 클래스여도 괜찮다.
};

type OnCloseListener = () => void;

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;

  constructor() {
    super(`  <li class="page-item">
    <section class="page-item__body"></section>
    <div class="page-item__controls">
        <button class="close">&times;</button>
    </div>
</li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body'
    )! as HTMLElement;
    child.attachTo(container); //컨테이너에 차일드가 들어간다.
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

// export class ModalItemComponent
//   extends BaseComponent<HTMLElement>
//   implements SectionContainer
// {
//   closeListener?: OnCloseListener;
//   constructor() {
//     super(`<div class="modal">
//     <section class="modal__input"></section>
//       <button class="add">ADD</button>
//       <button class="close">&times;</button>
//   </div>
//    `);
//     const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
//     closeBtn.onclick = () => {
//       this.closeListener && this.closeListener();
//     };
//   }

//   addChild(child: Component) {
//     const container = this.element.querySelector(
//       '.modal__input'
//     )! as HTMLElement;
//     child.attachTo(container); //컨테이너에 차일드가 들어간다.
//   }

//   setOnCloseListener(listener: OnCloseListener) {
//     this.closeListener = listener;
//   }
// }
