# react 정리

## react란??

### 2013년 facebook에서 만든 라이브러리

페이스북 에어비앤비 우버 넷플릭스 인스타그램등.. 모든곳에서 사용되는것 같음..
유저 인터페이스를 만들수 있는 라이브러리
MVC패턴중에 view영역

## 프래임워크와 라이브러리의 차이

프래임워크 : 이미 집이 만들어져있고 그거를 만들면서 가구를 재배치하고.. 색을 바꾸고..
-> 앵귤러, 뷰..
라이브러리 : 부품들을 가지고 집을 만들수 있음 부품이 라이브러리
-> 리액트

앵귤러는 배우기 어려움...
리액트는 단순.. 상대적으로 시간이 짧으니 이걸로 하자!!!

react native 로 모바일 react + electron 가지고 데스크탑 애플리케이션도 만들수 있음

## 리액트가 뭔지 좀더 알아보자

유저인터페이스를 만들수 있는 라이브러리다
컴포넌트로 이루어진 UI 라이브러리

컴포넌트 : 한가지를 수행하는 단위, 독립적이고, 재사용이가능하고 고립적
취상위컴포넌트 : root 여기서 여러개의 컴포넌트가 생기고..
각각의 컴포넌트를 조립하여 만들어 놓은것을 react

document object medel : DOM Tree

html 테그들이 dom tree 로 변환이 되어 브라우저에 표기됨

리액트 컴포넌트도 트리형태로 되어있음

재사용이 가능한 컴포넌트들로 웹 어플리케이션을 만들수 있음

웹어플리케이션을 구상할때 박스단위 컴포넌트 단위로 하는게 중요하다.

박스단위로 나누는것은 중요하지만 너무 작은 단위로 나누면 좋지 않다.

컴포넌트는 클래스형대로 존재하며
state , render() 두개로 구분된다.

state : 데이터 , render() jsx html 랑 비슷 그림그리는 부분
데이터가 변경되면 render함수가 호출됨
state 가 변경이 되면 render 함수가 호출이 되고, render 함수에 하위 컴포넌트가 있다면 하위 컴포넌트의 render 함수도 다시호출

근데 render 함수가 계속 호출되어 다시 그려진다면 성능이 안좋음...ㅠ
virtual Dom tree 에 변경이 생기면 previous tree 와 비교하여 실제로 변경이 되는것만 dom tree에 반영
데이터 변경이 되지 않으면 dom tree 에 변경없음
그리고 변경될것을 한번에 모아서 변경함

리액트는 변경이 될때마다 어플리케이션 전체를 업데이트 한다!!! 중요하다!!

리엑스 주소 : https://reactjs.org/docs/getting-started.html
create react app : https://create-react-app.dev/docs/getting-started

## 툴 설치

node.js 설치하자...
git 설치하자...
iterm 설치하자...
yarn 설치하자...
brew install yarn

yarn 으로 react app 설치하자...

.gittignore 는 버전관리 되면 안되는것들
.package.json library, version 관리
readme 는 프골제그 설명!!
yarn.lock 수정할필요없다

node_modules 폴더 이건 라이브러리 모아논부분
public폴더 배포할때 외부적으로 보여주는부분
src 폴더

index.js 최상위인거 같다...

yarn eject 하지말자... 박스에 담겨져있는데 푸는...각종 설정 자동으로 되어있는데.. 세부적으로 수정할때 사용

## react 관련 툴!!!

웹펙 : 코드, 이미지 이런것들을 번들링해준다!!
소스코드, 긴변수나 이런것들 이름 변경해서 가볍고 보안에 좋게 변경해준다

ESlint : 코드 체크해준다!!

Jest : 유니테스트를 할수있께 도와주는 프레임워크!!

리액트 디벨로퍼 툴

익스텐션 설치할거
reactjs code snippets
auto import

## react 전반적인 개념정리

class vs function 둘다 사용해서 할수 있따

function 에는 state 가 없었으나 react hook 으로 state 와 lifecycle methods 사용할수 있다.

클래스가 어려워서 ,., 그리도 this 붙여서 써야함... 바인딩이슈도 있음...
라이프사이클 매소드가 중복되어 사용해야하는게 있는데 hook에서는 줄여서 할수 있음

퓨어컴포넌트가 있는데 함수형에는 MEMO가 있따 ...
항상 성능을 고려해서 작성하즈아~!!!

## 템플릿 프로젝트 만들기

정적인애들 : public 폴더

- index.html
- favicon.ico
  동적인애들 : src 폴더
- app.css
- app.js
- index.css
- index.js

위에거 빼고 다 지우자....

그리고 src 안에 componets 폴더 만들고 파일명 대문자 -> 소문자로 변경
그리고 app.js -> app.jsx 변경하자 리액트 컴포넌트인지 알수있께...

# 프로젝트 만들어 보자

react-dom 을 사용해서 기존 html, js , jsx 와 같이 연결하여 사용할수 있께 해주는거 같다.

1. index.html

- root를 사용해서 js연결을 해준다

2. index.js
   ReactDom.render(
   <React.StrictMode>
   <app />
   <React.StrictMode>,
   document.getElemetById('root');
   );

   ReactDom.render 이걸로 그리면서 document.getElemetById('root') 이거랑 app 이랑 연결한다!

3. app.jsx
   function App() {
   return <h1>Hello :)</h1>
   }

연결이 되니까 이게 보여지게 된다.

<div>
  <h1>Hello :)</h1>
</div>
이렇게 연결된다.

4. props 는 내 state가 아니라 부모로 부터 넘어온 프로퍼티

## jsx 가 뭔지 정리해보자!!

function App() {
return <h1 className="title" onClick="">Hello </h1>;
}

- 기존 자바스크립트에서 class -> className onclick -> onClick 으로 사용
- 나중에 바벨이 html , js 로 만든다.

function App() {
const name = "han k s"
return <h1>Hello {} </h1>;
}

- 괄호사용하면 변수 사용할수 있따.

function App() {
const name = "han k s"
return (
<>

<h1>Hello {} </h1>
<h1>Hello {} </h1>
</>
);
}

- 형제 노드는 최상위에 있을수 없으므로 최상위괄호로 묵어줘야한다.

function App() {
const name = "han k s"
return (
<>

<h1>Hello {} </h1>
{name && <h1>hello {name}</h1>}
</h1>
);
}

- 중간에 자바스크립트 코드도 작성이 가능하다.

## 실제로 컴포넌트 만들어보기

클래스는 항상 대문자로 변경하고 진행하기

app.jsx 에서 habit.jsx 호출할려고 한다.
아래처럼 호출하면 된다.
app.jsx
function App() {
  return <habit />;
}

class Habit extends Component{
  render() {
    return 
    <>
      <span className="habit-name">Redading</span>
      <span className="habit-name">Redading</span>
    </>
  }
  
}

팁) 폰트오쏨 명령어:

yarn add @fortawesome/fontawesome-free

index.js에 추가해야 하는 코드:

import '@fortawesome/fontawesome-free/js/all.js';

yarn에서 fontawesome free version down 가능함
ctrl + p 누르면 간단하게 파일 이동 가능


## state 이해하기

state는 오브젝트이다!

this.setState({ count: this.stat.count + 1});

이렇게 변경해줘야 render 함수가 호출이 된다





