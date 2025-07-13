"use client";

import styles from "./ProductDetailPage.module.css";
import { useParams } from "next/navigation";
import useGetDetailData from "@/hooks/useGetDetailData";
import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useGetDetailData(id as string);
  console.log(data);

  if (loading) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner text="상품을 불러오는 중..." size="large" />
      </div>
    );
  }
  return (
    <main className={styles.productDetailPageWrapper}>
      <div className={styles.productDetailPage}>123</div>
    </main>
  );
};

export default ProductDetailPage;
