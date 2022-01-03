import { html } from "lit-element";
import View from "../view";

export default class Snackbar extends View {
  constructor() {
    super();
  }

  render() {
    html`
      <div class="info-main-notice alert hidden">
        <svg
          aria-hidden="true"
          class="ico-clock"
          viewBox="0 0 13 13"
          width="13"
          height="13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M6.5 0a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm.492 1.137v4.157l2.792 2.674-.692.722-3.1-2.97V2.137h1z"
          ></path>
        </svg>
        지금은 주문을 받을 수 없습니다.
      </div>
    `;
  }
}
