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

```javascript
const data = React.useState();
console.log(data);
// 결과 : [undefined, f(함수)]
```

- 위 결과에서 undefined = data, 함수는
  data를 바꿀 때 사용하는 함수
- React.useState(0) 의 결과 : [0, f]

```javascript
const food = ["tomato", "potato"];
const [myFavFood, mySecondFavFood] = food;
```

- 배열의 요소 쉽게 가져오는 방법!

### 3.2 setState part Two

```javascript
const [counter, setCounter] = React.useState(0);
const onClick = () => {
  setCounter(counter + 1);
};
```

- setCounter 함수가 어떤 값을 받으면 그 값으로 업데이트하고 리렌더링을 일으킴

- setCounter 함수를 이용해서 state를 바꾸면 그 컴포넌트가 재생성되고 코드가 새로운 값을 가지고 실행된다.

### 3.3 Recap

### 3.4 State Functions

- 우리가 이전에 작성했던 방법은 좋은 방법은 아님

  - counter는 다른 곳에서 update 될 수 있음
  - counter가 다른 곳에서 변경되어서 우리가 생각했던 값이 아닐 수도 있음

- state를 바꾸는 2가지 방법
  - setCounter를 이용해 값 변경해주기
  - 이전 값을 바탕으로 현재 값을 설정하고 싶다면 setCounter에 함수를 넣는 방식 사용

```javascript
setCounter((current) => current + 1);
```

- setCounter 안에 있는 함수가 무엇을 return 하던지 그게 새로운 state가 됨 (현재값을 바탕으로 state값이 변경됨)

### 3.5 Inputs and State

```javascript
const onChange = (event) => {
  //console.log(event.target); -> input 불러옴
  //console.log(event.target.input);
  setMinutes(event.target.value);
};
```

- native Javascript event : nativeEvent 보기
- target : 방금 바뀐 input

### 3.6 State Practice part One

### 3.7 State Practice part Two

### 3.8 Recap

### 3.9 Final Practice and Recap

### 4.0 Props

- Props = 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법

- style을 재사용하면서 텍스트를 설정/변경하도록 하고 싶을 때:
  - 우리가 만들고 사용하는 모든 컴포넌트들은 () 괄호로 argument를 받음
  - 첫번째 argument의 이름은 마음대로 지어줄 수 있다
  - 어떤 prop이든 컴포넌트에 보내면 그것들은 그 컴포넌트 함수의 첫번째 argument 속으로 들어가게 된다

```javascript
//Btn({banana: "Save Change"})
<Btn banana="Save Change" x={false} />;
function Btn(props) {
  //props는 우리가 넣은 모든 것들을 갖는 오브젝트!
}
```

- props를 확인해보면 {banana: 'Save Changes', x: false} 가 들어가있다.

```javascript
<Btn banana="Save Change" x={false} />;
function Btn({ banana }) {
  {
    banana;
  }
}
```

- 위 코드와 같이 props보다 shortcut를 자주 사용한다

### 4.1 Memo

- 부모 컨포넌트가 state를 변경할 때 어떤 일이 일어나는지?

```javascript
<Btn text={value} onClick={changeValue} />
```

- 첫번째 줄의 코드는 (커스텀 컴포넌트에 onClick을 넣은 경우) onClick이 단지 props 이름일 뿐이고, Btn 안으로 전달된다.
- prop로 text, boolean 타입뿐만 아니라 함수도 전달할 수 있다.
- HTML 요소 안에 onClick 을 넣는다면 이벤트 리스너가 된다.

**_커스텀 컴포넌트에 무엇을 넣든 props가 되고, 실제 HTML 태그 안에 들어가지 않는다!_**

- 부모 컴포넌트의 state가 변경될 때 그 안에 있는 모든 것들이 다시 그려진다 (re-render)
- 따라서 다시 그려질 필요 없는 자식 컴포넌트도 다시 그려짐
  - **_React Memo_**: prop가 변경되지 않는다면 이 컴포넌트가 다시 그려지는 것을 원치 않을 때 사용

```javascript
const MemorizedBtn = React.memo(Btn);
<MemorizedBtn text={value} changeValue={changeValue} />
<MemorizedBtn text="Continue" />
```

- 부모 컨포넌트가 state 변경이 있다면 모든 자식들 다시 그려짐 (re-render)
- 추후에 어플리케이션이 느려지는 원인일 수 있으니 React Memo 기억해두기

### 4.2 Prop Types

- 예를 들어 prop에 전송하지 말아야할 것들을 전송하는 경우 / text prop에 다른 타입의 내용을 넘겨주는 경우

```javascript
Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};
```

- **_PropType_** : 어떤 타입의 prop를 받고 있는지 체크해줌
  - 위 코드 안에 prop 타입과 어떤 모양이어야 하는지를 작성

```javascript
function Btn({ text, fontSize = 14 }) {}
```

- fontSize가 존재하지 않는다면 (undefined) 14 기본값을 줌

### 4.3 Recap

### 5.0 Introduction

- `create-react-app`

  - 개발 서버에 접근한다든가, 자동으로 새로고침을 시켜준다든가, 즉각적으로 어플리케이션 안에 CSS를 포함시켜 준다든가 하는 기능들이 있음
  - 웹사이트를 publish 하는 명령어 존재: 코드 압축, 좀 더 빠르게 만듦

- node.js 설치 -> npx create-react-app 플젝 이름 -> npm run

### 5.1 Tour of CRA

```javascript
import PropTypes from "prop-types";

Button.PropTypes = {
  text: PropTypes.string.isRequired,
};
```

- CSS 사용: css 파일 작성 -> import -> 대신 모든 버튼들의 배경을 같은 색으로 만들어버림
- `global CSS style X`: create-react-app으로 작업할 때의 포인트는 분할하고, 정복하기
- Button.module.css 파일에 있는 .btn{}을 className으로 추가 가능
- 다른 모듈 css에서 같은 class name을 사용해도 문제되지 않음 (HTML 내에서는 랜덤 방식으로 생성됨)

### 6.0 Introduction

- render될 때마다 반복실행되어도 괜찮은 코드가 있을 수 있음 vs component가 처음 render될 때만 코드가 실행되길 원할 수 있음 (다른 state변화에는 실행되지 않도록 함)
  - API를 통해 데이터를 가져올 때: 첫번째 component render에서 API를 call하고, 이후 state 변화할 때 그 API에서 데이터를 또다시 가져오지 않기 위함

### 6.1 useEffect

- `useEffect` 함수
  - 첫번째 argument: 우리가 딱 한번만 실행하고 싶은 코드
  - 두번재 argument: 빈 array
  - component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어줌

###
