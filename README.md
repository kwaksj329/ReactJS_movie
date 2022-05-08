# ReactJS_movie 🎬

nomadcoders

## 2. THE BASICS OF REACT

### 2.1 Before React

- vanilla.html

  - HTML 만들기
  - Javascript에서 button 가져오기
  - button.addEventListener 두고 click event 감지
  - event listener 함수로 handleClick 함수 작성
  - counter 변수 정의 & counter 증가
  - span을 querySelector로 가져와서 innerText 변경

- React 설치: react와 react-dom javascript 파일 import 필요

### 2.2 Our First React Element

- React JS element를 어떻게 생성하는지
  - HTML 코드를 직접 작성하지 않음, Javascript와 React JS를 이용하여 element 생성
  - 이번 강의에서는 React JS로 element를 생성하는 어려운 방법을 먼저 보여줄 것임 (개발자들이 작업하는 방식 X)

```javascript
const span = React.creatElement("span");
```

- HTML 태그와 이름이 같을 필요 없다. 괄호 안에 적는 것은 생성하고자 하는 HTML 태그와 같은 이름이어야 함!

  - 두번째 argument로 올 수 있는 것은 span의 property들 (class name / id)
  - 세번째 argument로 올 수 있는 것은 content(내용)

- body안에 React element를 가져다 둘 수 있는 방법?
  - React JS는 어플리케이션이 interactive하도록 만들어주는 library
  - React-dom은 library, 또는 package인데 모든 React element들을 HTML body에 둘 수 있도록 해줌, 즉 React element를 가져다가 HTML로 바꾸는 역할

```javascript
ReactDom.render(span, root);
```

- render의 의미는 react element를 가지고 HTML로 만들어 배치한다는 것 = 사용자에게 보여준다.
- span을 root안에 render 해주기위한 코드 (root는 getElementById로 가져옴)

- 바닐라 JS = HTML 먼저 만들고 -> Javascript로 가져와서 -> HTML 수정
- React JS = 모든 것이 Javascript로써 시작 -> HTML 업데이트

### 2.3 Events in React

```javascript
const container = React.creatElement("div", null, [span, btn]);
ReactDom.render(container, root);
```

- span, btn element 둘 다 render하고 싶은 경우에 array를 두어 사용

```javascript
const btn = React.creatElement(
  "button",
  {
    onClick: () => console.log("im clicked"),
  },
  "Click me"
);
```

- 저번 수업에서는 button에 property로 id / class name / style 줌
  - 이번 수업에서는 event listener 등록하는 방법 다룸
  - createElement -> HTML 태그 선택 -> event 등록

### 2.4 Recap

### 2.5 JSX

```javascript
const Title = (
  <h3 id="title" onMouseEnter={console.log("mouse enter")}>
    Hello I'm a title
  </h3>
);

const h3 = React.creatElement(
  "h3",
  {
    onMouseEnter: () => console.log("mouse enter"),
  },
  "Hello I'm a title"
);
```

- createElement를 대체할 수 있는 방법에 대해 다룸 -> JSX (Javascript를 확장한 문법)

```javascript
const Button = (
  <button
    style={{
      backgroundColor: "tomato",
    }}
    onClick={() => console.log("im clicked")}
  >
    Click me
  </button>
);
```

- 태그 열고 닫기 -> content와 props 담기 -> 끝!
- 브라우저가 온전히 JSX 이해하는 것이 아니라 에러 발생 가능 -> Babel을 이용하여 변환

### 2.6 JSX part Two

- container의 createElement 바꿔주기
  - Title이나 Button을 포함시키기 위해서는 함수로 만들어줘야함
  - JSX를 return 해주는 형태로 작성
  - 함수() => { return (JSX 내용) }

**_컴포넌트의 첫 글자는 반드시 대문자! 그리고 함수 형태로!_**

- 만약 소문자라면 React / JSX 는 HTML button 태그라고 생각하게 된다.

## 3. STATE

### 3.0 Understanding State

- state = 기본적으로 데이터가 저장되는 곳
- 우리가 사용하는 counter 변수 -> state로 만들 수 있다.

- 변수 JSX에 전달하는 방법: 중괄호 안에 변수 이름 담기
- UI 업데이트(Rerendering) 하는 방법: ReactDOM.render() 재호출 -> 그렇게 좋은 방법이 아님!

- React JS는 UI에서 바뀐 부분만 업데이트 해준다
  - 이전에 렌더링된 컴포넌트는 어떤거였는지 확인하고,
  - 다음에 렌더링 될 컴포넌트를 확인한다 (변경된 부분만 업데이트)

### 3.1 setState part One
