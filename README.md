# SKYROCKET Back-end 소개

### 세상의 모든 펀딩이 SKYROCKET하는 날까지!

크라우드 펀딩 사이트 <a href="https://tumblbug.com/" target="_blank">tumblbug</a>을 모티브로 한 펀딩 사이트 개발 팀 프로젝트입니다.

서비스명인 `SKYROCKET`은 `급등하다`라는 뜻을 가진 동사로,<br />
`SKYROCKET` 서비스와 팀원 개개인이 끊임없이 발전하기를 원하는 마음💖을 담았습니다.

<br />

## 🎬 프로젝트 DEMO 영상

[SKYROCKET Demo 영상](https://vimeo.com/585886529)

<br />

## 💁‍♀️💁‍♂️ 팀원 구성

- [감하영 (FE, BE)](https://github.com/iamhayoung)
- [신수호 (FE)](https://github.com/realsuhoman)
- [박미정 (BE)](https://github.com/undefinedP)

<br />

## 📆 프로젝트 기간

2021.07.26 ~ 2021.8.10 (16일간)

<br />

## 🔑 Skills

- **FrontEnd**

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/React_Hooks-61DAFB?style=flat-square&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=ReactRouter&logoColor=black"/></a>
<img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=StyledComponents&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

- **BackEnd**

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Bcrypt-003A70?style=flat-square&logo=LetsEncrypt&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JSONWebTokens-000000?style=flat-square&logo=JSONWebTokens&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Jest-c21325?style=flat-square&logo=Jest&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white"/></a>

- **Common**

<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=Prettier&logoColor=white"/></a>

- **Tools**

<img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/></a>

<br />

## Front-end Repository

[SKYROCKET Front-end Repository Link](https://github.com/wecode-bootcamp-korea/fullstack1-2nd-SKYROCKET-frontend)

<br />

## Modeling

![](https://user-images.githubusercontent.com/50080535/129067879-a51d65b3-e5a6-412f-b242-3508713d9f9e.png)

<br />

## API Document

[SKYROCKET API Document](https://documenter.getpostman.com/view/15812613/Tzsfo5jL)

<br />

## Back-end 구현 기능 상세

### 1. 공통 구현 사항

- Layered Pattern에 입각하여 코드의 기능, 역할 별로 Route, Controller, Service, Model로 코드를 설계

### 2. Modeling / Database

- Aquery Tool을 활용하여 ERD 작성
- Prisma를 사용하여 mySQL DB 모델 생성
- DB에 데이터를 일괄 삽입하기 위해 csv 파일, dataUploader.js 활용

### 3. 카카오 소셜 로그인 API

- Prisma ORM을 적용하여 구현
- 카카오 API를 사용해 로그인 및 회원가입을 진행
- 클라이언트(Front-end)로부터 받은 access token으로 카카오 API를 호출하여 유저 정보를 요청함
- 카카오로부터 받아온 유저 정보가 DB에 저장된 유저이면 바로 로그인을 진행함과 동시에 토큰을 클라이언트로 전달
- DB에 저장되지 않은 유저는 회원가입을 진행한 후에 백엔드 토큰을 클라이언트로 전달

### 4. 일반 로그인 API

- Prisma ORM을 적용하여 구현
- JSON WEB TOKEN을 활용해 유저 로그인 시에 토큰을 발행
- Request를 보낸 이메일과 비밀번호를 DB에 저장된 이메일과 암호화된 비밀번호와 비교하여 일치할 시에 토큰을 발행. 이메일과 비밀번호가 하나라도 일치하지 않을 시에 에러를 출력
- 필수로 입력해야하는 request의 항목이 공란일 때 `KEY ERROR: `을 출력
- jest, SuperTest를 활용하여 유닛테스트 실행
  - test를 실행하기 이전에 `prisma create`구문을 사용해 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect
  - 세가지 테스트 케이스 구현
    - 1 : 성공(성공적으로 로그인이 되고, 토큰이 발급됨)
    - 0 : Input이 존재하지 않을 때
    - -1 : 실패(request를 보낸 이메일과 비밀번호가 DB에 존재하는 정보와 일치하지 않음)

### 5. 일반 회원가입 API

- Prisma ORM을 적용하여 구현
- Request의 항목에 입력을 했을 때 `create`메서드를 사용해 이메일, 솔팅 및 해싱이 된 비밀번호, 닉네임 등의 정보를 DB에 저장
- 성공했을 시, `SUCCESS`메시지와 유저의 이메일을 출력
- 회원가입을 진행할 때, DB에 이미 존재하는 유저 이메일로 가입을 시도했을 시, 에러를 출력
- 필수로 입력해야하는 request의 항목이 공란일 때 `KEY ERROR: `을 출력
- jest, SuperTest를 활용하여 유닛테스트 실행
  - test 종료 후, 테스트 DB 내의 데이터 삭제
  - 세가지 테스트 케이스 구현
    - 1 : 성공(입력한 정보가 DB에 저장이 되고, response가 성공적으로 이루어짐)
    - 0 : Input이 존재하지 않을 때
    - -1 : 실패(이미 존재하는 이메일을 request 보냄)

### 6. Access Token 인가 Middleware

- Token을 복호화하여 얻은 유저 정보로 해당 유저가 DB에 존재하는 유저인지 조회
- 존재하는 유저라면 request로 복호화된 유저 정보를 전달, 존재하지 않는 유저라면 `INVALID_USER` 출력
- 유효하지 않거나 만료된 토큰일 경우 `INVALID_TOKEN`출력

### 7. 상품 상세정보 API

- Prisma ORM을 적용하여 구현
- Prisma로 뽑아낸 결과 데이터를 `map` 메소드를 이용하여 성형
- Path Parameters를 이용해 RESTful하게 구현
  - 상품의 id를 `req.params`로 받아와서 특정 상품만 출력하도록 구현
  - DB에 존재하지 않는 상품의 id가 유효하지 않을 시 `INVALID_PROJECT`출력

### 8. 상품 리스트 API

- Prisma 순정 쿼리문을 적용하여 구현
- 쿼리 스트링으로 받은 `offset`, `limit`, `category`, `status` 4개의 옵션을 고려하여 상품 리스트 정보의 필터링 구현
  - `req.query`의 값이 존재하지 않을 시, 모든 상품 출력
  - 인피니트 스크롤을 고려하여 `req.query.offset`, `req.query.limit`값을 이용하여 `take`, `skip` 설정
  - `req.query.category`값을 사용하여 카테고리별 상품 출력
  - `req.query.status`값을 사용하여 펀딩 상태별 상품 출력
  - 정규표현식을 이용하여, `req.query`로 받은 값이 정수가 아닐 경우 에러 출력
  - `req.query`로 받은 값이 유효하지 않거나 올바르지 않을 시 에러 핸들링
- Prisma로 만들어진 결과 데이터 객체를 `map` 메소드를 이용하여 성형
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, `prisma create` 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect
  - 두가지 테스트 케이스 구현 (각 필터링은 optional이기 때문에, `0 : input이 존재하지 않을 때`는 구현하지 않음)
    - 1 : 성공 (원하는 input이 들어왔을 때)
    - -1 : 유효하지 않은 input

### 9. 상품 카테고리 API

- 상품의 카테고리 정보를 출력
- Prisma로 만들어진 결과 데이터 객체를 `reduce` 메소드를 이용하여 성형
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, prisma create 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect

### 10. 상품 상태 API

- 상품의 펀딩 상태 정보를 출력
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, prisma create 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect

### 11. 에러 Error Generator

- 에러 발생 시, 클라이언트로 에러 메시지와 상태 코드를 Throw시키는 에러 출력 로직을 모듈화하여 중복 코드를 줄임

<br />

## ☕️ Reference

- 이 프로젝트는 [tumblbug](https://tumblbug.com/) 사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
- 이 프로젝트에서 사용하고 있는 사진은 [unsplash](https://unsplash.com/)에서 공유받은 Free 이미지이므로, 해당 프로젝트 외부인이 사용할 수 없습니다.
