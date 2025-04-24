# 250421 ~ 250422

> ### 목차

<details>
<summary>1. [프로젝트 관리 API]</summary>
<div>

### 1. 프로젝트 관리 API

- 프로젝트 관리 API 설계
  - 프로젝트 생성
  - 프로젝트 목록 조회
  - 프로젝트 단건 조회
  - 프로젝트 삭제

</div>
</details>

<details>
<summary>2. [초대 API]</summary>
<div>

### 2. 초대 API

- 프로젝트 초대 API 설계
  - 프로젝트 초대 생성
  - 초대 수락
  - 초대 거절
  - 내가 받은 초대 조회

</div>
</details>

<details>
<summary>3. [FCM 기능 구현]</summary>
<div>

### 3. FCM 알림 API

- FCM을 활용한 알림 API 설계
  - FCM 토큰 등록
  - FCM 토큰 삭제
  - 초대 기능에 "알림" 추가

</div>
</details>

4. [AI Code Review 과제]

---

# 250423

> ### 목차

<details>
<summary>1. [STT 테스트]</summary>
<div>

- Azure STT를 활용해 STT 테스트
- Wake word 설정을 통한 키워드 입력 시 동작하게 설정(porcupine)

</div>
</details>

<details>
<summary>2. [User 필드 추가]</summary>
<div>

- Gitlab 로그인 API 수정
  - GitLab 로그인시 이름, 아이디, 프로필 이미지 필드 추가

</div>
</details>

<details>
<summary>3. [프로젝트 초대 관련]</summary>
<div>

- 프로젝트 초대 관련 로직 추가/수정
  - 프로젝트 초대 유저 조회(TrieSearch)
  - 프로젝트 초대(1:1 -> 1:多)

</div>
</details>

<details>
<summary>4. [Notification DB 저장]</summary>
<div>

- FCM 알림 발생 시 DB에 알림 내역 저장
  - 읽음 처리 API
  - 전체 알림 조회
  - 안읽은 알림 조회

</div>
</details>

---

# 250424

> ### 목차

<details>
<summary>[프로젝트 기본 세팅]</summary>
<div>

- 프로젝트 생성 기능 개선
  - 초기에는 프로젝트 생성 시 `프로젝트 이름(projectName)`만 받도록 구현되어 있었음
  - 피그마 디자인 기획안에 따라 실제 운영에 필요한 항목들을 추가적으로 수집하도록 수정함
    - 추가된 입력 항목: GitLab 저장소 주소(`repositoryUrl`), 서버 IP 주소(`ipAddress`), 클라이언트/서버 환경설정 파일, PEM 인증 파일 등
  - 요청 DTO 및 엔티티 수정과 함께 서비스 로직도 리팩토링하여, 입력받은 값들이 프로젝트, 환경 설정, 애플리케이션 정보 등 여러 테이블에 저장되도록 구조화함

</div>
</details>

---
