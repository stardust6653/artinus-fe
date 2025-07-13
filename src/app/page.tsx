"use client";

import CardList from "@/components/pages/home/CardList";
import useGetDummyJsonData from "@/hooks/useGetDummyJsonData";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading } = useGetDummyJsonData(page);

  console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <CardList data={data?.products} />
    </main>
  );
}
