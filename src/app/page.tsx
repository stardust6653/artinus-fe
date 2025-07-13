"use client";

import CardList from "@/components/pages/home/CardList";
import useGetDummyJsonData from "@/hooks/useGetDummyJsonData";
import { useState } from "react";
import styles from "./page.module.css";
import Section from "@/components/common/Section";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading } = useGetDummyJsonData(page);

  console.log(data);

  if (loading) return <div>Loading...</div>;

  return (
    <main className={styles.main}>
      <Section title="상품 목록">
        <CardList data={data?.products} />
      </Section>
    </main>
  );
}
