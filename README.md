
# 2주차 기업과제
>  원티드에서 진행하는 2주차 [라이크어로컬](https://likealocal.co.kr) 기업과제 입니다.

## [🔗 배포 URL](https://pre-onboarding-9th-2-9.vercel.app)


## 🥸 팀원 소개 

<table>
<tbody>
<tr>
<td  align="center">
<a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/>
<br  /><sub><b>민현홍</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/Hwang-Junsu"><img  src="https://avatars.githubusercontent.com/u/80745897?v=4(https://avatars.githubusercontent.com/u/80745897?v=4)"  width="100px;"  alt=""/><br  /><sub><b>황준수</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/eunrain"><img  src="https://avatars.githubusercontent.com/u/113877276?v=4(https://avatars.githubusercontent.com/u/113877276?v=4)"  width="100px;"  alt=""/><br  /><sub><b>고은비</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/yeon-kk"><img  src="https://avatars.githubusercontent.com/u/86847564?v=4(https://avatars.githubusercontent.com/u/86847564?v=4)"  width="100px;"  alt=""/><br  /><sub><b>곽연경</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/whl5105"><img  src="https://avatars.githubusercontent.com/u/73993670?v=4(https://avatars.githubusercontent.com/u/73993670?v=4)"  width="100px;"  alt=""/><br  /><sub><b>최수인</b></sub></a><br  /></td>

<td  align="center"><a  href="https://github.com/minhyeonhong"><img  src="https://avatars.githubusercontent.com/u/90454621?v=4(https://avatars.githubusercontent.com/u/90454621?v=4)"  width="100px;"  alt=""/><br  /><sub><b>김민영</b></sub></a><br  /></td>

</tbody>
</table>

<br/>

## ⚙️ 기술 스택 
```typeScript```
```CRA```
```emotion```
```axios```
```react-router-dom```
```React-Query```
```chakra-ui```

<br/>

## 📽️ 데모 영상 

<br/>

## ✨ 기능

<br/>

## ✅  요구사항

#### Assignment 1
> 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
 -  main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
  -   리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
    -   예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터 를 저장해주세요.
    -   여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
 -   모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`

 #### Assignment 2
>.  여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.

 -    예시) 0 ~ 1000, 1500 ~ 3000
    -   [예시) 서울, 부산] (공간)
    -   개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요

 #### Assignment 3
> 여행 상품 장바구니 (/reservations)를 만들어주세요.
> 
  -   저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
  -   여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
  -   장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요




## 📖 기능 소개  

###  메인페이지 
-
-
-


###  상품 필터링 
-
-
-


###  장바구니 
- 
- 
<br/>



## 🗂️ 폴더구조
```bash
ㄴ 📁 apis
   ㄴ 📄 instance.js
   ㄴ 📄 todo.js  
   ㄴ 📄 user.js 
ㄴ 📁 commons
   ㄴ 📄 validation.js
ㄴ 📁 components
   ㄴ 📁 sign
      ㄴ 📄 AuthForm.jsx  
   ㄴ 📁 todo
      ㄴ 📄 Todo.jsx
      ㄴ 📄 TodoCreate.jsx   
      ㄴ 📄 TodoList.jsx   
ㄴ 📁 pages
   ㄴ 📄 SigninPage.jsx
   ㄴ 📄 SignupPage.jsx
   ㄴ 📄 TodoPage.jsx
ㄴ 📁 reducers
   ㄴ 📄 formReducer.js
   ㄴ 📄 todoReducer.js
ㄴ 📁 shared 
   ㄴ 📄 Router.jsx
```

<br/>

## 🕖 타임라인
| 기간 | 진행 사항 |
|------|------|
|2023/03/07| 사용 기술 스택 및 라이브러리 선정,git convention  및 폴더 구조 작성 |
|2023/03/08| 기능구현 |
|2023/03/09| 코드 리뷰 및 best practice 선정  |
|2023/03/10| 코드 리팩토링 |

<br/>

## 🧑🏻‍🏫 협업 방법
>빠른 소통과 업무 협업을 위해 `슬랙` 채널을 사용합니다.
1. 페이지별로 팀원 개개인의 `코드 리뷰`를 실시합니다.
3. 토론을 통해 `best practice를 선정` 후 각자가 추가 리팩토링을 실시합니다.
4. 화면 공유를 통해 `페어 프로그래밍` 하며 

<br/>

## 📖 Commit Message Prefix

- `Feat`: 새로운 기능 추가
- `Fix`: 버그 수정
- `Docs`: 문서 수정, 파일 추가 및 삭제, 파일명 변경
- `Style`: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락 등)
- `Refactor`: 코드 리팩토링
- `Test`: 테스트 코드, 리펙토링 테스트 코드 추가
- `Chore`: 빌드 업무 수정, 패키지 매니저 수정(.gitignore 수정 등)
- `Init`: 초기셋팅 (esLint 적용 등)

- <br/>



## 📖 Git Flow

-   **master(main)** : 배포하는 브랜치
-   **develop** : 개발 브랜치 
-   **feature** : 단위 기능을 개발하는 브랜치 
-   **hotfix** : master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치 입니다.  
- 
예시)
**feature/main-name**
**feature/reservations**-**name**
**hotfix/issue-issueName**

<br/>

## 📖 Git Convention  


- 안쓰는 코드들(콘솔, 주석)은 쌓아두지 말고 지워주세요!
- Pull → Commit → Push 순서로 작업해주세요!
- Push 전 코드를 실행하여 에러를 먼저 확인한 후, PR해요!
- PR을 거쳐 모든 팀원들이 승인 및 코드리뷰 후, merge 합니다. conflict 해결은 모든 팀원이 함께 참여해요!
- PR승인 후 squash and merge 를 하여 커밋을 합쳐주세요 > merge 된 branch는 꼭 삭제 해주세요! 
   (*develop branch는 개발 branch입니다. 삭제하지 말아주세요)

<br/>

## ⚙️ 프로젝트의 실행 방법

> 💡주의 : 해당 프로젝트의 데이터는 mock-data 입니다. 

**Install**
```bash
npm install
or
yarn install
```

**Start**
```bash
npm start
or
yarn start
```


