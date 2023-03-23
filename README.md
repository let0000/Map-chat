# Map-chat

## 🌟 서비스 소개
<p align='center'>
<img width='400px' src='https://user-images.githubusercontent.com/21376061/227160347-99b0d147-8c54-4bc5-b5de-2ae51e99ef48.png'>
</p>

   현재 위치의 주소와 날씨를 가져와서 가져온 정보들로 GPT 에게 정보를 물어보는 웹 어플리케이션

배포 : [https://web-map-chat-nx562olfjdzyc7.sel3.cloudtype.app](https://web-map-chat-nx562olfjdzyc7.sel3.cloudtype.app)

서버 : [https://github.com/let0000/mapchat_server](https://github.com/let0000/mapchat_server)

<p align='center'>
    <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB?logo=React"/>
   <img src="https://img.shields.io/badge/react responsive-v9.0.2-61DAFB?logo=React"/>
   <img src="https://img.shields.io/badge/@reduxjs/toolkit-^1.9.3-764ABC?logo=Redux"/>
   <img src="https://img.shields.io/badge/react redux-^8.0.5-764ABC?logo=Redux"/>
    <img src="https://img.shields.io/badge/@mui/material-^5.11.13-007fff?logo=mui"/>
   <img src="https://img.shields.io/badge/@mui/icons material-^5.11.11-007fff?logo=mui"/>
   <img src="https://img.shields.io/badge/axios-^1.3.4-5A29E4?logo=Axios"/>
   <img src="https://img.shields.io/badge/react kakao maps sdk-^1.1.6-ffcd00?logo=Kakao"/>
</p>
    
## 🌟 주요 기능

### 👌 위치 정보

<p align='center'>
  <img src="https://user-images.githubusercontent.com/21376061/227169377-9636f4a5-14a6-459a-8f74-2513156860a5.png"/>
</p>

* geolocation 을 이용하여 현재 위치의 경도 , 위도 값을 가져올 수 있습니다.
* axios 를 이용하여 경도와 위도 값으로 카카오 API와 통신하여 현재의 주소 값을 얻어올 수 있습니다. 

<p align='center'>
  <img src="https://user-images.githubusercontent.com/21376061/227169213-a8f3cb94-2e04-4d1d-b2ae-5d0792539d6e.png"/>
</p>

* 새로고침 버튼을 통해 현재 위치와 주소를 새로 받아 올 수 있습니다.

<p align='center'>
  <img src="https://user-images.githubusercontent.com/21376061/227169304-33dc8b88-c581-4397-b795-6bd40b414197.png"/>
</p>
<p align='center'>
 <img src="https://user-images.githubusercontent.com/21376061/227169645-50fdf4c0-9975-45c5-8a5c-15a40b332aab.png"/>
</p>

* 위치검색 버튼에 마우스를 올려 주변 원하는 장소를 검색 할 수 있습니다. 

### 👌 위치 검색

<p align='center'>
  <img src="https://i.imgur.com/cayJ1tS.png"/>
</p>

2. 해당 인증 정보로 앱 AWS 리소스 접근

<p align='center'>
  <img width='400px' src="https://i.imgur.com/2fauXLL.png"/>
</p>

### 👌 메인 페이지 

<p align='center'>
  <img src="https://i.imgur.com/OfcRKIR.png"/>
</p>

#### 🧐 날짜 선택

<p align='center'>
  <img src="https://i.imgur.com/ZwZ7NaV.png"/>
</p>

* 확인하고 싶은 날짜를 선택합니다.

#### 🧐 로그아웃

<p align='center'>
  <img src="https://i.imgur.com/0XwLErm.png"/>
</p>

* 로그아웃 버튼을 눌러 로그아웃 할 수 있습니다.

#### 🧐 목표와 진행상황 확인

<p align='center'>
  <img src="https://i.imgur.com/ft58UEm.png"/>
</p>

* 사용자별로 설정한 목표에 따라 진행상황 / 목표까지 남은 시간을 계산한 결과를 보여줍니다.

#### 🧐 카테고리별 진행상황 시각화

<p align='center'>
  <img src="https://i.imgur.com/JM5UECe.png"/>
</p>

* billboard.js 라이브러리 활용해서 카테고리별로 지정한 색에 따라 한눈에 진행상황 확인할 수 있도록 파이 그래프를 보여줍니다.

#### 🧐 기록 확인

<p align='center'>
  <img width='300px' src="https://i.imgur.com/gH3vhi2.png"/>
</p>

* 로그인한 유저 & 선택한 날짜에 해당하는 기록들을 보여줍니다.

#### 🧐 기록 입력

<p align='center'>
  <img src="https://i.imgur.com/MAvCAkA.png"/>
  <img src="https://i.imgur.com/4PaVjla.png"/>
</p>

* 하단 바의 + 버튼을 눌러 기록을 추가할 수 있습니다.
* 제목, 시작시간, 종료시간(선택), 카테고리, 활용한 시간인지 여부를 입력하고 Add Recode를 클릭하면 기록이 추가됩니다.
* 잘못된 입력에 대해서 에러메세지를 보여줍니다.

#### 🧐 기록 수정 및 삭제

<p align='center'>
  <img src="https://i.imgur.com/UmHAlBL.gif"/>
</p>

* 수정을 원하는 기록을 클릭하면 해당 기록을 수정할 수 있습니다.
* Delete 버튼을 눌러 기록을 삭제할 수 있습니다.

## 🌟 배포

![image](https://user-images.githubusercontent.com/34783156/104201255-e465a580-546c-11eb-9dc9-5fd9e05aba38.png)

* pkiop.me DNS를 Route53으로 설정한 후 배포 S3에 연결된 CloudFront로 보내도록 설정합니다.
* CloudFront에서 SSL 인증을 해서 https로만 앱에 접근 가능하도록 합니다.
* S3의 Static Web Hosting을 이용해서 Frontend 앱을 배포합니다.
* 앱에서 인증 / DB데이터 조작이 필요할 때마다 AWS Cognito, AppSync 서비스를 활용해서 해당 기능을 이용합니다.

## History

[v1.5.1](https://github.com/pkiop/lifemanager/wiki/v1.5.1)  
[v2.0.0](https://github.com/pkiop/lifemanager/wiki/v2.0.0)  
[v3.0.0](https://github.com/pkiop/lifemanager/wiki/v3.0.0)  
[v4.0.0](https://github.com/pkiop/lifemanager/wiki/v4.0.0) 
