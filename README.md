# Self-Paced React

## 🎯 이 학습 자료의 목표 경험
React를 사용해 자주 사용되는 UI들을 아주 기초적인 수준으로 구현해봅니다.    
이 과정에서 React의 설계 원칙을 고려하며 개발하는 연습의 첫 단계를 경험해봅니다.
- JavaScript 기반의 React 프로젝트를 직접 실행할 수 있다. 
- React에서 컴포넌트를 선언하고 사용할 수 있다. 
- 아래와 같은 UI를 가장 기초적인 수준에서 구현할 수 있다. (유효성 검사, 그 외 UX 대응 등 모두 X)
  - 목록 UI
  - 모달 UI
  - 폼 UI 

### ❌ 다루지 않는 것
- TypeScript
- RSC(React Server Component)
- 테스트 도구
  - Storybook
  - RTL(React Testing Library)
- 라우팅, 상태 관리 등을 위한 서드파티 라이브러리
- React의 깊이있는 동작 원리
- React 컴포넌트 구현 패턴
- Context API
- Ref
- useState/useEffect 이외의 hook, custom hook

### ✅ 다루는 것
- 'React의 설계 원칙에 맞는' 코드를 작성하기 위한 학습에서 참고할 만한 자료
- JSX
- useState
- useEffect 

## 🧙‍♀️ 진행 가이드
이 저장소의 미션들은 '잘' 구현하기나 '깊이 이해하기'가 목표가 아닙니다.      
'React를 사용해본 적 없는 상태'에서 '사용해본 상태'가 되는 것이 목표이고, 그걸 위해 최소한으로 필요한 만큼만 공식 문서를 발췌해서 학습 자료로 활용해보았다면 충분합니다.                   

React를 활용하는 코드를 직접 작성해보면서 대략적인 감을 잡을 수 있다면 충분하니,      
각 단계의 권장 학습 시간을 참고해 전체 사이클을 빠른 시간 내에 완료하는 것을 목표로 삼아 보세요.       
만약 권장 시간 내에 구현해내기가 어렵다면, 예시 브랜치의 코드를 참고해서 동작시켜보아도 됩니다.     
React를 처음 접하는 상태에서 모든 단계를 구현해서 동작시켜보는 데까지 `약 4시간(최대 6시간)`을 권장 학습 시간으로 제시하고 있습니다.  

## 🦮 목차
### [00. Introduction](./00-introduction/README.md)
### [01. 컴포넌트 선언하고 사용하기: Component 기본 구조와 JSX](./01-first-component/README.md)
### [02. 목록 UI 구현하기: Props와 State](./02-rendering-lists/README.md)
### [03. 모달 UI 구현하기: side-effect(feat. event handler)](./03-modal/README.md)
### [04. 폼 UI 구현하기: controlled vs uncontrolled](./04-form/README.md) 
### [05. API 연동하기: side-effect(feat. effects)](./05-effects/README.md)
### [06. References](./06-references/README.md)
