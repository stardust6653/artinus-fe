import { ProductType } from "@/types/product";
import styles from "./CardList.module.css";
import Card from "../Card";

interface CardListProps {
  data: ProductType[];
}

const CardList = ({ data }: CardListProps) => {
  return (
    <ul className={styles.cardList}>
      {data?.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default CardList;
