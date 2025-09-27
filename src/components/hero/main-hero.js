import { ASSET_PATH } from "../../entity/asset.js";

const API_VALUE = {
  thumbnail_image: ASSET_PATH.MAIN.THUMBNAIL,
  title_image: ASSET_PATH.MAIN.TITLE,
  rank: 2,
  is_top_ten: true,
  description:
    "시간을 거슬러 과거로 가게 된 현대의 셰프가 폭군으로 악명 높은 왕을 만난다. 그녀는 탁월한 요리 솜씨로 왕의 마음과 입맛을 모두 사로잡을 수 있을까?",
};

export class MainHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this._render(API_VALUE);
  }

  _render(API_VALUE) {
    return `
      <section class="hero-container">
        <img src="${API_VALUE.thumbnail_image}" class="hero-image" />
        <div class="hero-overlay-wrapper">
          <img src="${API_VALUE.title_image}" alt="폭군의 셰프" />
          ${
            API_VALUE.rank <= 10 &&
            `<main-hero-top-ten-info rank=${API_VALUE.rank}></main-hero-top-ten-info>`
          }
          <p class="hero-contents-description">${API_VALUE.description}</p>
          <div class="hero-button-inner">
            <main-hero-play-button></main-hero-play-button>
            <main-hero-info-button></main-hero-info-button>
          </div>
        </div>
      </section>
    `;
  }
}
