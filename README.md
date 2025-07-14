# 알티너스 FE 과제 - 박소예

DummyJSON Products API를 활용하여 구현한 반응형 커머스 웹 애플리케이션입니다.

## 과제 요구사항

- **API 연동**: DummyJSON Products API 사용
- **페이지 구성**: 상품 목록 페이지 + 상품 상세 페이지
- **주요 기능**: 20개씩 스크롤 기반 Lazy Load, 로딩 UI, 빌드 최적화
- **배포**: 정적 사이트 배포

## 배포 정보

### **정적 사이트 URL**

[알티너스 과제 배포](https://artinus-fe.vercel.app/)

---

## 개발 환경

### **핵심 기술 스택**

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Font**: Google Fonts (Inter + Playfair Display)
- **Build Tool**: Turbopack (Next.js 내장)
- **Package Manager**: npm

### **주요 라이브러리**

```json
{
  "next": "15.3.5",
  "react": "^18",
  "typescript": "^5",
  "@next/bundle-analyzer": "15.3.5"
}
```

### **개발 도구**

- ESLint + TypeScript 설정
- CSS Modules for 스타일 캡슐화

### **기술 선택 이유**

#### **Next.js 15 선택**

- **SEO 최적화**: 커머스 사이트의 특성상 검색 엔진 최적화가 필수
  - 서버사이드 렌더링으로 초기 로딩 속도 개선
  - 상품별 동적 메타데이터 생성 (title, description, og:image)
- **성능 최적화 기능**:
  - Image 컴포넌트: 자동 WebP 변환, lazy loading
  - 코드 스플리팅: 번들 크기 최소화 (vendors/common chunk 분리)
  - Link 태그 prefetch: 페이지 전환 속도 향상
- **개발 생산성**: App Router, TypeScript 지원, 빌드 최적화 내장

#### **CSS Modules 선택**

- **프로젝트 규모 적합성**: 소규모 프로젝트에 적절한 기술 스택
- **성능상 이점**:
  - 빌드 시점 최적화 (런타임 오버헤드 없음)
  - 클래스명 충돌 방지 (자동 해싱)
  - 번들 크기 최소화 (CSS-in-JS 대비)
- **유지보수성**:
  - 디자인 시스템 변수 활용 (--primary, --secondary 등)
  - 컴포넌트별 스타일 캡슐화
  - 일반적인 CSS 문법 사용으로 학습 곡선 최소화

#### **TypeScript 도입**

- **타입 안정성**: DummyJSON API 응답 구조를 ProductType으로 정의
- **개발 생산성**: IDE 자동완성, 컴파일 타임 에러 방지
- **코드 품질**: 명확한 인터페이스 정의로 협업 효율성 향상

#### **선택하지 않은 기술과 이유**

- **Tailwind CSS**: 프로젝트 규모 대비 설정 오버헤드
- **Styled-components**: 런타임 성능 고려
- **Redux/Zustand**: 복잡한 상태 관리 불필요 (React hooks로 충분)
- **React Query**: 단순한 API 호출 패턴 (캐싱 복잡도 불필요)

## 구현된 주요 기능

### **1. 상품 목록 페이지 (`/`)**

- [x] **무한 스크롤**: 20개씩 자동 로딩
- [x] **카드 레이아웃**: 썸네일, 제목, 가격, 할인율 표시
- [x] **재고 상태 뱃지**: In Stock(초록), Low Stock(주황), Out of Stock(빨강)
- [x] **로딩 스피너**: 데이터 로딩 중 UI 표시
- [x] **맨 위로 버튼**: 스크롤 편의성 개선

### **2. 상품 상세 페이지 (`/products/[id]`)**

- [x] **이미지 갤러리**: 썸네일 클릭으로 이미지 전환
- [x] **상품 정보**: 제목, 설명, 가격, 브랜드, 카테고리, 태그
- [x] **리뷰 시스템**: 5점 만점 별점 시스템 (😊😊😊😊🥺)
- [x] **구매/공유 기능**: 품절 상품 처리, 링크 복사
- [x] **404 처리**: 존재하지 않는 상품 ID 접근 시 처리

### **3. SEO 최적화**

- [x] **메타 태그**: title, description, keywords
- [x] **Open Graph**: Facebook, Instagram, KakaoTalk 공유 최적화
- [x] **Twitter Card**: 트위터 공유 최적화
- [x] **동적 SEO**: 상품별 맞춤 메타데이터
- [x] **OG 이미지**: 브랜드 컬러 그라데이션 이미지 (WebP 192KB)

### **4. 성능 최적화**

- [x] **이미지 최적화**: Next.js Image 컴포넌트, WebP 형식
- [x] **캐싱**: 정적 파일 1년 캐싱, DNS prefetch
- [x] **이미지 미리 로딩**: 빠른 이미지 전환을 위한 preload

### **5. 반응형 디자인**

- [x] **브레이크포인트**: 1240px, 768px
- [x] **레이아웃 적응**: 모바일/태블릿/데스크탑 최적화

## 📁 프로젝트 구조

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # 전역 스타일 (색상 변수, 레이아웃)
│   ├── layout.tsx               # 루트 레이아웃 (헤더, 푸터)
│   ├── page.tsx                 # 메인 페이지 (상품 목록)
│   ├── not-found.tsx            # 404 페이지
│   └── products/[id]/page.tsx   # 상품 상세 페이지
├── components/                   # 재사용 가능한 컴포넌트
│   ├── common/                   # 공통 컴포넌트
│   │   ├── LoadingSpinner/      # 로딩 스피너
│   │   ├── Section/             # 섹션 래퍼
│   │   └── SEO/                 # SEO 메타태그 컴포넌트
│   ├── layout/                   # 레이아웃 컴포넌트
│   │   ├── Header/              # 헤더
│   │   └── Footer/              # 푸터
│   └── pages/                    # 페이지별 컴포넌트
│       ├── home/CardList        # 상품 카드 목록
│       └── productDetail/       # 상품 상세 컴포넌트들
├── hooks/                        # 커스텀 훅
│   ├── useGetDetailData.ts      # 상품 상세 데이터
│   ├── useInfiniteProducts.ts   # 무한 스크롤 상품 데이터
│   └── useInfiniteScroll.ts     # 무한 스크롤 로직
├── types/                        # TypeScript 타입 정의
│   └── product.ts               # 상품 관련 타입
└── utils/                        # 유틸리티 함수
    ├── fetch.ts                 # API 호출 함수
    └── date.ts                  # 날짜 포맷팅
```

## 디자인 시스템

### **색상 팔레트**

```css
:root {
  --primary: #2c2443; /* 브랜드 메인 컬러 */
  --secondary: #ffcc01; /* 브랜드 보조 컬러 */
  --success: #4caf50; /* 성공/재고 있음 */
  --error: #f44336; /* 에러/품절 */
  --warning: #ff9800; /* 경고/재고 부족 */
}
```

### **개발 환경 실행**

```bash
npm install
npm run dev
```

## 성능 최적화 결과

### **빌드 최적화**

- [x] **코드 분할**: 벤더/공통 청크 분리
- [x] **트리 셰이킹**: 사용하지 않는 코드 제거
- [x] **미니파이**: SWC 컴파일러 사용
- [x] **이미지 최적화**: WebP/AVIF 자동 변환

### **캐싱 전략**

- [x] **정적 파일**: 1년 캐싱 (images, fonts)
- [x] **API 응답**: 적절한 캐시 헤더
- [x] **DNS Prefetch**: 외부 도메인 사전 연결

### **사용자 경험**

- [x] **First Paint**: 빠른 초기 렌더링
- [x] **Lazy Loading**: 필요한 시점에 이미지 로드
- [x] **Intersection Observer**: 효율적인 스크롤 감지

## API 명세

### **상품 목록 API**

```
GET https://dummyjson.com/products?skip=0&limit=20
```

### **상품 상세 API**

```
GET https://dummyjson.com/products/{id}
```

### **사용된 데이터 필드**

- `id`, `title`, `description`, `price`, `discountPercentage`
- `rating`, `stock`, `brand`, `category`, `tags`
- `thumbnail`, `images`, `availabilityStatus`
- `reviews` (rating, comment, date, reviewerName)

## 추가 구현 기능

1. **SEO 적용**: 동적 메타데이터, OG 이미지, JSON-LD
2. **에러 처리**: 404 페이지, API 에러 핸들링

## 기술적 고려사항

### **성능**

- Intersection Observer API를 활용한 효율적인 무한 스크롤
- Next.js Image 컴포넌트로 이미지 최적화
- CSS-in-CSS 방식으로 런타임 오버헤드 최소화

### **확장성**

- 컴포넌트 기반 모듈러 구조
- 재사용 가능한 커스텀 훅

### **사용자 경험**

- 로딩 상태의 적절한 피드백
- 반응형 디자인으로 모든 기기 지원 (최소 360px 까지 지원)
