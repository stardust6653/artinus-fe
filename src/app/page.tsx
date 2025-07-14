"use client";

import CardList from "@/components/pages/home/CardList";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import styles from "./page.module.css";
import Section from "@/components/common/Section";
import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";
import SEO from "@/components/common/SEO";

export default function Home() {
  const { products, loading, hasMore, loadMore } = useInfiniteProducts();

  const { loadMoreRef } = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMore,
  });

  const handleTopButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!products.length && loading) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner text="상품을 불러오는 중..." size="large" />
      </div>
    );
  }

  return (
    <>
      <SEO
        title="알티너스 샵 | 알티너스 FE 과제"
        description="다양한 상품을 만나보세요. 무한 스크롤로 편리하게 상품을 탐색할 수 있습니다."
        keywords="상품목록, 쇼핑몰, 커머스, 온라인쇼핑"
        url="/"
      />
      <main className={styles.main}>
        <Section title={`상품 목록`}>
          <CardList data={products} />

          {/* 무한스크롤 트리거 */}
          <div ref={loadMoreRef} className={styles.loadMore}>
            {loading && (
              <LoadingSpinner
                text="더 많은 상품을 불러오는 중..."
                size="medium"
              />
            )}
            {!hasMore && !loading && (
              <div className={styles.endMessage}>
                <p>모든 상품을 불러왔습니다</p>
              </div>
            )}
          </div>
        </Section>

        <button
          aria-label="맨 위로 이동"
          className={styles.topButton}
          onClick={handleTopButtonClick}
        >
          🔝
        </button>
      </main>
    </>
  );
}
