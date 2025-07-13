import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { ProductType, ProductResponseType } from "@/types/product";

export function useInfiniteProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const LIMIT = 20; // 페이지당 상품 수

  const loadProducts = useCallback(
    async (pageNumber: number, isInitial = false) => {
      if (loading) return;

      setLoading(true);

      try {
        const skip = (pageNumber - 1) * LIMIT;
        const response = await axios.get<ProductResponseType>(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );

        const newProducts = response.data.products;
        const totalProducts = response.data.total;

        setTotal(totalProducts);

        if (isInitial) {
          setProducts(newProducts);
        } else {
          setProducts((prev) => [...prev, ...newProducts]);
        }

        // 더 불러올 데이터가 있는지 확인
        setHasMore(skip + newProducts.length < totalProducts);
      } catch (error) {
        console.error("상품 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    },
    [loading, LIMIT]
  );

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadProducts(nextPage);
    }
  }, [page, loading, hasMore, loadProducts]);

  // 초기 데이터 로드
  useEffect(() => {
    loadProducts(1, true);
  }, []);

  return {
    products,
    loading,
    hasMore,
    loadMore,
    total,
    currentCount: products.length,
  };
}
