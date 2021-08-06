export type MediaType = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TODO';

type MetaData = {
  title: string;
  info: string;
};

interface MotionElement {
  create(media?: MediaType): void | HTMLElement;
  move(): void;
}

export class InputForm implements MotionElement {
  private makeInsertForm(media: MediaType): HTMLElement {
    const title = 'Title';
    const subTitle = media === 'IMAGE' || media === 'VIDEO' ? 'Url' : 'Info';
    const subHTML = `
      <div class="formTitle"><label for="">${title}</label> <input type="text" /></div>
      <div class="formSubTitle">
      <label for="">${subTitle}</label>
      <input type="text" />
      </div>
      <div onclick="event.target.parentNode.remove();">x</div>
      `;

    //  폼 생성
    const form = document.createElement('form');
    form.innerHTML = subHTML;

    // btn에 이벤트 추가
    const btn = document.createElement('button');
    btn.append('Add');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const inputs = form.querySelectorAll('input');

      //section에 전달할 데이터 생성
      const data: MetaData = {
        title: inputs.item(0).value,
        info: inputs.item(1).value,
      };

      // section 생성
      this.makeSection(media, data);
      // const documentSection = new DocumentSection(data);
      // documentSection.create(media);
      form.remove(); // form 삭제
    });

    // body에 추가
    form.appendChild(btn);
    document.body.appendChild(form);
    return form;
  }

  create(media: MediaType): void {
    this.makeInsertForm(media);
  }

  move() {}

  makeSection(media: MediaType, data: MetaData) {
    console.log(media);
    switch (media) {
      case 'IMAGE':
        console.log('image');
        const image = new Image(data);
        image.create();
        break;
      case 'VIDEO':
        console.log('hi');
        const video = new Video(data);
        video.create();
        break;
      case 'NOTE':
        const note = new Note(data);
        note.create();
        break;
      case 'TODO':
        console.log(media == 'TODO');
        const todo = new ToDo(data);
        todo.create();
        break;
      default:
        throw new Error('not MediaType');
    }
  }
}

export class DocumentSection implements MotionElement {
  constructor(readonly data: MetaData) {}

  create(media: MediaType): void {
    // const div = document.createElement('div');
    // const youtube = document.createElement('iframe');
    // youtube.src = 'https://www.youtube.com/watch?v=0UGLL8T1u3U';
    // youtube.src.split('v=')[1];
    // div.innerHTML = `<p>hi</p>`;
    // document.body.appendChild(youtube);
  }
  move(): void {}
}

abstract class Description implements MotionElement {
  constructor(readonly data: MetaData) {}

  create(): HTMLElement {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = this.data.title;
    div.appendChild(p);

    return div;
  }

  move(): void {}
}

class ToDo extends Description {
  constructor(readonly data: MetaData) {
    super(data);
  }

  create(): HTMLElement {
    const div = super.create();
    const check = document.createElement('input');
    const label = document.createElement('label');
    check.type = 'checkbox';
    label.appendChild(check);
    label.append(this.data.info);
    div.appendChild(label);
    document.body.appendChild(div);

    return div;
  }
}

class Note extends Description {
  constructor(readonly data: MetaData) {
    super(data);
  }

  create(): HTMLElement {
    const div = super.create();
    const p = document.createElement('p');
    p.append(this.data.info);
    div.appendChild(p);
    document.body.appendChild(div);

    return div;
  }
}

class Video extends Description {
  constructor(readonly data: MetaData) {
    super(data);
  }

  create(): HTMLElement {
    const div = super.create();
    const iframe = document.createElement('iframe');
    const src = this.data.info.split('v=')[1];
    iframe.title = 'YouTube video player';
    iframe.src = `https://www.youtube.com/embed/${src}`;

    div.appendChild(iframe);
    document.body.appendChild(div);

    return div;
  }
}
class Image extends Description {
  constructor(readonly data: MetaData) {
    super(data);
  }

  create(): HTMLElement {
    const div = super.create();
    const img = document.createElement('img');
    img.src = `https://picsum.photos/200`;
    div.appendChild(img);
    document.body.appendChild(div);

    return div;
  }
}
