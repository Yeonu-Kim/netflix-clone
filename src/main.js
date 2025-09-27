import { MainHeader } from "./components/header/main-header.js";
import { MainHeaderMenu } from "./components/header/main-header-menu.js";
import { MainHeaderKidsButton } from "./components/header/main-header-kids-button.js";
import { MainHeaderMyProfileButton } from "./components/header/main-header-my-profile-button.js";
import { MainHeaderNotificationButton } from "./components/header/main-header-notification-button.js";
import { MainHeaderSearchButton } from "./components/header/main-header-search-button.js";
import { MainHeaderNotificationModal } from "./components/header/main-header-notification-modal.js";
import { MainHero } from "./components/hero/main-hero.js";

// Header
customElements.define("main-header", MainHeader);
customElements.define("main-header-menu", MainHeaderMenu);
customElements.define("main-header-kids-button", MainHeaderKidsButton);
customElements.define(
  "main-header-my-profile-button",
  MainHeaderMyProfileButton
);
customElements.define(
  "main-header-notification-button",
  MainHeaderNotificationButton
);
customElements.define("main-header-search-button", MainHeaderSearchButton);
customElements.define(
  "main-header-notification-modal",
  MainHeaderNotificationModal
);

// Hero
customElements.define("main-hero", MainHero);
