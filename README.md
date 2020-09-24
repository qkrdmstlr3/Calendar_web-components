# CALENDAR_web-components

커스텀 엘리먼트를 활용한 일정 표시용 달력.

```
npm install
```

![스크린샷 2020-09-19 오후 9 42 45](https://user-images.githubusercontent.com/26402298/93667694-d3121b00-fac2-11ea-8e2e-3bdea08fa83b.png)

## 계기

순수 html css js로 react처럼 코딩할 순 없을까?

## 목표

- webpack사용을 익히자
- custom-element / shadowDOM을 사용해보자
- 웹팩을 제외한 라이브러리를 사용하지 말아보자 (필요하다면 직접 구현)

## 후기

- custom-element와 shadowDOM을 처음 사용해보았는데 좋은 경험이었던 것 같다.
- 컴포넌트 단위로 확실히 끊을 수 있어 가독성이 좋다.
- shadowDOM이 컴포넌트 별로 독립된 환경을 만들어주어 디자인과 css클래스명 관리가 쉬워진다.
- 필요한 라이브러리를 간단하게 직접 구현해보았는데, 빠르게 구상한 것이라 부족한 부분은 있지만 재밌었다.

## 보완해볼 점

- [x] state관리를 redux의 ruducer처럼 달력/계획을 나누어서 했으면 어땠을까?
- [ ] 타입스크립트 적용

## 추가한 내용

### 2020-09-25

- shelldux라는 것을 redux를 참고해서 새롭게 재구성 하였다.
  - 따라서 달력/계획으로 상태를 나누어서 관리할 수 있게 되었다.
  - shelldux.md 참고
- shellact라는 것을 만들어서 컴포넌트의 부모 클래스가 되도록 하였다.
  - 아직 미흡한 점이 많다.

## Link

- WebComponent with Sass
  - `https://medium.com/swlh/web-components-with-shadow-dom-and-sass-f780ad23dd90`
