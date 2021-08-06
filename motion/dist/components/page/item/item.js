import { BaseComponent } from '../../component';
export class ItemComponenet extends BaseComponent {
    constructor(component) {
        super(` <div class="item">
            <div>x</div>
        </div>
     `);
        this.element.appendChild(component);
    }
}
