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
    this._setupEventListeners();
  }

  _render(API_VALUE) {
    return `
      <section class="hero-container">
        <img src="${API_VALUE.thumbnail_image}" class="hero-image" />
        <div class="hero-overlay-wrapper">
          <img src="${API_VALUE.title_image}" alt="폭군의 셰프" />
          <div class="hero-contents-inner">
          ${
            API_VALUE.rank < 10 &&
            `<div class="hero-top-ten-inner">
                <span>TOP</span>
                <span>10</span>
              </div>
              <span class="hero-top-ten">오늘 시리즈 순위 ${API_VALUE.rank}위</span>`
          }
          </div>
          <p class="hero-contents-description">${API_VALUE.description}</p>
          <div class="hero-button-inner">
            <button class="hero-play-button">
              <img src="/assets/play.svg" />재생
            </button>
            <button class="hero-more-button">
              <img src="/assets/info.svg" />상세 정보
            </button>
          </div>
        </div>
      </section>
    `;
  }
}
