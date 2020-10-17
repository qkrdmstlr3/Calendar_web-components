# Shelldux

`react-router를 모방해서 만든 CSR을 위한 라우팅 라이브러리`

`shellact를 뒷받침해주는 라이브러리이다`

## Setting

사전에 init파일을 가장 상위 컴포넌트에서 호출해 주어야함

- init파일은 window에 popState이벤트를 할당해줌

```javascript
import './shellRouter/init';
```

## Usage

router 사용법

- shellact에서 html을 렌더링 하는 부분에 다음과 같은 형태로 추가해주면 된다
- router-router안에 routes태그로 path와 해당 path에서 렌더링할 컴포넌트를 지정한다
- exact가 표시된 routes태그는 렌더링 될 때 가장 먼저 표기되는 태그이다

```javascript
import Shellact from 'shellact';
import './shellRouter/router';

class Container extends Shellact {
  render() {
    return [
      `
      <router-router>
        <routes exact path="/path1" component="path1-component"></routes>
        <routes path="/path2" component="path2-component"></routes>
        <routes path="/path3" component="path3-component"></routes>
      </router-router>
    `,
      null,
    ];
  }
}
```

link 사용법

- router-link태그안에 to로 path를 지정해주면 해당 경로로 이동하면서 화면을 리렌더링

```javascript
import Shellact from 'shellact';
import './shellRouter/link';

class Container extends Shellact {
  render() {
    return [` <router-link to="/path">이동하기</router-link> `, null];
  }
}
```
