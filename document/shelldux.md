# Shelldux

`리덕스를 모방해서 만든 상태관리 모듈`

- https://redux.js.org/tutorials/essentials/part-1-overview-concepts : 동작 예시

![스크린샷 2020-09-24 오후 1 34 03](https://user-images.githubusercontent.com/26402298/94101506-ea5a5b00-fe6a-11ea-969a-c1527bde8a77.png)

## Setting

action.js

```javascript
export const ACTION_TEST = 'ACTION_TEST';
export const handleActionTest = () => {
  return {
    type: ACTION_TEST,
  };
};
```

reducer.js

```javascript
const initialState = {
  say: 'hello',
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TEST: {
      return {
        ...state,
        say: 'bye',
      };
    }
  }
};

export default actionReducer;
```

rootReducer.js

```javascript
import { combineReducers } from 'shelldux';
import actionReducer from './reducer/actionReducer';
const rootReducer = combineReducers({
  action: actionReducer,
});

export default rootReducer;
```

store.js

- 프로젝트에서 가장 먼저 호출해주어야 함

```javascript
import { createStore } from 'shelldux';
import rootReducer from './reducer';

const middleware = [];

//미들웨어 존재할 시 넘겨줌
createStore(rootReducer, middleware);
```

```javascript
// 호출
import './store';
```

---

## Usage

selector

- 저장된 상태를 사용

```javascript
import { selector } from 'shelldux';

const action = selector((state) => state.action);
const { say } = action;
```

dispatch

- action을 이용해서 저장된 상태를 변경

```javascript
import { dispatch } from 'shelldux';
import { handleActionTest } from './action';

dispatch(handleActionTest());
```

observe

- 특정 상태의 변경을 감지하고 등록된 객체를 this로 call하는 함수를 실행
- 옵저빙 패턴을 위해서 추가적으로 구현한 함수이다.

```javascript
import { observe } from 'shelldux';

class Component {
  constructor() {
    this.name = 'shellboy';
    observe('action', this, console.log(this.name));
    // action 상태 변경 시 console.log 실행됨
    // 리렌더링하는 방식으로 활용 가능
  }
}
```

disobserve

- 컴포넌트 제거 시 store에서 observe리스트에서도 해당 컴포넌트 제거
- 옵저빙 패턴을 위해서 추가적으로 구현한 함수이다.

```javascript
import { disObserve } from 'shelldux';

class Component {
  constructor() {}

  disconnectedCallback() {
    //컴포넌트 제거 시
    disObserve('action', this);
  }
}
```
