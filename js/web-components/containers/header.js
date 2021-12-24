export default class Header extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <header class="header-area">
            <div class="place-header" role="banner">
                <h1 class="title">
                    <a href="#" class="link-back">
                        <img src="./assets/images/ico-back.svg" alt="뒤로가기">
                    </a>
                    샐러드 제로베이스점
                </h1>
                <a href="#" class="my-orders">주문내역</a>
            </div>
            <div class="place-tab scroll-x" role="tablist">
                <div class="tab-inner">
                    <a href="#" class="tab" role="tab"><span class="txt">홈</span></a>
                    <a href="#" class="tab is-active" role="tab"><span class="txt">메뉴</span></a>
                    <a href="#" class="tab" role="tab"><span class="txt">리뷰</span></a>
                    <a href="#" class="tab" role="tab"><span class="txt">사진</span></a>
                    <a href="#" class="tab" role="tab"><span class="txt">지도</span></a>
                    <a href="#" class="tab" role="tab"><span class="txt">주변</span></a>
                </div>
            </div>
        </header>
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
