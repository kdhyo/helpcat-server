# HELPCAT SERVER

### - 2020/10/16 작성

#### - 프론트엔드(https://github.com/wldbf97/helpcat)

### 사용 목록

**Graphql-yoga** 기반 서버 셋팅  
**prisma2 Mysql** ORM 기반 셋팅  
**nodemon** 을 적용한 'yarn run dev' 로 실시간 서버재시작  
**cors** 방지  
**morgan** 패키지를 활용한 로그기록  
**babel**패키지를 통한 ES6 이상문법 적용  
**dotenv**패키지를 통한 .env 사용  
**jsonwebtoken** 회원인증을 위해 사용  
**passport / passport-jwt**미들웨어를 사용한 인증 구현  
**bcryptjs / crypto** 통한 암호화기법 적용  
**nodemailer** / **bcryptjs** 를 활용한 랜덤문자 전송을 통한 이메일인증 구현  
**merge-graphql-schemas** / **path** / **graphql-tools** 를 사용한 디렉토리 정리  
**Graphql-yoga - pubsub**를 활용한 신규 서비스 데이터 저장 및 전송  
**multer multer-s3 aws-sdk path** 사용하여 aws s3에 이미지 업로드
**AWS RDS** 사용한 MySQL 호스팅 사용

### resolvers 구현 목록

#### Query

```
- 로그인된 회원 정보 조회
- 회원 본인 정보 조회
- 서비스 정보 전체 조회
- 서비스 글 OrderBy 설정 추가
- 1:1 채팅방 조회
- 유저 개인이 포함되어 있는 채팅방 전부 조회
- 하나의 서비스 정보 불러오기
- 모든 후기 조회
```

#### Mutation

```
- 회원가입 및 JWT 생성
- 이메일 인증메일 발송
- 로그인 및 JWT 생성
- 회원탈퇴 시 유저와 연결된 다른 테이블 함께 삭제
- 회원정보 수정
- 비밀번호 변경
- 서비스 글 생성 및 pubsub안에 데이터 삽입
- 서비스 글 삭제
- 서비스 글 수정
- 서비스 연결 시 채팅방 생성
- 서비스 완료처리
- 채팅방 별 메세지 전송 및 pubsub안에 데이터 삽입
- 서비스 완료 시 DB데이터 변경
- 서비스 후기 시스템 구축
- aws s3 연동을 통한 서비스 등록 시 이미지 업로드 추가
- 알람기능 on/off 추가
```

#### Subscription

```
- Service 추가된 데이터 실시간 받기
- 채팅방 별 Message 데이터 실시간 받기
```

### 실행순서

```
1. Mysql 'helpcat' 데이터베이스 생성
2. ./prisma/helpcat.sql 테이블 추가
3. ./prisma/example.env 내용 수정 및 파일명 .env 변경
4. root 안에 있는 example.env 내용 수정 및 파일명 .env 변경
5. 'yarn' 을 통한 패키지 설치
6. npx prisma introspect / npx prisma generate 순으로 prisma 셋팅
7. yarn run dev
```
