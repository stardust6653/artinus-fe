import { ProductType } from "@/types/product";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  data: ProductType;
}

const Card = ({ data }: CardProps) => {
  return (
    <li className={styles.card} key={data.id}>
      <Image src={data.thumbnail} alt={data.title} width={241} height={241} />

      <h3>{data.title}</h3>
      <p>${data.price.toLocaleString()}</p>
    </li>
  );
};

export default Card;
