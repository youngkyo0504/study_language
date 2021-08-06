import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video__player">
        <iframe class="video__iframe" src="https://www.youtube.com/embed/" width="560" height="315"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3 class="video__title"></h3>
</section> 
`);
    const videoElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    //  다양한 형태로 url이 올 때 output은 똑같이 하려면 !!! 함수로 해야지
    videoElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedURL(url: string): string {
    //정규표현식 이용!!!
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined; /// match는 정규표현식과 같은지 보여준다.
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
    // 매치가 있다면 match[1] 로 하고 아니면 match[2]로 하고 그 거도 없으면 undefined
  }
}
