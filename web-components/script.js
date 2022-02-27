
///////////////////
// Custom element without shadow root:
class UserCardNoShadowAttached extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<style>h3 {color: orange;}</style><h3>${this.getAttribute('name')}</h3>`;
  }
}

window.customElements.define('user-card-no-shadow', UserCardNoShadowAttached);

///////////////////
// New custom element but with shadow root:
const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {color: coral;}
  </style>
  <div class="user-card">
    <h3></h3>
  </div>
`

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');
  }
}

window.customElements.define('user-card', UserCard);

///////////////////
// New custom element + shadow root + advanced Features:
const templateAdvanced = document.createElement('template');
templateAdvanced.innerHTML = `
  <style>
    h3 {color: coral;}
  </style>
  <div class="user-card">
    <div class="body">
      <h3></h3>
      <img>
      <div class="info">
        <p>EMAIL: <slot name="email" /> </p>
        <p>PHONE: <slot name="phone" /> </p>
      </div>
      <button id="toggle-info">HIDE INFO</button>
    </div>
  </div>
`

class UserCardAdvanced extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(templateAdvanced.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector('.info');
    const btn = this.shadowRoot.querySelector('#toggle-info');

    if (this.showInfo) {
      info.style.display = 'block';
      btn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      btn.innerText = 'Show Info';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

window.customElements.define('user-card-advanced', UserCardAdvanced);