# CALENDAR_web-components

커스텀 엘리먼트를 활용한 일정 표시용 달력.

```
npm install
```

## 계기

순수 html css js로 react처럼 코딩할 순 없을까?

## 목표

- webpack사용을 익히자
- custom-element를 사용해보자
- 웹팩을 제외한 라이브러리를 사용하지 말아보자

## 후기

- custom-element와 shadowDOM을 처음 사용해보았는데 좋은 경험이었던 것 같다.
- 컴포넌트 단위로 확실히 끊을 수 있어 유지보수가 용이해질 것 같고 render함수 구현으로 인한 리렌더링도 편하다.
- shadowDOM이 컴포넌트 별로 독자적인 환경을 만들어주어 디자인과 css클래스명 관리가 쉬워진다.
- customElement를 도와주는 라이브러리를 간단하게 직접 구현해보았는데, 빠르게 구상한 것이라 부족한 부분은 있지만 재밌었다.

## 보완해볼 점

- state관리를 redux의 ruducer처럼 달력/계획을 나누어서 했으면 어땠을까?
- 타입스크립트 적용

## Link

- WebComponent with Sass
  - `https://medium.com/swlh/web-components-with-shadow-dom-and-sass-f780ad23dd90`
