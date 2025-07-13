"use client";

import CardList from "@/components/pages/home/CardList";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import styles from "./page.module.css";
import Section from "@/components/common/Section";
import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";

export default function Home() {
  const { products, loading, hasMore, loadMore } = useInfiniteProducts();

  const { loadMoreRef } = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMore,
  });

  if (!products.length && loading) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner text="상품을 불러오는 중..." size="large" />
      </div>
    );
  }

  return (
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
    </main>
  );
}
