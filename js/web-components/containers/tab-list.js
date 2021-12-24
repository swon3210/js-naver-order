export default class TabList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="tab-switch-box" role="tablist">
          <a href="#" class="tab-switch is-active" role="tab">
              🛍&nbsp;&nbsp;포장
              <img src="./assets/images/ico-check.svg" alt="" class="ico-check" aria-hidden="true">
          </a>
          <a href="#" class="tab-switch" role="tab">
              🍽&nbsp;&nbsp;매장
              <img src="./assets/images/ico-check.svg" alt="" class="ico-check" aria-hidden="true">
          </a>
          <a href="#" class="tab-switch" role="tab">
              🛵&nbsp;&nbsp;배달
              <img src="./assets/images/ico-check.svg" alt="" class="ico-check" aria-hidden="true">
          </a>
      </div>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    // 내가 감시하고 싶은 속성들의 리스트
    return ['text'];
  }

  disconnectedCallback() {
    // this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
  }
}
