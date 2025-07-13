import { ProductType } from "@/types/product";
import styles from "./CardList.module.css";
import Card from "../Card";

interface CardListProps {
  data: ProductType[] | undefined;
}

const CardList = ({ data }: CardListProps) => {
  if (!data) return <div>상품이 없습니다.</div>;

  return (
    <ul className={styles.cardList}>
      {data?.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default CardList;
