## 🍓 Node.js 입문 개인 과제   
다음과 같은 CRUD API들을 구현하였습니다. 

![image](https://github.com/CDR4733/nine-shop/assets/166963977/95197ddb-395b-4be5-a803-ec014e512cf8)


각 API에서 유효성 검증을 통해 status와 에러 message를   
표시해주는 기능도 일부 몇 가지를 제외하고는 모두 구현했습니다.   
다만 이를 error-handler.middleware.js 파일로 통합관리하는   
방식으로는 구현하지 못했습니다. (해당 파일은 빈 내용입니다.)   
   
AWS EC2 : <http://13.124.196.44:3000/products> ⛱️    
Gabia : <http://cdr4733.shop:3000/products> ⛱️    
    
## 🥕 API   
    
* 상품 생성 API `POST` '/products'   
   
![image](https://github.com/CDR4733/nine-shop/assets/166963977/448db8aa-58e4-4ead-90ff-0f5a8e66f3cd)
   
* 상품 목록 조회 API `GET` '/products'      
   
![image](https://github.com/CDR4733/nine-shop/assets/166963977/11782154-0807-48f9-a058-56d7c37775b7)
   
* 상품 상세 조회 API `GET` '/products/:id'   
   
![image](https://github.com/CDR4733/nine-shop/assets/166963977/1ffd9adf-0809-4d16-aa62-1467d9153cda)
   
* 상품 수정 API `PATCH` '/products/:id'   
   
![image](https://github.com/CDR4733/nine-shop/assets/166963977/1cf2acdb-bc3a-471d-b381-f8b7aba2105d)
   
* 상품 삭제 API `DELETE` '/products/:id'   
   
![image](https://github.com/CDR4733/nine-shop/assets/166963977/9bc4e6d8-657b-4a63-b52a-7523aab80600)
   

## 🥝 프로젝트 평가 항목   
   
<프로젝트 기본 세팅>   
- [x] 1. `README.md` 파일 생성하여 간략한 프로젝트 설명 및 실행 방법 작성
- [ ] 2. `.env` 파일을 이용하여 민감한 정보 관리 (실패)
- [x] 3. `.gitignore` 파일을 생성하여 불필요하거나 민감한 정보가 Gibhub에 올라가지 않도록 설정
- [x] 4. `.prettierrc` 파일을 생성하여 일정한 코드 형태를 유지할 수 있도록 설정
- [x] 5. `package.json` 파일의 `scripts` 항목에 `dev`라는 이름을 추가하여 nodemon!

<API 구현>
- [x] 1. 상품 생성 API
- [x] 2. 상품 목록 조회 API
- [x] 3. 상품 상세 조회 API
- [x] 4. 상품 수정 API
- [x] 5. 상품 삭제 API

<API Client로 테스트>
- [x] 1. Insomnia Client를 이용하여 API 정상 작동 테스트

<배포>
- [x] 1. AWS EC2 인스턴스에 프로젝트 배포
- [x] 2. PM2를 이용해 터미널을 종료하더라도 서버 실행
- [x] 3. Gabia를 이용해 도메인 주소 연결
- [x] 4. 배포된 IP주소 또는 연결된 도메인 주소 제출

![image](https://github.com/CDR4733/nine-shop/assets/166963977/b8223075-8ac7-46e0-981a-a65932e57e79)

AWS EC2 : <http://13.124.196.44:3000/products> ⛱️    
Gabia : <http://cdr4733.shop:3000/products> ⛱️    
