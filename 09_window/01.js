/*
웹 브라우저에서 동작하는 자바스크립트(클라이언트 측 자바스크립트)의 전체 동작을 정리.

1. 웹 브라우저에서의 자바 스크립트 실행 순서 (랜더링 과정)

웹 브라우저에서 HTML 문서를 분석하고 표시하는 프로그램을 가르켜 렌더링 엔진이라고 함.
렌더링 엔진은 다음과 같은 처리 과정을 거쳐 HTML 문서의 구문을 분석하고
DOM 트리를 구축한 후에 HTML 안에 지정된 자바스크립트 코드를 실행.

1) 웹 브라우저로 웹 페이지를 열면 가장 먼저 Window 객체가 생성.
Window 객체는 웹 페이지의 전역 객체로 웹 페이지와 탭마다 생성.

2) Document 객체가 Window 객체의 프로퍼티로 생성되며 웹 페이지를 해석해서 DOM 트리의 구축을 시도.
Document 객체는 readyState 프로퍼티를 가지고 있으며, 이 프로퍼티에는 HTML 문서의 해석 상태를 뜻하는 문자열이 저장.
readyState 프로퍼티의 초깃값은 "loading"이라는 문자열.

3) HTML 문서는 HTML 구문의 작성 순서에 따라 분석하며 Document 객체 요소와 텍스트 노드를 추가해 감.

4) HTML 문서안에 script 요소가 있으면 script 요소 안의 코드 또는 외부 파일에 저장된 코드의 구문을 분석.
그 결과 오류가 발생하지 않으면 그 시점에 코드를 실행.
이 때 script 요소는 '동기적'으로 실행. 즉 script 요소의 구문을 분석해서 실행할 때는 HTML 문서의 구문 분석이 일시적으로 막히고,
자바스크립트 코드의 실행을 완료한 후에는 일시적으로 막혀 있었던 HTML 문서의 구문 분석을 재개.

5) HTML 문서의 모든 내용을 읽은 후에 DOM 트리 구축을 완료하면 document.readyState 프로퍼티 값이 'interactive' 로 바뀜.

6) 웹 브라우저는 Document 객체에 DOM 트리 완료를 알리기 위해 DOMContentLoaded 이벤트를 발생.

7) img 등이 요소가 이미지 파일 등의 외부 리소스를 읽어 들여야 한다면 이 시점에서 읽어 들임.

8) 모든 리소스를 읽어 들인 후에는 Document.readyState 프로퍼티 값이 'complete' 로 바뀜.
마지막으로 웹 브라우저는 Window 객체를 상태로 load 이벤트를 발생.

9) 이 시점부터 다양한 이벤트(사용자 정의 이벤트, 네트워크 이벤트)를 수신하며, 이벤트가 발생하면 이벤트 처리기가 비동기로 호출됨.

* 렌더링 과정에서 발생하는 이벤트
Document 의 DOMContentLoaded -> Window 의 Load
 */

/*
* async와 defer 속성
async 와 defer 속성은 script 요소의 논리 속성으로 HTML5부터 추가된 속성.
둘 다 src 속성을 가진 script 요소에는 적용할 수 있지만 인라인 스크립트에는 사용할 수 없음.
이들 속성을 사용하면 자바스크립트 코드를 실행할 때 HTML 구문 분석을 막지 않음.
현재의 주요 웹브라우저에서는 두 개의 속성을 모두 지원.

<script async src="../script/common.js>
<script defer src="../script/common.js>

script 요소에
1. async 속성을 설정하면 script 요소의 코드가 비동기적으로 실행.
즉 HTML 문서의 구문 분석 처리를 막지 않으며 script 요소의 코드를 최대한 빨리 실행.
여러 개의 script 요소에 async 속성을 설정하면 다 읽어 들인 코드부터 비동기적으로 실행하므로 실행 순서가 보장되지 않음.
읽어 들이는 순서에 의존하는 script 요소에는 async 속성을 설정하지 말아야 함.

2. defer 속성을 설정한 script 요소는 DOM 트리 구축이 끝난 후에 실행.
DOM 구축이 끝난 후에 실행되기 때문에 자바스크립트 코드로 요소 객체에 이벤트 처리기을 등록하는 등의 초기화 작업을 할 수 있음.
따라서 defer 속성은 DOMContentLoaded 이벤트의 대안으로 활용할 수 있음.

async 또는 defer 속성이 설정된 script 요소에 document.write 메서드가 있으면 async와 defer 속성이 무시되어 동기적으로 실행됨.
async 와 defer 속성을 지원하지 않는 웹 브라우저에서도 script 요소를 동기적으로 실행.
 */