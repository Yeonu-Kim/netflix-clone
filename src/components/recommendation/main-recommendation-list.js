import { ASSET_PATH } from "../../entity/asset.js";

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
          is_new_episide: true,
        },
        {
          title: "트리거",
          thumbnail: "/assets/trigger_thumbnail.webp",
        },
        {
          title: "사마귀",
          thumbnail: "/assets/samagui_thumbnail.webp",
          is_new_episide: true,
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
  ],
};

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

export class MainRecommendationList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this._render(RECOMMENDATION_API_VALUE, TOP_TEN_API_VALUE);
  }

  _render(recommendationData, topTenData) {
    const sortedVideos = topTenData.videos.sort((a, b) => a.rank - b.rank);

    return `
      <section class="recommendation-container">
        ${recommendationData.recommendation_list
          .map(
            ({ title, videos }) => `
          <div class="recommendation-contents-wrapper">
            <p>${title}</p>
            <div class="pagination-container"></div>
            <div class="carousel-wrapper">
              <button class="carousel-nav prev">‹</button>
              <button class="carousel-nav next">›</button>
              <div class="carousel-track">
                <div class="recommendation-contents-list-inner">
                  ${videos
                    .map(
                      ({
                        title,
                        thumbnail,
                        is_new_episode,
                        is_new,
                        is_new_season,
                      }) => `
                    <div class="recommendation-contents-inner">
                      <img src="${thumbnail}" alt="${title}" class="recommendation-thumbnail" />
                      ${
                        is_new_episode
                          ? `
                        <div class="recommendation-new-episode">
                          <span>새로운 에피소드</span>
                          <span>지금 시청하기</span>
                        </div>
                      `
                          : ""
                      }
                      ${
                        is_new
                          ? `
                        <div class="recommendation-new">
                          <span>최신 등록</span>
                        </div>
                      `
                          : ""
                      }
                      ${
                        is_new_season
                          ? `
                        <div class="recommendation-new-season">
                          <span>새로운 시즌</span>
                        </div>
                      `
                          : ""
                      }
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
        
        <div class="recommendation-contents-wrapper">
          <p>오늘 대한민국의 TOP 10 시리즈</p>
          <div class="recommendation-contents-list-inner">
            ${sortedVideos
              .map(
                ({ rank, title, thumbnail_image }) => `
              <div class="topten-contents-inner">
                <span>${rank}</span>
                <img src="${thumbnail_image}" alt="${title}" class="topten-thumbnail" />
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }
}
