# PPT Palette Lab

정적 HTML 기반의 PPT 팔레트 추천 랜딩 페이지입니다.

## 구성

- `index.html`: 메인 진입 페이지
- `code.html`: `index.html`과 동일한 시안용 페이지
- `style.css`: 공통 스타일과 메인 페이지 전용 보조 스타일
- `main.js`: 메인 페이지 상호작용 및 팔레트 생성 로직

## 현재 동작

- HEX 입력으로 기준색 변경
- 이미지 업로드/드래그 앤 드롭 평균색 추출
- 용도별 톤 전환
- 팔레트 새로고침/잠금
- 팔레트 밴드 클릭 시 HEX 복사

## Firebase Hosting 배포

1. Firebase CLI 설치

```bash
npm install -g firebase-tools
```

2. 로그인

```bash
firebase login
```

3. 프로젝트 연결

```bash
firebase use --add
```

4. 배포

```bash
firebase deploy
```

`firebase.json`은 현재 저장소 루트를 정적 호스팅 대상으로 사용하도록 설정되어 있습니다.
