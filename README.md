# 2주차 기업과제

> 원티드에서 진행하는 2주차 [라이크어로컬](https://likealocal.co.kr) 기업과제 입니다.

<br/>

## [🔗 배포 URL](https://pre-onboarding-9th-2-9.vercel.app)

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

<br/>

## ✅ 요구사항

#### Assignment 1

> 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요

- main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
- 리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
- 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터 를 저장해주세요.
- 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
- 모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`

#### Assignment 2

> 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.

- 예시) 0 ~ 1000, 1500 ~ 3000
- [예시) 서울, 부산] (공간)
- 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요

#### Assignment 3

> 여행 상품 장바구니 (/reservations)를 만들어주세요.

- 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
- 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
- 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요

<br />

## 📽️ 데모 영상

![gifgif](https://user-images.githubusercontent.com/110284486/224332258-ab4196fa-b7bd-40a5-b99b-85e2272f858a.gif)

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/90454621/224333336-9a4ea0de-5066-4588-80bd-f1d22606553d.gif)

## 📚 기능 설명

**공통**

- chakra-ui 를 Spinner,Toast 사용하여 공통 UI 통일

**여행 상품 리스트 노출 및 필터링**

- react-query의 staleTime과 refetchOnWindowFocus 옵션을 사용하여 불필요한 데이터 요청을 방지
- useQuery의 select 메서드를 이용하여, 필터링에 필요한 데이터 가공

**여행상품 예약처리 및 장바구니 예약 리스트 노출**

- 메인페이지 : 예약버튼 클릭시 최대 구매수량에 따른 예약 처리 .
- 장바구니 : localStorag를 사용하여 사용자가 사이트 재 접속시 예약내역 유지
- 장바구니 : 예약 내역 삭제 및 최소 수량 이하로 선택 시 confirm 재확인을 통해 UX 편의성 고려

<br/>

## ⚙️ 기술 스택

`typeScript`
`CRA`
`emotion`
`axios`
`react-router-dom`
`React-Query`
`chakra-ui`

<br/>

## 🗂️ 폴더구조

```bash
ㄴ 📁 apis
   ㄴ 📄 instance.ts
ㄴ 📁 commons
   ㄴ 📄 utils.ts
ㄴ 📁 components
   ㄴ 📁 common
      ㄴ 📄 CheckBoxes.tsx
      ㄴ 📄 SkeletonImage.tsx
      ㄴ 📄 Slider.tsx
      ㄴ 📄 Toast.tsx
   ㄴ 📁 layout
      ㄴ 📄 Footer.tsx
      ㄴ 📄 Header.tsx
      ㄴ 📄 Layout.tsx
   ㄴ 📁 main
      ㄴ 📄 Product.tsx
      ㄴ 📄 ProductsFilter.tsx
      ㄴ 📄 ProductsList.tsx
      ㄴ 📄 ProductsModal.tsx
   ㄴ 📁 reservation
      ㄴ 📄 Reservation.tsx
      ㄴ 📄 ReservationsList.tsx
ㄴ 📁 pages
   ㄴ 📄 Main.tsx
   ㄴ 📄 Reservations.tsx
ㄴ 📁 shared
   ㄴ 📄 Router.tsx
ㄴ 📁 types
   ㄴ 📄 types.d.ts
```

<br/>

## 🕖 타임라인

**_2023.03.07 ~ 2023.03.10 (4일)_**
| 기간 | 진행 사항 |
|------|------|
|2023/03/07| 사용 기술 스택 및 라이브러리 선정,git convention 및 폴더 구조 작성 |
|2023/03/08| 기능구현 |
|2023/03/09| 코드 리뷰 및 best practice 선정 |
|2023/03/10| 코드 리팩토링 |

<br/>

## 🧑🏻‍🏫 협업 방법

1. 빠른 소통과 업무 협업을 위해 `슬랙` 채널을 사용합니다.
2. 이슈별로 기능 구현 후 PR을 생성합니다.
3. `코드 리뷰`를 통해 `Best practice` 선정 후 develop에 merge합니다.
4. 추가 리팩토링 실시 후 배포합니다.

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

<br/>

## 📖 Git Flow

- **master(main)** : 배포하는 브랜치
- **develop** : 개발 브랜치
- **feature** : 단위 기능을 개발하는 브랜치
- **hotfix** : master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치 입니다.

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
  (\*develop branch는 개발 branch입니다. 삭제하지 말아주세요)

<br/>

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
