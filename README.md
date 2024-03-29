# [학습자료] 리액트를 다루는 기술

## 설명

- '리액트를 다루는 기술'이란 책을 공부하고 정리한 내용입니다. 웹 서핑 및 ChatGPT4를 통해 자료를 보완했습니다.

## 목차

1. [리액트 시작](#01-리액트-시작)
2. [JSX](#02-jsx)
3. [컴포넌트](#03-컴포넌트)
4. [이벤트 핸들링](#04-이벤트-핸들링)
5. [DOM에 이름 달기](#05-dom에-이름-달기)
6. [컴포넌트 반복](#06-컴포넌트-반복)
7. [컴포넌트의 라이프사이클 메서드](#07-컴포넌트의-라이프-사이클-메서드)
8. [Hooks](#08-hooks)
9. [컴포넌트 스타일링](#09-컴포넌트-스타일링)
10. [일정 관리 앱 애플리케이션 만들기](#10-일정-관리-앱-애플리케이션-만들기)
11. [컴포넌트 성능 최적화](#11-컴포넌트-성능-최적화)
12. [immer를 사용하여 더 쉽게 불변성 유지하기](#12-immer를-사용하여-더-쉽게-불변성-유지하기)
13. [리액트 라우터로 SPA 개발하기](#13-리액트-라우터로-spa-개발하기)
14. [외부 API를 연동하여 뉴스 뷰어 만들기](#14-외부-api를-연동하여-뉴스-뷰어-만들기)
15. [Context API](#15-context-api)
16. [리덕스 라이브러리 이해하기](#16-리덕스-라이브러리-이해하기)
17. [리덕스를 사용하여 리액트 애플리케이션 상태 관리하기](#17-리덕스를-사용하여-리액트-애플리케이션-상태-관리하기)
18. [리덕스 미들웨어를 통한 비동기 작업 관리](#18-리덕스-미들웨어를-통한-비동기-작업-관리)
19. [코드 스플리팅](#19-코드-스플리팅)
20. [서버 사이드 렌더링](#20-서버-사이드-렌더링)
21. [백엔드 프로그래밍](#21-백엔드-프로그래밍)
22. [mongoose를 이용한 mongoDB 연동 실습](#22-mongoose를-이용한-mongodb-연동-실습)

## 01. 리액트 시작

### React 특징

- Virtual Dom을 사용: 실제 DOM을 조작하는 것이 아니라 이를 추상화한 JavaScript 객체를 구성하여 사용
- 오로지 view만 담당하는 library

### 실행 명령어

- 현재 경로에 프로젝트 생성하기

```bash
yarn create react-app .
npm init react-app .
```

- 프로젝트 실행하기

```bash
yarn start
npm start
```

## 02. JSX

### JSX(JavaScript XML)

- 자바스크립트 확장 문법

### JSX의 장점

- 보기 쉽고 익숙함
- 활용도가 높음

### JSX 문법

- **감싸인 요소**: 컴포넌트 변화를 감지하기 위해서 DOM 트리 구조로 이루어져야함
- 자바스크립트 표현
- 조건부 연산자
- AND 연산자를 활용한 조건부 렌더링
- undefined를 렌더링하기 않기
- 인라인 스타일링
- class 대신 className
- 꼭 닫아야 하는 태그
- 주석

## 03. 컴포넌트

### 함수형 컴포넌트(Functional Components)와 클래스형 컴포넌트(Class Components)

1. 정의 및 선언 방식의 차이

- **함수형 컴포넌트**: JavaScript 함수를 사용하여 컴포넌트를 정의. ES6의 화살표 함수를 사용하여 간결하게 표현할 수 있음. Props를 함수의 매개변수로 받아 React 요소를 반환.

```javascript
const FunctionalComponent = (props) => {
  return <div>{props.children}</div>;
};
```

- **클래스형 컴포넌트**: React.Component를 상속받는 클래스를 사용하여 컴포넌트를 정의. render 메소드 안에서 JSX를 반환. Props와 상태(state)를 다루는 방법이 포함되어 있음.

```javascript
class ClassComponent extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
```

2. 상태(State) 관리

- **함수형 컴포넌트**: 이전에는 상태를 가질 수 없었지만, React Hooks(useState, useReducer 등)의 도입으로 상태 관리가 가능해짐.

- **클래스형 컴포넌트**: `this.state`를 사용하여 컴포넌트의 상태를 관리합니다. 상태 변경 시에는 `this.setState()` 메서드를 사용.

3. 라이프사이클 메서드

- **함수형 컴포넌트**: 이전에는 라이프사이클 메서드를 사용할 수 없었지만, `useEffect` Hook을 통해 컴포넌트의 생명주기를 효과적으로 관리할 수 있게 되었음.

- **클래스형 컴포넌트**: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등의 라이프사이클 메서드를 사용하여 컴포넌트의 생명주기 이벤트를 관리.

4. 성능

- **함수형 컴포넌트**: 보통 클래스형 컴포넌트보다 메모리 자원을 덜 사용하며, 성능상의 이점이 있을 수 있음. 코드의 양이 적고, 간결하기 때문에 로딩 시간이 단축될 수 있음.

- **클래스형 컴포넌트**: 함수형 컴포넌트에 비해 약간 더 많은 메모리를 사용할 수 있으며, 복잡한 애플리케이션에서는 성능 차이가 나타날 수 있음.

5. 사용 추세

- **함수형 컴포넌트**: React 팀과 커뮤니티는 함수형 컴포넌트와 Hooks를 사용하는 것을 권장. 더 간결하고, 재사용성이 높으며, 코드의 가독성이 좋기 때문.

- **클래스형 컴포넌트**: 여전히 유효하고 사용할 수 있지만, 새로운 기능이나 업데이트는 함수형 컴포넌트와 Hooks에 초점을 맞추고 있음.

### Props

1. 개념

- React에서 Props는 "properties"의 줄임말로, 컴포넌트 간에 데이터를 전달하는 방법. Props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용되며, 자식 컴포넌트에서는 이를 읽기 전용 데이터로 사용할 수 있음. 이는 컴포넌트의 재사용성을 높이고, 코드의 유지 관리를 용이하게 함.

2. Props 관리 방식

- **부모-자식 컴포넌트 간의 단방향 데이터 흐름**: Props는 항상 상위 컴포넌트에서 하위 컴포넌트로 전달되며, 이는 React의 단방향 데이터 흐름을 따름. 이러한 방식은 데이터의 흐름을 예측 가능하게 만들고 디버깅을 용이하게 함.

- **읽기 전용성**: Props는 자식 컴포넌트에서 읽기 전용으로 사용됨. 자식 컴포넌트는 받은 props를 직접 수정할 수 없으며, 데이터를 수정하고자 할 때는 부모 컴포넌트에서 상태를 변경하고 변경된 상태를 props로 다시 내려보내야 함.

- **컴포넌트 재사용성 증대**: Props를 사용함으로써 컴포넌트는 다양한 상황에서 재사용될 수 있음. 동일한 컴포넌트에 다른 데이터를 props로 전달함으로써 다양한 결과를 얻을 수 있음.

3. 사용 방식

- 기본 Props 전달

  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  return <ChildComponent name="John Doe" />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- 객체로 Props 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  const person = { name: "John Doe", age: 30 };
  return <ChildComponent person={person} />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return (
    <div>
      <h1>Name: {props.person.name}</h1>
      <h2>Age: {props.person.age}</h2>
    </div>
  );
}
```

- Props를 사용한 이벤트 핸들러 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <ChildComponent onClick={handleClick} />;
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}
```

- Props를 통한 children 전달
  > - 부모 컴포넌트

```javascript
function ParentComponent() {
  return (
    <ChildComponent>
      <p>This is a child content</p>
    </ChildComponent>
  );
}
```

> - 자식 컴포넌트

```javascript
function ChildComponent(props) {
  return <div>{props.children}</div>;
}
```

- 구조 분해 할당을 사용한 Props

> - 자식 컴포넌트

```javascript
function ChildComponent({ name, age }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </div>
  );
}
```

### PropTypes

- **기본 사용법**: 다음 예제는 MyComponent 컴포넌트에 name prop이 문자열로 전달되어야 함을 명시.

```javascript
import PropTypes from "prop-types";

function MyComponent({ name }) {
  return <div>Hello, {name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string,
};
```

- **필수 props 지정**: isRequired를 사용하여 prop이 필수적으로 전달되어야 함을 명시할 수 있음.

```javascript
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
```

- **다양한 타입 체크**: PropTypes는 다양한 자료형에 대한 타입 체크를 지원.

```javascript
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  config: PropTypes.object,
  onClick: PropTypes.func,
  favoriteNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOf(["active", "inactive"]),
};
```

- **객체의 형태를 지정하기**: PropTypes.shape를 사용하여 객체의 특정 형태를 지정할 수 있음.

```javascript
MyComponent.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  }),
};
```

- **배열 내부의 타입 지정**: PropTypes.arrayOf를 사용하여 배열 내부 요소의 타입을 지정할 수 있음.

```javascript
MyComponent.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ),
};
```

- 사용 시 주의사항
  > - PropTypes는 개발 모드에서만 동작하며, 프로덕션 빌드에서는 타입 체크를 위한 코드가 제거됨. 이는 성능에 영향을 주지 않도록 설계됨.
  > - 타입이 일치하지 않을 경우, 콘솔에 경고 메시지가 출력됨. 이는 개발 과정에서 문제를 사전에 발견하고 수정할 수 있게 도와줌.

## 04. 이벤트 핸들링

### 이벤트를 사용할 때 주의사항

- 이벤트 이름은 카멜 표기법으로 작성
- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
- DOM 요소에만 이벤트를 설정 가능

## 05. DOM에 이름 달기

### ref를 사용해야하는 상황

- DOM을 직접적으로 건드려야 할 때(state만으로 해결이 불가능할 때)

### ref를 사용해야하는 상황 예시

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기

### ref를 사용하는 방법

1. 콜백 함수를 통한 ref 설정

```javascript
<input ref={(ref) => {this.input=ref}}>
```

2. createRef를 통한 Ref 설정

```javascript
class RefSample extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}
```

## 06. 컴포넌트 반복

### key

- key는 컴포넌트 배열을 렌더링했을 때, 어떤 원소에 변동이 있었는지 알아내려고 사용함.
- 컴포넌트에 고유한 번호가 없다면 map 함수에 전달되는 콜백 함수의 인수인 index를 사용해야 함.

## 07. 컴포넌트의 라이프 사이클 메서드

### 라이프 사이클 메서드의 특징

- 클래스형 컴포넌트에서만 사용 가능.
- `<React.StrictMode>`로 App 컴포넌트를 감싸고 있기 때문에 constructor와 getDerivedStateFromProps 같은 라이프사이클 메서드가 개발 모드에서 두 번씩 호출됨. 특히 클래스 컴포넌트의 라이프사이클 메서드를 두 번 호출함으로써, 부수 효과(side effects)를 발생시키는 코드를 찾아낼 수 있게 함.

### 라이브 사이클 메서드의 종류

- **마운트**: DOM이 생성되고 웹 브라우저 상에 나타남.
- **업데이트**
  > - props가 바뀔 때.
  > - state가 바뀔 때.
  > - 부모 컴포넌트가 리렌더링 될 때.
  > - this.forceUpdate로 강제로 렌더링을 트리거할 때.
- **언마운트**: 컴포넌트를 DOM에서 제거.

### 라이프 사이클 메서드의 흐름

![life cycle method](/images/component_life_cycle.webp)

## 08. Hooks

### useState

- 개념

  > - useState는 컴포넌트의 상태를 함수 컴포넌트 내에서 관리할 수 있게 해줌.

- 예제 코드

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### useEffect

- 개념

  > - useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 해주는 Hook. 주로 사이드 이펙트(side effects)를 처리할 때 사용됨(데이터 fetching, 구독(subscriptions), 수동 DOM 조작 등).

- 예제 코드

```javascript
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### useReducer

- 개념

  > - useReducer는 복잡한 컴포넌트의 상태 로직을 다룰 때 useState보다 더 효율적인 Hook. 액션을 기반으로 상태를 업데이트하는 로직을 외부 함수(reducer)로 분리할 수 있음.

- 구성 요소

  > - state: useReducer를 사용할 때의 현재 상태.
  > - dispatch: 액션을 발생시키는 함수로, reducer 함수에 액션을 전달하여 상태를 업데이트함. 액션은 보통 type 속성을 가지며, 필요에 따라 추가 데이터를 포함할 수 있음.

- 예제 코드

```javascript
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

### useMemo

- 개념

  > - useMemo는 메모이제이션(memoization)된 값을 반환하는 Hook. 성능 최적화를 위해 계산량이 많은 함수의 결과값을 재사용할 때 유용함.

- 예제 코드

```javascript
import React, { useState, useMemo } from "react";

const computeExpensiveValue = (a, b) => {
  // imagine this is an expensive operation
  return a + b;
};

function Example() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div>
      {/* setA() 안에 '+' 기호는 단항 플러스 연산자로 피연산자를 숫자로 변환하기 위하여 사용됨 */}
      <input value={a} onChange={(e) => setA(+e.target.value)} />
      <input value={b} onChange={(e) => setB(+e.target.value)} />
      <p>Result: {memoizedValue}</p>
    </div>
  );
}
```

### useCallback

- 개념

  > - useCallback은 React의 Hook 중 하나로, 함수를 메모이제이션하는 데 사용됨. 즉, 컴포넌트가 리렌더링될 때마다 함수를 새로 생성하는 대신, useCallback을 사용하여 함수를 재사용할 수 있음. 이는 특히 해당 함수를 props로 하위 컴포넌트에 전달할 때 성능 최적화에 유용함.

- 파라미터

  > - **Callback 함수**: 메모이제이션할 함수.
  > - **의존성 배열(Dependency array)**: 이 배열 내의 요소가 변경될 때만 함수가 업데이트됨. 배열이 비어있으면 컴포넌트가 마운트될 때 단 한 번만 함수가 생성되며, 그 후로는 재생성되지 않음.

- 예제 코드

```javascript
import React, { useState, useCallback } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return <button onClick={increment}>Increment {count}</button>;
}
```

### useRef

- 개념

> - useRef는 컴포넌트에서 DOM을 직접 선택해야 할 때 사용함. 또한, 렌더링과 관련 없는 데이터를 저장하는 용도로도 사용됨.

- 예제

```javascript
import React, { useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## 09. 컴포넌트 스타일링

### SASS

- SASS는 원래의 Sass 문법으로, CSS와는 다른 들여쓰기와 줄바꿈을 사용하여 계층을 나타냄. 중괄호 {}와 세미콜론 ;을 사용하지 않음.
- 이 문법은 간결하며, CSS를 보다 선언적인 방식으로 작성할 수 있게 해줌.

```css
#main
  color: blue
  font-size: 0.3em
  p
    margin: 0 auto
```

### SCSS

- SCSS는 CSS와 거의 동일한 문법을 가지고 있으며, CSS의 상위 집합. 즉, 모든 유효한 CSS는 SCSS 문법으로도 유효함.
- SCSS는 중괄호 {}와 세미콜론 ;을 사용하여 스타일을 정의. 이로 인해 기존 CSS와의 호환성이 높고, CSS를 SCSS로 전환하기 쉬움.

```css
#main {
  color: blue;
  font-size: 0.3em;
  p {
    margin: 0 auto;
  }
}
```

### SASS/SCSS 차이점

- **문법 스타일**: SASS는 들여쓰기를 기반으로 한 문법을 사용하여 더 간결. 반면, SCSS는 CSS와 거의 같은 문법을 사용하여 보다 친숙하고, 기존 CSS를 쉽게 전환할 수 있음.
- **호환성**: SCSS는 CSS의 상위 집합이기 때문에 모든 유효한 CSS 스타일시트는 그대로 SCSS로 사용할 수 있음. SASS 문법은 이와 다르게 특별한 규칙(들여쓰기, 줄바꿈 등)을 따름.
- **사용성**: 개인의 선호도나 프로젝트의 요구에 따라 SASS와 SCSS 중 선택할 수 있음. SCSS는 CSS 작성자에게 더 친숙할 수 있으며, SASS는 더 간결한 코드를 선호하는 개발자에게 매력적일 수 있음.

### CSS Module

#### 개념

- CSS Module은 CSS를 모듈화하여 사용할 수 있게 해주는 기술. 이는 JavaScript 모듈 시스템을 사용하여 CSS 클래스 이름과 선택자를 로컬 스코프로 한정시키고, 충돌을 방지하는 방식으로 작동함. CSS Module의 주요 목적은 스타일시트의 클래스 이름이 전역 범위에서 작동하는 CSS의 한계를 극복하고, 컴포넌트 기반 개발에서 스타일의 캡슐화를 강화하는 것.

#### CSS Module의 작동 원리

- **로컬 스코핑**: CSS Module을 사용하면, 각 CSS 클래스 이름이 고유하게 변환되어, 다른 파일의 클래스 이름과 충돌하지 않음. 예를 들어, .button 클래스가 여러 CSS 파일에 정의되어 있어도, 각각 다른 고유 이름으로 컴파일되어 충돌을 방지함.
- **자동화된 클래스 이름 생성**: 빌드 과정에서 CSS 클래스 이름이 고유한 값으로 변환되며, 이 값은 일반적으로 파일 이름과 원래 클래스 이름을 기반으로 생성됨. 예를 들어, Button.module.css 파일의 .error 클래스는 Button_error_1a2b3c와 같이 컴파일 될 수 있음.

#### CSS Module 사용 이점

- **스타일 충돌 방지**: CSS Module을 사용하면 전역 스코프에서 발생할 수 있는 클래스 이름 충돌을 방지할 수 있음. 이는 특히 대규모 프로젝트나 여러 개발자가 협업하는 환경에서 유용함.
- **컴포넌트 기반 개발 지원**: React, Vue와 같은 컴포넌트 기반 프레임워크와 잘 어울리며, 각 컴포넌트에 대한 스타일을 캡슐화하여 모듈화할 수 있음.
- **명시적인 종속성 관리**: CSS Module은 JavaScript import 문을 통해 CSS 파일을 명시적으로 불러옴으로써, 스타일의 종속성을 명확하게 관리할 수 있게 해줌.

### 라이브러리

#### SASS (Syntactically Awesome Style Sheets)

- SASS는 CSS의 한계를 극복하기 위해 설계된 프리프로세서(preprocessor) 언어. CSS에 변수, 중첩 규칙, 믹스인(mixins), 함수 등 프로그래밍 언어의 기능을 추가하여, 스타일시트의 재사용성을 높이고, 유지 보수를 용이하게 함. SASS는 두 가지 문법 형식을 지원함.
- **변수 사용**: 색상, 폰트, 기타 값을 재사용하기 위한 변수를 선언할 수 있음.
- **믹스인 사용**: 코드 블록을 정의하고 재사용하여 중복을 줄일 수 있음.
- **중첩 규칙**: 선택자를 부모-자식 관계로 중첩하여 코드의 가독성을 높일 수 있음.
- **함수**: 컬러 조작, 리스트 조작 등의 작업을 위한 함수를 제공함.

#### Open-Color

- Open-Color는 색상 팔레트를 제공하는 SCSS 및 CSS 라이브러리. 디자인과 개발 과정에서 일관된 색상 체계를 사용할 수 있도록 다양한 색상의 세트를 제공. Open-Color는 주로 UI 디자인에 사용되며, 쉽게 접근할 수 있는 변수를 통해 개발자와 디자이너가 쉽게 색상을 적용할 수 있도록 해줌.
- **접근성**: 색상은 접근성을 고려하여 구성되어 있어, 시각적으로 구분하기 쉬움.
- **사용 용이성**: SCSS 변수 또는 CSS 커스텀 프로퍼티로 제공되므로, 프로젝트에 쉽게 통합할 수 있음.

#### Include-Media

- Include-Media는 반응형 디자인을 구현할 때 사용하는 SCSS 믹스인 라이브러리입니다. 복잡한 미디어 쿼리를 간단한 문법으로 작성할 수 있게 해주며, 가독성 높은 코드로 반응형 디자인을 쉽게 구현할 수 있도록 도와줌.
- **간결한 문법**: 미디어 쿼리의 조건을 간단한 표현으로 작성할 수 있음.
- **커스터마이징**: 프로젝트의 요구 사항에 맞게 미디어 쿼리의 브레이크포인트를 쉽게 설정할 수 있음.
- **재사용성**: 반복적인 미디어 쿼리의 사용을 줄이고, 유지 보수를 용이하게 함.

#### Classnames

- classnames는 JavaScript에서 조건부로 클래스 이름을 결합하기 위한 유용한 라이브러리. React와 같은 컴포넌트 기반 라이브러리나 프레임워크에서 동적 클래스 이름을 다룰 때 특히 유용함. 이 라이브러리를 사용하면 복잡한 조건문 없이도 간결하고 읽기 쉬운 방식으로 클래스 이름을 결정할 수 있음.

- classnames 함수는 여러 인자를 받을 수 있으며, 각 인자는 문자열, 객체, 또는 배열이 될 수 있음. 객체를 사용할 경우, 키는 클래스 이름을 나타내며, 값이 true일 때 해당 클래스가 결과에 포함됨.

```javascript
import React from "react";
import classNames from "classnames";

function Button({ primary, children }) {
  // primary prop에 따라 버튼 스타일 결정
  const buttonClass = classNames({
    btn: true, // 기본 클래스, 항상 포함
    "btn-primary": primary, // primary가 true일 때만 포함
    "btn-secondary": !primary, // primary가 false일 때만 포함
  });

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
```

## 10. 일정 관리 앱 애플리케이션 만들기

### props

#### 개념

- React에서 props는 properties의 줄임말로, 컴포넌트 간에 데이터를 전달하는 방법. props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 전달할 때 사용되며, 주로 컴포넌트의 재사용성을 높이고, 유지 보수를 용이하게 하는 데 기여함. props는 읽기 전용이며, 컴포넌트 내에서는 수정할 수 없음.

#### 작동방식

- 부모 컴포넌트에서 자식 컴포넌트로 props를 전달.
- 자식 컴포넌트는 전달받은 props를 사용하여 렌더링하거나 다른 로직을 처리.
- props는 객체 형태로 전달되며, 자식 컴포넌트에서는 이 객체의 속성을 통해 전달받은 데이터에 접근할 수 있음.

#### 예제

- App.js

```javascript
import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
};

export default App;
```

- Gretting.js

```javascript
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

### 라이브러리

#### react-icons

- React 프로젝트에서 사용할 수 있는 아이콘 라이브러리. 이 라이브러리는 Font Awesome, Material Design Icons, Typicons, GitHub Octicons 등과 같은 여러 인기 있는 아이콘 세트를 포함하고 있음. react-icons를 사용하면, 이러한 다양한 아이콘 세트에서 필요한 아이콘을 쉽게 찾아 React 컴포넌트로 가져와서 사용할 수 있음.
- **다양한 아이콘 세트 지원**: Font Awesome, Material Icons, Ionicons 등 여러 인기 있는 아이콘 라이브러리에서 아이콘을 사용할 수 있음.
- **SVG 기반**: 모든 아이콘은 SVG 형식으로 제공되므로, 크기 조정이 자유롭고, 화질 저하 없이 깨끗한 이미지를 유지할 수 있음.
- **트리 쉐이킹(Tree Shaking) 지원**: 필요한 아이콘만 번들(bundle)에 포함되므로, 애플리케이션의 최종 파일 크기를 줄일 수 있음.

```javascript
import { FaCoffee } from "react-icons/fa";

const MyComponent = () => {
  return <FaCoffee />;
};
```

## 11. 컴포넌트 성능 최적화

### 크롬 개발자 콘솔에서 Performance 녹화로 성능 체크

1. **크롬 개발자 도구 열기**: 원하는 페이지에서 우클릭 후 '검사'를 선택하거나, 단축키 (Windows/Linux의 경우 Ctrl+Shift+I, macOS의 경우 Cmd+Opt+I)를 사용해 개발자 도구를 오픈.
2. **Performance 탭으로 이동**: 상단 탭에서 'Performance'를 선택.
3. **녹화 시작**: 녹화 버튼(작은 원 모양)을 클릭하여 성능 데이터의 녹화를 시작. 페이지를 새로고침하거나 특정 동작을 수행하여 분석하고자 하는 작업을 실행.
4. **녹화 중지**: 분석할 동작이 끝나면, 녹화 중지 버튼(녹화 시작 버튼 옆의 사각형 모양)을 클릭.
5. **성능 데이터 분석**: 녹화가 완료되면 타임라인, 프레임 레이트, 자바스크립트 실행 시간 등 다양한 성능 지표를 확인할 수 있음. 이를 통해 성능 병목을 식별하고 최적화할 수 있음.

### export default React.memo()

- React.memo는 컴포넌트의 리렌더링 성능을 최적화하기 위한 고차 컴포넌트(Higher Order Component, HOC). React.memo로 감싼 컴포넌트는 props 변경이 없으면 리렌더링되지 않음. 즉, 동일한 props로는 이전에 렌더링된 결과를 재사용함. 이 방식은 특히 리스트와 같이 데이터가 변경되지 않는 많은 수의 컴포넌트를 렌더링해야 할 때 유용함.

- `export default React.memo(MyComponent);`로 컴포넌트를 내보내면, 이 컴포넌트를 사용하는 곳에서는 메모이제이션이 적용된 버전의 컴포넌트를 받게 됨. 이는 컴포넌트의 불필요한 리렌더링을 방지하여 애플리케이션의 성능을 개선할 수 있음.

- 예제

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

## 12. immer를 사용하여 더 쉽게 불변성 유지하기

### 불변성(Immutability)

- React에서 불변성(Immutability)은 데이터가 변경될 때 기존의 데이터를 수정하지 않고, 새로운 데이터를 생성하여 사용하는 개념. 불변성을 지키는 것은 React의 재렌더링 성능 최적화에 중요한 역할을 함. React는 컴포넌트의 상태(state)나 속성(props)이 변경되었는지 확인하기 위해 이전 상태와 비교하는데, 불변성을 유지하면 이 비교 과정을 효율적으로 만들 수 있음.

- 불변성을 지키지 않는 예

```javascript
const myArray = [1, 2, 3];
myArray.push(4); // myArray를 직접 변경
```

- 불변성을 지키는 예

```javascript
const myArray = [1, 2, 3];
const newArray = [...myArray, 4]; // 새 배열을 생성하여 변경
```

- 불변성이 중요한 이유

> - **변경 감지 용이성**: React와 같은 라이브러리나 프레임워크에서는 컴포넌트의 상태가 변경되었을 때, 이를 감지하고 해당 컴포넌트를 다시 렌더링. 객체의 불변성을 유지하면, 단순한 비교(얕은 비교)로 객체의 변경 여부를 판단할 수 있음. 즉, 객체의 참조가 변경되었다는 것은 내용이 변경되었다는 명확한 신호가 됨. 반면에 객체 내부를 직접 변경하면, 변경 사항을 감지하기 위해 객체의 깊은 비교(객체 내부까지 비교)를 해야 하며, 이는 성능 저하를 초래할 수 있음.

> - **순수 함수와의 호환성**: 순수 함수는 동일한 입력에 대해 항상 동일한 출력을 반환하며, 외부 상태를 변경하지 않고 부작용(side effects)이 없는 함수. 불변성을 유지하면 함수가 외부 상태를 변경하지 않으므로 순수 함수의 조건을 만족시킴. 이는 코드의 예측 가능성과 재사용성을 높여줌.

> - **프로그램의 안정성 향상**: 데이터를 직접 변경하지 않고 새로운 객체를 생성함으로써, 원본 데이터가 의도치 않게 변경되는 것을 방지할 수 있음. 이는 특히 여러 컴포넌트에서 같은 데이터를 참조할 때 중요함. 하나의 컴포넌트에서 데이터를 변경하면, 그 변경 사항이 다른 컴포넌트에도 영향을 미치게 되어 버그가 발생할 수 있음. 불변성을 유지함으로써 이러한 문제를 방지할 수 있음.

### 라이브러리

#### immer

- **개념**: Immer는 JavaScript의 불변성을 쉽게 관리할 수 있도록 도와주는 라이브러리. React 개발에서 상태 관리를 할 때 불변성을 유지하는 것이 중요하지만, 복잡한 상태 객체나 배열을 직접 수정하지 않고 새로운 상태를 생성하는 것은 번거로울 수 있음. 이때 Immer를 사용하면 기존의 변경 가능한 방식으로 코드를 작성하되, 내부적으로는 불변성을 유지한 새로운 상태를 생성해줌.

- **특징**

  > - **간결한 코드**: 복잡한 상태 업데이트 로직을 보다 간결하게 작성할 수 있음. Immer를 사용하면 불변성을 직접 관리하는 복잡한 코드 없이 상태를 업데이트할 수 있음.
  > - **성능 최적화**: Immer는 내부적으로 변경 사항을 추적하여 필요한 부분만 업데이트. 이는 큰 데이터 구조를 다룰 때도 성능을 유지하는 데 도움이 됨.
  > - **사용 용이성**: Immer는 사용하기 쉬우며, 기존의 JavaScript 지식을 그대로 활용할 수 있어 학습 곡선이 낮음.

- **produce 함수의 기본 구조**

  > - produce 함수는 두 가지 인자를 받을 수 있음.
  > - **현재 상태(currentState)**: 업데이트하고자 하는 현재 상태.
  > - **생산자 함수(producer function)**: 이 함수는 첫 번째 인자로 드래프트 상태(draft state)를 받음. 드래프트 상태는 현재 상태의 프록시(proxy)로, 이 드래프트 상태를 변경하는 것이 실제 상태에 변경을 적용. 생산자 함수 내에서는 이 드래프트 상태를 직접 변경할 수 있으며, Immer는 이러한 변경사항을 기반으로 새로운 불변 상태를 생성함.

- **내부 관리 방법**

  > - Immer는 내부적으로 프록시(Proxy)를 사용하여 드래프트 상태를 관리. 생산자 함수 내에서 드래프트 상태에 대한 변경은 실제로 프록시 객체를 통해 이루어짐. 이때, 변경사항은 불변성을 유지하면서 새로운 상태 객체를 생성하는 데 사용됨.
  > - **드래프트 상태**: 현재 상태의 가변적인 복사본. 이 드래프트 상태에 대한 변경은 원본 상태에는 영향을 주지 않음.
  > - **프록시**: 드래프트 상태에 대한 변경사항을 가로채고 기록. 생산자 함수가 완료되면, Immer는 이 기록된 변경사항을 사용하여 원본 상태의 불변 복사본을 생성함.

- **예제 코드**

```javascript
import produce from "immer";

const initialState = { name: "John", age: 25 };

const nextState = produce(initialState, (draftState) => {
  draftState.age = 26;
});
```

## 13. 리액트 라우터로 SPA 개발하기

useLocation 훅: 이 훅은 현재 브라우저의 위치(location) 객체를 반환합니다. 위치 객체에는 현재 URL의 경로(pathname), 검색 쿼리(search), 해시(hash) 등의 정보가 포함되어 있습니다. useLocation을 사용하면 컴포넌트 내에서 URL의 변경을 감지하고, URL의 특정 부분에 따라 다른 작업을 수행할 수 있습니다.

useNavigate 훅: useNavigate는 프로그래밍 방식으로 다른 경로로의 이동을 처리할 수 있는 함수를 반환합니다. 이 함수를 사용하여 사용자를 다른 페이지로 리디렉션하거나, 브라우저의 이전/다음 페이지로 이동하는 등의 네비게이션 작업을 수행할 수 있습니다. useNavigate 함수는 경로를 인자로 받아 해당 경로로 이동시키며, 추가 옵션을 통해 이동 방식을 더 세밀하게 제어할 수 있습니다.

### 라이브러리

#### react-router-dom

- 개념

  > - react-router-dom은 React 애플리케이션에서 클라이언트 사이드 라우팅을 구현하기 위한 표준 라이브러리입니다. 이 라이브러리를 사용하면, 싱글 페이지 애플리케이션(SPA)에서 다양한 뷰를 쉽게 조작하고, URL에 따라 컴포넌트를 렌더링하거나 데이터를 변경하는 등의 작업을 할 수 있습니다. react-router-dom은 웹 브라우저 환경에 특화된 라우팅 기능을 제공합니다.

- 주요 컴포넌트 및 기능

  > - **`<BrowserRouter>`**: HTML5의 history API를 사용하여 UI를 URL과 동기화하는 라우터. 대부분의 웹 애플리케이션에서 사용됨.
  > - **`<Route>`**: 특정 URL에 매치될 때만 UI를 렌더링하는 컴포넌트. path prop으로 어떤 경로에서 컴포넌트를 렌더링할지 지정.
  > - **`<Switch>`**: 여러 `<Route>` 컴포넌트 중에서 가장 먼저 매치되는 경로의 컴포넌트만 렌더링. React Router v5까지 사용되었으며, v6부터는 `<Routes>` 컴포넌트로 대체되었음.
  > - **`<Link>`**: 클릭 시 다른 주소로 이동할 수 있는 링크를 생성. `<a>` 태그와 비슷하지만, 페이지를 새로고침하지 않고 라우터 내에서 뷰를 변경.
  > - **`<NavLink>`**: `<Link>`와 유사하지만, 현재 경로와 매치될 때 스타일이나 클래스를 추가할 수 있는 컴포넌트.
  > - **useHistory, useLocation, useParams, useRouteMatch 등의 Hooks**: 라우터의 상태에 접근하거나 조작할 수 있는 React Hooks. React Router v5에서 도입되었으며, v6에서는 일부 API가 변경되었음.

- React Router v6의 변경점

  > - **`<Routes>` 컴포넌트 도입**: `<Switch>` 컴포넌트는 `<Routes>`로 대체되었음. `<Routes>`는 내부의 `<Route>` 컴포넌트들 사이에서 더 나은 매칭 로직을 제공.
  > - **element prop의 사용**: v6에서는 `<Route>` 컴포넌트가 component 또는 render prop 대신 element prop을 사용하여 렌더링할 컴포넌트를 지정. element prop에는 JSX가 직접 전달됨.
  > - **Nested Routes**: v6에서는 경로의 중첩을 더 쉽게 구현할 수 있도록 `<Route>` 컴포넌트의 중첩을 통해 자식 라우트를 정의할 수 있음.

- React Router v6에서 주로 사용하는 Hook

> - **useLocation**: URL의 위치(경로, 쿼리 문자열 등)에 대한 정보를 제공.

```javascript
const location = useLocation();
console.log(location.pathname); // 현재 경로명을 출력
```

> - **useNavigate**: 프로그래매틱하게 다른 경로로 이동할 수 있게 해줌.

```javascript
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return <button onClick={goToHome}>홈으로 가기</button>;
};
```

> - **useParams**: URL 파라미터(동적 세그먼트)에 접근할 수 있게 해줌. 예를 들어, /user/:id 경로에서 id 값을 가져올 수 있음.

```javascript
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // /user/123 경로에서 '123'을 id로 가져옴
  return <div>사용자 프로필 ID: {id}</div>;
};
```

> - **useRoutes**: 라우트 구성을 기반으로 라우트 요소를 동적으로 생성. 보통 대규모 애플리케이션에서 라우트를 외부 파일로 분리할 때 유용함.

```javascript
import { useRoutes } from "react-router-dom";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
];

const App = () => {
  const element = useRoutes(routes);
  return <div>{element}</div>;
};
```

### qs

- 개념

  > - qs 라이브러리는 Node.js 환경에서 쿼리 스트링을 파싱하고 문자열화하기 위한 유틸리티. 쿼리 스트링은 URL의 일부로, 클라이언트에서 서버로 데이터를 전송할 때 사용되는 키-값 쌍의 집합. qs 라이브러리는 복잡한 객체 구조를 쿼리 스트링으로 변환하거나, 쿼리 스트링을 객체로 파싱하는 기능을 제공. 이는 웹 개발에서 데이터를 전송하거나 받을 때 유용하게 사용됨.

- 주요 기능

  > - 파싱: URL의 쿼리 스트링 부분을 객체로 변환.
  > - 문자열화: 객체를 쿼리 스트링 형태로 변환.
  > - 처리 옵션: 배열, 중첩 객체 등 복잡한 데이터 구조를 처리할 수 있는 다양한 옵션을 제공.

- 예제 코드: 쿼리 스트링 파싱

```javascript
const qs = require("qs");

const query = "name=John Doe&age=23";
const parsed = qs.parse(query);

console.log(parsed);
// 출력: { name: 'John Doe', age: '23' }
```

- 예제 코드: 객체를 쿼리 스트링으로 변환

```javascript
const qs = require("qs");

const obj = { name: "John Doe", age: 23 };
const stringified = qs.stringify(obj);

console.log(stringified);
// 출력: 'name=John+Doe&age=23'
```

## 14. 외부 API를 연동하여 뉴스 뷰어 만들기

### 비동기 프로그래밍

#### promise

- **개념**: Promise는 비동기 작업의 최종 성공 또는 실패를 나타내는 객체. then, catch, finally 메서드를 통해 비동기 작업의 결과를 처리.

- 예제 코드

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation succeeded");
    // reject("Operation failed"); // 실패 시
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // "Operation succeeded"
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise is settled.");
  });
```

#### async/await

- **개념**: async와 await는 Promise를 더 쉽게 사용할 수 있도록 하는 ES8(ES2017)의 문법. async 함수 내에서 await 키워드를 사용하면, Promise의 실행이 완료될 때까지 함수의 실행을 일시 중지하고, 결과값을 기다림.

- 예제 코드

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

### Fetch, Axios, AJAX

#### Fetch

- **개념**: fetch API는 자바스크립트에서 HTTP 요청을 실행하기 위한 내장 함수. Promise 기반으로 작동.

- 예제 코드

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### Axios

- **개념**: Axios는 브라우저와 Node.js에서 사용할 수 있는 HTTP 클라이언트 라이브러리. 자동 변환, 요청 취소 등의 추가 기능을 제공.

- 예제 코드

```javascript
axios
  .get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));
```

#### AJAX

- **개념**: AJAX는 웹 페이지가 비동기적으로 서버와 데이터를 교환할 수 있게 하는 개발 방식. XMLHttpRequest 객체를 사용. 현대 웹 애플리케이션에서는 JSON을 더 많이 사용하며, fetch나 axios 같은 라이브러리로 대체되는 추세.

- 예제 코드

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

### 벤더 프리픽스

- **개념**: 벤더 프리픽스(Vendor Prefixes)는 웹 브라우저 제조사가 새로운 실험적 기능을 제공할 때, 해당 기능이 아직 표준이 아니거나 표준화 과정 중에 있을 때 사용하는 접두사입니다. 이러한 접두사는 웹 개발자가 특정 브라우저에서만 작동하는 기능을 사용할 수 있게 해주며, 다른 브라우저에서는 해당 스타일이나 기능이 적용되지 않도록 합니다. 벤더 프리픽스를 사용하면 웹 표준이 확립되기 전에 새로운 CSS 속성이나 JavaScript API를 안전하게 실험할 수 있습니다.

- **주요 벤더 프리픽스**

  > - **-webkit-**: Safari, Chrome, 새로운 Edge(크로미움 기반), Opera(크로미움 기반) 등 WebKit 또는 Blink 엔진을 사용하는 브라우저용.
  > - **-moz-**: Firefox 브라우저용.
  > - **-o-**: 구 Opera 브라우저용.
  > - **-ms-**: 구 Internet Explorer 및 구 Edge 브라우저용.

- **예제 코드**

```css
.box {
  -webkit-border-radius: 10px; /* Chrome, Safari, 새로운 Opera, 새로운 Edge */
  -moz-border-radius: 10px; /* Firefox */
  border-radius: 10px; /* 표준화된 속성 */
}
```

### 라이브러리

#### styled-components

- **개념**: styled-components는 React 및 기타 컴포넌트 기반 라이브러리에서 사용할 수 있는 CSS-in-JS 라이브러리. 이 라이브러리를 사용하면 JavaScript 내에서 CSS를 선언적이고 유지 관리가 용이한 방식으로 작성할 수 있음. styled-components의 주요 목적은 컴포넌트의 스타일을 컴포넌트의 로직과 구조와 밀접하게 결합하여, 컴포넌트를 완전히 독립적이고 재사용 가능하게 만드는 것.

- **특징**

  > - **컴포넌트 기반 스타일링**: 각 스타일은 컴포넌트에 직접 연결되어 있으며, 이를 통해 구성 요소별 스타일의 격리가 가능.
  > - **실시간 스타일 변경**: props를 통해 스타일을 동적으로 변경할 수 있으며, 이를 통해 다양한 상태에 따른 스타일 변화를 쉽게 구현할 수 있음.
  > - **자동 벤더 프리픽스**: styled-components는 자동으로 CSS에 필요한 벤더 프리픽스를 추가해줌. 이로 인해 다양한 브라우저에서의 호환성 문제를 줄일 수 있음.
  > - **SSR(Server-Side Rendering) 지원**: 서버 사이드 렌더링과 함께 사용할 수 있으며, 이를 통해 초기 로딩 성능을 개선하고 검색 엔진 최적화(SEO)를 향상시킬 수 있음.'

- **예제 코드**

```javascript
import styled from "styled-components";

// 버튼 컴포넌트 생성
const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  color: ${(props) => (props.primary ? "white" : "blue")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </div>
  );
}

export default App;
```

#### axios

- **개념**: axios는 Node.js 환경에서 HTTP 요청을 보내기 위한 JavaScript 라이브러리. 이 라이브러리는 Promise 기반으로 동작하기 때문에 비동기적인 방식으로 HTTP 요청을 처리할 수 있음. axios를 사용하면 GET, POST, PUT, DELETE 등의 HTTP 메서드를 사용하여 서버와 통신할 수 있으며, 요청을 보내고 응답을 받는 과정을 쉽게 처리할 수 있음.

- **특징**
  > - **브라우저와 Node.js에서 모두 사용 가능**: axios는 브라우저뿐만 아니라 Node.js에서도 사용할 수 있어서 프론트엔드와 백엔드 양쪽에서 활용할 수 있음.
  > - **Promise 기반의 비동기 처리**: HTTP 요청을 비동기적으로 처리하고, then이나 async/await을 사용하여 응답을 처리할 수 있음.
  > - **요청과 응답의 인터셉터**: 요청을 보내기 전이나 서버로부터 응답을 받은 후에 이를 가로채어 추가적인 처리를 할 수 있는 기능을 제공.
  > - **요청 취소**: 이미 보낸 요청을 취소할 수 있는 기능을 제공.
  > - **자동 변환**: 요청 데이터는 자동으로 JSON으로 변환되며, 응답 데이터도 자동으로 JSON 객체로 변환.
  > - **클라이언트 측 보호**: CSRF(Cross-Site Request Forgery)와 같은 공격으로부터 보호받을 수 있는 기능을 포함.
  > - **넓은 브라우저 호환성**: axios는 다양한 버전의 브라우저에서 호환됨.

## 15. Context API

### Context API

- Context API는 React 16.3에서 도입된 기능으로, 컴포넌트 트리 전체에 걸쳐 데이터를 효율적으로 전달(공유)할 수 있는 방법을 제공. 이를 통해 prop-drilling(각 레벨을 거쳐 prop을 전달하는 것)의 번거로움 없이 컴포넌트 간에 데이터를 공유할 수 있음. 주로 전역 상태 관리, 테마 설정, 사용자 인증 정보 등 애플리케이션 전반에서 필요한 데이터를 관리하는 데 사용됨.

### Consumer 그리고 Provider

- **Consumer**: Context를 사용하여 컴포넌트 트리에 데이터를 공급하는 컴포넌트. Provider는 value prop을 통해 자식 컴포넌트에게 전달할 데이터를 받음. Provider를 사용하면, 이를 자식 컴포넌트에서 접근할 수 있게 됨.

```javascript
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Context 파일을 임포트

function ThemeConsumerComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#FFF" }}>
      현재 테마는 {theme}입니다.
    </div>
  );
}
```

- **Provider**: Context 데이터를 구독하는 컴포넌트. Consumer 컴포넌트는 Context에서 제공하는 데이터를 사용할 수 있음. Consumer는 함수 as a child 또는 render props 패턴을 사용하여 Context의 데이터에 접근함. 이 함수는 Context의 현재 값을 인자로 받아 컴포넌트를 반환.

```javascript
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext"; // Context 파일을 임포트

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
```

### 필수 요소

- **Context 생성하기**: React.createContext 메소드를 사용하여 Context를 생성. 이 메소드는 Provider와 Consumer 컴포넌트를 포함하는 객체를 반환.

```javascript
const MyContext = React.createContext(defaultValue);
```

- **Context의 동적 업데이트**: Provider의 value prop을 변경함으로써, Context의 값을 동적으로 업데이트할 수 있음. 이렇게 하면 Provider 아래에 있는 모든 Consumer 컴포넌트가 새로운 값을 받아 리렌더링됨.

- **클래스 컴포넌트에서 Context 사용하기**: 클래스 컴포넌트에서는 static contextType을 사용하거나, <MyContext.Consumer>를 사용하여 Context 데이터에 접근할 수 있음. contextType을 사용하면 this.context를 통해 Context의 값을 직접 사용할 수 있음.

- **Context와 Hooks**: React Hooks를 사용하는 함수 컴포넌트에서는 useContext Hook을 사용하여 Context의 값을 더 쉽게 사용할 수 있음. useContext는 Context 객체를 인자로 받아 그 Context의 현재 값을 반환함.

```javascript
const value = useContext(MyContext);
```

## 16. 리덕스 라이브러리 이해하기

### Redux

- **개념**: Redux는 JavaScript 애플리케이션의 상태 관리를 위한 예측 가능한 상태 컨테이너. React와 함께 가장 많이 사용되지만, Vue, Angular 등 다른 JavaScript 프레임워크나 라이브러리와도 함께 사용될 수 있음. Redux는 애플리케이션의 전역 상태를 하나의 스토어(store)에서 관리하며, 이를 통해 애플리케이션의 동작을 일관되게 만들고, 코드의 복잡성을 관리하며, 개발자가 애플리케이션의 상태 변화를 쉽게 이해하고 예측할 수 있게 도움을 줌.

- **Redux의 핵심 원칙**

  > - **단일 진실의 원천(Single Source of Truth)**: 애플리케이션의 전체 상태는 하나의 스토어 내에 있는 하나의 객체 트리에 저장됨. 이는 애플리케이션의 상태를 쉽게 추적하고 디버깅하는 데 도움을 줌.
  > - **상태는 읽기 전용(State is Read-Only)**: 상태를 변경할 수 있는 유일한 방법은 액션(action)을 발생시키는 것. 액션은 상태 변화를 일으키는 정보를 가진 객체.
  > - **변화는 순수 함수로 작성되어야 한다(Changes are Made with Pure Functions)**: 액션에 의해 상태 트리가 어떻게 변화할지는 리듀서(reducers)라고 하는 순수 함수에 의해 결정됨. 리듀서는 이전 상태와 액션을 받아 다음 상태를 반환함.

- **Redux의 주요 구성 요소**
  > - **액션(Action)**: 상태 변화를 일으키는 이벤트를 설명하는 객체. 액션은 type 필드를 반드시 포함해야 하며, 이는 액션의 종류를 식별하는 데 사용됨.
  > - **액션 생성자(Action Creator)**: 액션 객체를 생성하는 함수. 이 함수를 통해 액션을 프로그래밍 방식으로 쉽게 생성할 수 있음.
  > - **리듀서(Reducer)**: 애플리케이션의 상태 변화를 구현하는 순수 함수. 이전 상태와 액션을 받아 새 상태를 반환함.
  > - **스토어(Store)**: 애플리케이션의 상태를 보관하는 객체. 스토어는 리듀서로부터 상태 업데이트를 받고, 애플리케이션에서 스토어의 현재 상태를 조회할 수 있도록 함.
  > - **디스패치(Dispatch)**: 액션을 스토어에 전달하는 과정. 애플리케이션에서 상태를 업데이트하려면, 해당 액션을 디스패치해야 함.
  > - **구독(Subscribe)**: 스토어의 상태 변화를 감지하고, 변화가 있을 때마다 콜백 함수를 실행하는 기능. 이를 통해 UI 컴포넌트를 상태 변화에 따라 업데이트할 수 있음.

## 17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

### 라이브러리

#### redux

- **개념**: Redux는 JavaScript 앱을 위한 예측 가능한 상태 컨테이너. 주로 React와 함께 사용되지만, Angular, Vue 등 다른 JavaScript 프레임워크나 라이브러리와도 함께 사용될 수 있음. Redux는 애플리케이션의 상태를 전역적으로 관리하기 위해 사용되며, 상태 관리 로직을 애플리케이션에서 분리하여 중앙에서 관리할 수 있게 해줌.

- **구조**
  ![redux flow](/images/redux_flow.gif)
  _출처: https://dev.to/oahehc/redux-data-flow-and-react-component-life-cycle-11n_

- **특징**
  > - **단일 스토어(Single source of truth)**: 애플리케이션의 상태는 하나의 객체 트리로 저장되며, 하나의 스토어 내에 존재함.
  > - **상태는 읽기 전용(State is read-only)**: 상태를 변경할 수 있는 유일한 방법은 액션을 디스패치하는 것임. 액션은 상태 변화를 일으키는 정보를 나타내는 객체.
  > - **리듀서로 변경(Reductions are made with pure functions)**: 액션에 의해 상태 트리가 어떻게 변할지를 결정하는 리듀서는 순수 함수로 작성됨.

#### react-redux

- **개념**: React-Redux는 React 애플리케이션에서 Redux를 효율적으로 사용할 수 있도록 해주는 공식 바인딩 라이브러리. Redux는 애플리케이션의 상태 관리를 위한 라이브러리로, 애플리케이션의 상태를 예측 가능한 방식으로 관리할 수 있게 해줌. React-Redux는 이러한 Redux의 기능을 React 컴포넌트와 쉽게 연결할 수 있게 해주는 인터페이스를 제공함.

- **주요 기능**

  > - **Provider 컴포넌트**: Provider는 React-Redux의 가장 기본적인 컴포넌트로, Redux 스토어를 애플리케이션의 모든 컴포넌트에 전달하기 위해 사용됨. 일반적으로 애플리케이션의 최상위 컴포넌트에서 사용되며, 모든 하위 컴포넌트가 Redux 스토어에 접근할 수 있게 해줌.
  > - **connect 함수**: connect는 React 컴포넌트를 Redux 스토어에 "연결(connect)"하기 위해 사용되는 고차 컴포넌트(Higher Order Component, HOC)를 생성하는 함수. connect 함수를 사용하여 컴포넌트의 props로 상태와 액션 생성 함수를 전달할 수 있음. 이를 통해 컴포넌트는 Redux 스토어의 상태를 직접적으로 조회하거나 액션을 디스패치할 수 있음.
  > - **Hooks**: React-Redux 7.1.0부터는 React의 Hooks API를 사용하여 Redux 스토어와의 상호작용을 더욱 쉽게 만들어주는 여러 훅을 도입함. 주요 훅으로는 useSelector와 useDispatch가 있으며, 이를 통해 클래스 컴포넌트에서 connect 함수를 사용하는 대신 함수 컴포넌트에서 직접적으로 스토어의 상태를 조회하거나 액션을 디스패치할 수 있음.

- **장점**

  > - **예측 가능한 상태 관리**: Redux의 핵심 원칙과 함께, React-Redux는 애플리케이션 상태의 일관성과 예측 가능성을 보장함.
  > - **성능 최적화**: React-Redux는 컴포넌트가 필요로 하는 데이터의 최소 집합에 대해서만 리렌더링을 트리거함. 이는 애플리케이션의 성능을 최적화하는 데 도움이 됨.
  > - **개발자 도구 지원**: Redux DevTools와의 통합을 통해 애플리케이션의 상태 변화를 시각적으로 모니터링하고 디버깅할 수 있음.
  > - **커뮤니티 및 생태계**: Redux와 React-Redux는 널리 사용되며 강력한 커뮤니티 지원과 풍부한 미들웨어/확장 프로그램 생태계를 가지고 있음.

- **훅(Hooks)**
  > - **useSelector**: useSelector 훅은 Redux 스토어의 상태를 조회할 수 있게 해줌. 이 훅은 선택자 함수를 인자로 받아, 해당 함수를 통해 Redux 스토어의 특정 부분의 상태를 반환함.

```javascript
import { useSelector } from "react-redux";

function MyComponent() {
  const value = useSelector((state) => state.someReducer.value);
  return <div>{value}</div>;
}
```

> - **useDispatch**: useDispatch 훅은 Redux 스토어의 dispatch 함수를 반환함. 이를 통해 액션을 디스패치할 수 있음.

```javascript
import { useDispatch } from "react-redux";

function MyComponent() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({ type: "SOME_ACTION" });
  };

  return <button onClick={onClick}>Dispatch action</button>;
}
```

> - **useStore**: useStore 훅은 Redux 스토어 자체를 반환함. 이는 일반적인 상황에서는 잘 사용되지 않으며, 보다 복잡한 상황에서 스토어의 메서드에 직접 접근할 필요가 있을 때 사용됨.

```javascript
import { useStore } from "react-redux";

function MyComponent() {
  const store = useStore();
  // store.getState() 등의 메서드 사용 가능
  return <div />;
}
```

#### @reduxjs/toolkit

- **개념**: @reduxjs/toolkit (Redux Toolkit)은 Redux를 사용하여 애플리케이션의 상태 관리 로직을 더 쉽게 작성할 수 있도록 도와주는 공식 도구. Redux Toolkit은 Redux 개발자들이 일반적으로 직면하는 몇 가지 문제를 해결하려고 설계되었으며, Redux를 사용할 때 필요한 보일러플레이트 코드를 줄여줌.

- **주요 기능**

  > - **Simplifies Redux Configuration**: configureStore() 함수는 Redux DevTools와 함께 미들웨어를 자동으로 설정.
  > - **Reduces Boilerplate Code**: createAction()과 createReducer() 같은 함수를 통해 액션과 리듀서를 더 간단하게 선언할 수 있음.
  > - **Immutable State Logic**: 내부적으로 Immer 라이브러리를 사용하여 불변성 유지의 복잡성을 줄여줌.
  > - **Slices**: createSlice() 함수는 액션 생성자와 리듀서를 한 번에 생성할 수 있게 해주며, 관련된 로직을 "슬라이스"라는 단일 객체로 그룹화.

#### redux-actions

- **개념**: redux-actions는 Redux 애플리케이션에서 액션과 리듀서를 더 쉽게 관리할 수 있게 해주는 라이브러리. 이 라이브러리는 액션 생성자와 리듀서를 작성할 때 필요한 보일러플레이트 코드를 줄여주는 유틸리티 함수를 제공.

- **주요 기능**

  > - **Simplify Action Creation**: createAction() 함수를 통해 액션 타입에 대한 액션 생성자 함수를 쉽게 만들 수 있음.
  > - **Reduce Boilerplate in Reducers**: handleActions() 함수는 여러 액션 타입에 대한 케이스를 한 곳에서 처리할 수 있도록 해주며, 리듀서의 코드 양을 줄여줌.
  > - **Flux Standard Action (FSA) Compliance**: 생성된 액션 객체가 FSA 규칙을 따르도록 보장합니다. 이는 액션 객체의 구조를 표준화하고, 애플리케이션 전반에서 액션을 더 일관되게 처리할 수 있게 함.

- **createAction()**

  > - **개념**: createAction 함수는 액션 타입 문자열을 인자로 받고, 액션 생성자 함수를 반환함. 이 액션 생성자 함수는 선택적으로 payload를 생성하기 위한 함수를 두 번째 인자로 받을 수 있음. 생성된 액션 객체는 Flux Standard Action(FSA) 형태를 따름. 즉, { type, payload, error, meta } 구조를 가짐.

  > - **매개변수**: createAction(type, [payloadCreator], [metaCreator])
  >   > - **type**: 액션의 타입을 나타내는 문자열입니다.
  >   > - **payloadCreator**: (선택사항) payload를 생성하는 함수입니다. 이 함수의 반환값이 액션의 payload 필드에 설정됩니다.
  >   > - **metaCreator**: (선택사항) 액션의 meta 필드를 생성하는 함수입니다.

  > - **예제 코드**

```javascript
import { createAction } from "redux-actions";

// 액션 타입 정의
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션 생성자 함수
const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT, (amount) => amount);

// 사용 예
console.log(increment()); // { type: 'INCREMENT' }
console.log(decrement(5)); // { type: 'DECREMENT', payload: 5 }
```

- **handleActions()**

  > - **개념**: handleActions 함수는 리듀서를 더 간결하게 작성할 수 있게 해주며, 첫 번째 인자로 액션 핸들러의 맵(객체)를, 두 번째 인자로 초기 상태를 받음. 각 키는 액션 타입이며, 값은 해당 액션을 처리할 함수임.

  > - **매개변수**: handleActions(reducerMap, defaultState)
  >   > - **reducerMap**: 각 액션 타입에 대응하는 리듀서 함수를 매핑한 객체.
  >   > - **defaultState**: 리듀서의 초기 상태.

  > - **예제 코드**

```javascript
import { handleActions } from "redux-actions";

const initialState = { count: 0 };

const counterReducer = handleActions(
  {
    [INCREMENT]: (state, action) => ({ count: state.count + 1 }),
    [DECREMENT]: (state, action) => ({ count: state.count - action.payload }),
  },
  initialState
);

// 사용 예
const state1 = counterReducer(initialState, increment());
console.log(state1); // { count: 1 }

const state2 = counterReducer(state1, decrement(2));
console.log(state2); // { count: -1 }
```

## 18. 리덕스 미들웨어를 통한 비동기 작업 관리

### 라이브러리

#### redux-logger

- **개념**: redux-logger는 Redux 액션 및 상태 변화를 콘솔에 기록(log)하는 미들웨어. 개발 과정에서 애플리케이션의 상태 변화를 추적하고 디버깅하기 위해 유용함.

- **예제 코드**

```javascript
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger));
```

#### redux-thunk

- **개념**: redux-thunk는 비동기 작업을 처리하기 위한 Redux 미들웨어. 액션 대신 함수를 디스패치할 수 있게 해줌으로써, 비동기 로직(예: API 호출)을 실행한 후 그 결과에 따라 액션을 디스패치할 수 있음.

- **예제 코드**

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// 스토어 생성
const store = createStore(rootReducer, applyMiddleware(thunk));

// Thunk 액션 생성자
const fetchUserData = () => (dispatch) => {
  fetch("/user/data")
    .then((response) => response.json())
    .then((data) => dispatch({ type: "SET_USER_DATA", payload: data }))
    .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));
};
```

#### redux-saga

- **개념**: redux-saga는 복잡한 비동기 작업 및 사이드 이펙트를 관리하기 위한 Redux 미들웨어. ES6의 Generator를 사용하여 비동기 흐름을 쉽게 읽고 쓸 수 있게 해줌.

- **예제 코드**

```javascript
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, call, put } from "redux-saga/effects";
import rootReducer from "./reducers";

function* fetchUserDataSaga() {
  try {
    const data = yield call(fetch, "/user/data");
    const jsonData = yield data.json();
    yield put({ type: "SET_USER_DATA", payload: jsonData });
  } catch (error) {
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* mySaga() {
  yield takeEvery("FETCH_USER_DATA", fetchUserDataSaga);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
```

## 19. 코드 스플리팅

## 20. 서버 사이드 렌더링

## 21. 백엔드 프로그래밍

## 22. mongoose를 이용한 mongoDB 연동 실습

## 23. JWT를 통한 회원 인증 시스템 구현하기
