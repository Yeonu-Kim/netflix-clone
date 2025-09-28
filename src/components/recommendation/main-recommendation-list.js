import { ASSET_PATH } from "../../entity/asset.js";

const TOP_TEN_API_VALUE = {
  videos: [
    {
      rank: 1,
      title: "사마귀",
      thumbnail_image: "assets/samagui_thumbnail.webp",
    },
    {
      rank: 2,
      title: "폭군의 셰프",
      thumbnail_image: "assets/chef_thumbnail.webp",
    },
    {
      rank: 3,
      title: "에스콰이어",
      thumbnail_image: "assets/esquire_thumbnail.webp",
    },
    {
      rank: 4,
      title: "애마부인",
      thumbnail_image: "assets/horse_lover_thumbnail.webp",
    },
    {
      rank: 5,
      title: "야당",
      thumbnail_image: "assets/yadang_thumbnail.webp",
    },
    {
      rank: 6,
      title: "케이팝 데몬 헌터스",
      thumbnail_image: "assets/kpop_thumbnail.webp",
    },
    {
      rank: 7,
      title: "사마귀",
      thumbnail_image: "assets/samagui_thumbnail.webp",
    },
    {
      rank: 8,
      title: "사마귀",
      thumbnail_image: "assets/samagui_thumbnail.webp",
    },
    {
      rank: 9,
      title: "사마귀",
      thumbnail_image: "assets/samagui_thumbnail.webp",
    },
    {
      rank: 10,
      title: "사마귀",
      thumbnail_image: "assets/samagui_thumbnail.webp",
    },
  ],
};

const RECOMMENDATION_API_VALUE = {
  recommendation_list: [
    {
      title: "밥 친구",
      videos: [
        {
          title: "폭군의 셰프",
          thumbnail: "/assets/chef_thumbnail.webp",
          is_new_episode: true,
        },
        {
          title: "에스콰이어",
          thumbnail: "/assets/esquire_thumbnail.webp",
          is_new_episode: true,
        },
        {
          title: "트리거",
          thumbnail: "/assets/trigger_thumbnail.webp",
        },
        {
          title: "사마귀",
          thumbnail: "/assets/samagui_thumbnail.webp",
          is_new_episode: true,
        },
        {
          title: "폭싹 속았수다",
          thumbnail: "/assets/pokssak_thumbnail.webp",
        },
        {
          title: "트라이",
          thumbnail: "/assets/try_thumbnail.webp",
        },
      ],
    },
    {
      title: ".님이 시청 중인 콘텐츠",
      videos: [
        {
          title: "트라이",
          thumbnail: "/assets/try_thumbnail.webp",
          is_new_episode: true,
        },
      ],
    },
    {
      title: "연애 세포를 깨우는 작품들",
      videos: [
        {
          title: "20세기",
          thumbnail: "assets/20th_thumbnail.webp",
          is_new: true,
        },
        {
          title: "장난스러운 키스",
          thumbnail: "assets/kiss_thumbnail.webp",
        },
        {
          title: "애마부인",
          thumbnail: "assets/horse_lover_thumbnail.webp",
        },
        {
          title: "역사",
          thumbnail: "assets/history_thumbnail.webp",
        },
        {
          title: "케이팝 데몬 헌터스",
          thumbnail: "assets/kpop_thumbnail.webp",
          is_new_season: true,
        },
      ],
    },
    {
      title: "오늘 대한민국의 TOP 10 시리즈",
      is_top_ten: true,
      videos: TOP_TEN_API_VALUE.videos,
    },
  ],
};

export class MainRecommendationList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this._render(RECOMMENDATION_API_VALUE, TOP_TEN_API_VALUE);
    this._setupCarousels(RECOMMENDATION_API_VALUE);
  }

  _render(recommendationData, topTenData) {
    const sortedVideos = topTenData.videos.sort((a, b) => a.rank - b.rank);

    return `
      <section class="recommendation-container">
        ${recommendationData.recommendation_list
          .map(
            ({
              title,
              is_top_ten,
            }) => `<div class="recommendation-contents-wrapper">
            <p>${title}</p>
            <main-recommendation-carousel ${
              is_top_ten === true ? "is-top-ten='true'" : ""
            }></main-recommendation-carousel>
          </div>`
          )
          .join("")}
      </section>
    `;
  }

  _setupCarousels(recommendationData) {
    const carousels = this.querySelectorAll("main-recommendation-carousel");
    carousels.forEach((carousel, index) => {
      carousel.videos = recommendationData.recommendation_list[index].videos;
    });
  }
}
