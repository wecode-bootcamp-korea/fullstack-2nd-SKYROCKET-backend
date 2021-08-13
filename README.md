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

### 3. 카카오 소셜 로그인/회원가입 API

### 4. 일반 로그인 API

### 5. 일반 회원가입 API

### 6. Access Token 인가 Middleware

### 7. 상품 리스트 API

- Prisma 순정 쿼리문을 적용하여 구현
- 쿼리 스트링으로 받은 `offset`, `limit`, `category`, `status` 4개의 옵션을 고려하여 상품 리스트 정보의 필터링 구현
  - `req.query`의 값이 존재하지 않을 시, 모든 상품 출력
  - 인피니트 스크롤을 고려하여 `req.query.offset`, `req.query.limit`값을 이용하여 `take`, `skip` 설정
  - `req.query.category`값을 사용하여 카테고리별 상품 출력
  - `req.query.status`값을 사용하여 펀딩 상태별 상품 출력
  - 정규표현식을 이용하여, `req.query`로 받은 값이 정수가 아닐 경우 에러 출력
  - `req.query`로 받은 값이 유효하지 않거나 올바르지 않을 시 에러 핸들링
  -
- Prisma로 만들어진 결과 데이터 객체를 `map` 메소드를 이용하여 성형
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, `prisma create` 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect
  - 두가지 테스트 케이스 구현 (각 필터링은 optional이기 때문에, `0 : input이 존재하지 않을 때`는 구현하지 않음)
    - 1 : 성공 (원하는 input이 들어왔을 때)
    - -1 : 유효하지 않은 input

### 8. 상품 카테고리 API

- 상품의 카테고리 정보를 출력
- Prisma로 만들어진 결과 데이터 객체를 `reduce` 메소드를 이용하여 성형
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, prisma create 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect

### 9. 상품 상태 API

- 상품의 펀딩 상태 정보를 출력
- jest, SuperTest를 활용하여 유닛 테스트 실행
  - project.test.js 내부의 test 실행 전, prisma create 구문을 사용하여 테스트 DB에 데이터를 추가하는 코드 구현
  - test 종료 후, 테스트 DB 내의 데이터 삭제 및 테스트 DB 접속을 disconnect

### 10. 에러 Error Generator

- 에러 발생 시, 클라이언트로 에러 메시지와 상태 코드를 Throw시키는 에러 출력 로직을 모듈화하여 중복 코드를 줄임

<br />

## ☕️ Reference

- 이 프로젝트는 [tumblbug](https://tumblbug.com/) 사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
- 이 프로젝트에서 사용하고 있는 사진은 [unsplash](https://unsplash.com/)에서 공유받은 Free 이미지이므로, 해당 프로젝트 외부인이 사용할 수 없습니다.
