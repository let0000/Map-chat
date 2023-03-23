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
  <img width='400px' src = "https://user-images.githubusercontent.com/21376061/227173782-73631056-2f50-408b-be72-3a34c2015061.png"/>
</p>


* 카카오 키워드 검색을 이용하여 검색한 리스트를 받아 올 수 있습니다.
* 카카오맵 sdk 를 이용하여 현재위치와 검색한 리스트의 위치를 지도에 표시 할 수 있습니다.


<p align='center'>
  <img src = "https://user-images.githubusercontent.com/21376061/227172086-9f019e22-9ec7-449d-8c00-711c753c24c6.png"/>
</p>


* 마커를 클릭하여 클릭한 마커의 정보를 얻을 수 있습니다.

<p align='center'>
  <img src = "https://user-images.githubusercontent.com/21376061/227172176-dc509dc7-bf9a-4091-9f83-29ff54662aed.png"/>
</p>


* 클릭한 마커가 어떤 아이템인지 리스트에서 확인할 수 있습니다.


<p align='center'>
  <img width='300px' src="https://user-images.githubusercontent.com/21376061/227172487-e6736b4c-10cb-471a-a5c1-11f058aca02e.png"/>
</p>


* 받아온 리스트를 화면에 띄울 수 있습니다.
* 우측 상단의 닫기 버튼을 통해 리스트를 숨길 수 있습니다.


<p align='center'>
  <img src="https://user-images.githubusercontent.com/21376061/227172340-dc2962fd-1aec-43c8-9860-9868f8419e9a.png"/>
</p>


* 열기 버튼을 통해 리스트를 다시 나타낼 수 있습니다.

### 👌 날씨 정보

<p align='center'>
  <img src = "https://user-images.githubusercontent.com/21376061/227177132-666b2cbe-e7ee-4804-b911-05d422c1e7b0.png"/>
</p>


* openwatherMap API 를 통해 위도와 경도값으로 현재 날씨와 기온을 받아 올 수 있습니다.


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
