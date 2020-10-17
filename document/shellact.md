# Shelldux

`순수 js로 react와 비슷하게 코딩하고 싶어서 만든 모듈이다`

## Example

component선언 방법

- render함수의 리턴값으로 html, css를 배열에 담아서 넘겨주면 customElements로 정의한 태그이름으로 사용이 가능하다.
- constructor에서 state를 정의해주면, this.setState()를 이용해서 state를 바꿀 수 있다. state가 바뀌면 화면이 리렌더링된다

```javascript
import Shellact from 'shellact';

class Component extends Shellact {
  constructor() {
    this.state = { name: 'hello' };
  }

  handleState() {
    this.setState({ name: 'shellboy' });
  }

  render() {
    return [`<div>hello world</div>`, stylesheet];
  }
}

customElements.define('component-component', Component);
```
