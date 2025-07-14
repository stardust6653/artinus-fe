interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "알티너스 FE 과제 | 박소예",
  description = "Mock API 서버를 활용한 커머스 서비스 일부 구현",
  keywords = "쇼핑몰, 커머스, 온라인쇼핑, 상품, 전자제품",
  image = "/images/og/og-image.webp",
  url = "/",
}: SEOProps) => {
  return (
    <>
      {/* 기본 메타 태그 - 검색 엔진이 가장 먼저 보는 정보 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* 기본 설정 */}
      <meta name="author" content="박소예" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph 태그 - 소셜 미디어 공유 시 미리보기 */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="알티너스 FE 과제" />
      <meta property="og:locale" content="ko_KR" />

      {/* Twitter Card 태그 - 트위터 공유 시 미리보기 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 브라우저 설정 */}
      <meta name="theme-color" content="#2c2443" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  );
};

export default SEO;
