import { useEffect, useState } from "react";
import { fetchData } from "@/utils/fetch";

const useGetDummyJsonData = (page = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(
          `${process.env.NEXT_PUBLIC_API_URL}?limit=${page * 20}`
        );
        setData(result);
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [page]);

  return { data, loading };
};

export default useGetDummyJsonData;
