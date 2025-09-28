export class MainRecommendationVideo extends HTMLElement {
  constructor() {
    super();
    this._video = null;
  }

  set video(value) {
    this._video = typeof value === "object" ? value : null;
    if (this.isConnected) {
      this._render();
    }
  }

  get video() {
    return this._video;
  }

  _render() {
    if (this._video === null) {
      return;
    }
    const { thumbnail, title, is_new_episode, is_new, is_new_season } =
      this._video;
    this.innerHTML = `
        <div class="recommendation-contents-inner">
            <img src="${thumbnail}" alt="${title}" class="recommendation-thumbnail" />
            ${
              is_new_episode
                ? "<main-recommendation-new-episode></main-recommendation-new-episode>"
                : ""
            }
            ${
              is_new
                ? "<main-recommendation-new-video></main-recommendation-new-video>"
                : ""
            }
            ${
              is_new_season
                ? "<main-recommendation-new-season></main-recommendation-new-season>"
                : ""
            }
        </div>
    `;
  }
}
