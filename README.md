# HELPCAT SERVER

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

### resolvers 구현 목록

#### Query

```
- 모든 유저 정보 조회
- 로그인된 회원 정보 조회
```

#### Mutation

```
- 회원가입
- 로그인
- 회원탈퇴
- 비밀번호 변경
- 서비스 글 작성
```

#### Subscription

```
- Service 실시간 데이터 조회 구현
```

### 구현예정

```
- 게시글 수정/삭제
- 페이스북, 카카오, 구글 로그인 인증
- nodemailer를 사용한 이메일 인증(인증번호 입력 방식으로 구현예정)
- 실시간 채팅서비스
```
