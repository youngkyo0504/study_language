import { BaseComponent } from '../../component';

export class ItemComponenet extends BaseComponent<HTMLElement> {
  constructor(component: HTMLElement) {
    super(
      ` <div class="item">
            <div>x</div>
        </div>
     `
    );
    this.element.appendChild(component);
  }
}
