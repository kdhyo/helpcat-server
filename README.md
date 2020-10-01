# HELPCAT SERVER

#### - 2020/10/02

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

### resolvers 구현 목록

#### Query

```
- 로그인된 회원 정보 조회
- 회원 본인 정보 조회
- 서비스 정보 전체 조회
- 서비스 글 OrderBy 설정 추가
- 1:1 채팅방 조회
- 유저 개인이 포함되어 있는 채팅방 전부 조회
```

#### Mutation

```
- 회원가입 및 이메일 인증 메일 전송
- 로그인 및 JWT 생성
- 회원탈퇴 시 유저와 연결된 다른 테이블 함께 삭제
- 비밀번호 변경
- 서비스 글 생성
- 서비스 글 삭제
- 서비스 글 수정
- 서비스 연결 시 채팅방 생성
- 채팅메세지 전송
- 서비스 완료 시 DB데이터 변경
- 서비스 후기 시스템
```

#### Subscription

```
- Service 추가된 데이터 실시간 전송
- 채팅방 별로 Message 데이터 실시간 전송
```

### 구현예정

```
- 페이스북, 카카오, 구글 로그인 인증
- 실시간 채팅서비스
- 후기 및 평점
```
