import { useState, useEffect } from "react";
import { fetchData } from "@/utils/fetch";
import { ProductType } from "@/types/product";

const useGetDetailData = (id: string) => {
  const [data, setData] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailData = async () => {
      try {
        const response = await fetchData(
          `https://dummyjson.com/products/${id}`
        );
        setData(response);
      } catch (error) {
        console.error("상품 상세 데이터 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailData();
  }, [id]);

  return { data, loading };
};

export default useGetDetailData;
