"use client";

import styles from "./ProductDetailPage.module.css";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import useGetDetailData from "@/hooks/useGetDetailData";
import LoadingSpinner from "@/components/common/LoadingSpinner/LoadingSpinner";
import ProductImage from "@/components/pages/productDetail/ProductImage";
import ProductInformation from "@/components/pages/productDetail/ProductInformation";
import ReviewList from "@/components/pages/productDetail/ReviewList";
import SEO from "@/components/common/SEO";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, loading } = useGetDetailData(id as string);

  if (loading) {
    return (
      <div className={styles.initialLoading}>
        <LoadingSpinner text="상품을 불러오는 중..." size="large" />
      </div>
    );
  }

  // 상품이 존재하지 않을 때 404 페이지 표시
  if (!data && !loading) {
    notFound();
  }
  return (
    <>
      <SEO
        title={data?.title || "상품 상세"}
        description={data?.description || "상품 상세 정보를 확인하세요"}
        keywords={`${data?.brand || ""}, ${data?.category || ""}, ${
          data?.tags?.join(", ") || ""
        }`}
        image={data?.thumbnail || "/og-image.jpg"}
        url={`/products/${id}`}
      />
      <main className={styles.productDetailPageWrapper}>
        <div className={styles.productDetailPage}>
          <div className={styles.productInfoContainer}>
            <ProductImage data={data} />
            <ProductInformation data={data} />
          </div>

          <ReviewList data={data} />
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;
