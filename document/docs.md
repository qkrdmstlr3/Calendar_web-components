# 학습 내용

## 💡CUSTOM ELEMENT

**새로운 타입의 HTML element tag를 정의할 수 있도록 해줌**

- 정의 방법

```javascript
class CustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // DOM에 추가된 뒤 실행되는 함수
  }

  disconnectedCallback() {
    // DOM에서 제거된 뒤 실행되는 함수
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    // 속성 이름에 대문자는 포함될 수 없다
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 함수
  }
}

// 이름 정의시 사이의 bar는 필수적으로 들어가야 한다
customElements.define('custom-element', CustomElement);
```

- 클래스의 this가 html element그 자체이다

```javascript
// 이런 것이 가능하다
this.innerHTML = '<div>hello world</div>';
this.querySelector('.shellboy');
```

- 기본적인 lift cycle을 제공해준다 (connectedCallback, disconnectedCallback)
- 이벤트 등록같이 DOM을 다루는 코드는 element가 렌더링 된 다음에 실행되는 connectedCallback에 넣어야 한다

## 💡SHADOW DOM

**DOM Element가 그 자체가 하나의 scope를 가지도록 해준다**

- 선언 (#shadow-root)

```javascript
// mode가 close라면 외부에서 접근이 불가능하다
// 실행하면 DOM의 하위에 #shadow-root라는 태그?가 생긴다.
attachShadow({ mode: 'open' });

// shadow DOM하위 element에 접근 방법
this.shadowRoot.querySelector('.shellboy');

// mode가 open인 경우 외부에서의 접근 방법
document.querySelector('.shellboy').shadowRoot.querySelector('.tallmurf');
```

- shadowRoot는 독자적인 환경을 가진다.
  - 여기서 정의한 css는 이곳에서만 사용된다.
  - 따라서 외부의 css className과 중첩이 되어도 상관없다.
- 외부에서 접근이 가능하긴 하나 추천하지는 않는다.
  - 하나의 shadowDOM은 그 자체의 생태계를 가지기 때문(**_private_**한 상태)

## 💡custom-element를 이용한 코딩에 도움이 되는 라이브러리

- Lit-html
- 상태관리 라이브러리(예. redux / mobx등?)

### react와 불변성

```
https://velopert.com/3486
```
