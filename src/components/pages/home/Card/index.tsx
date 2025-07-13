import { ProductType } from "@/types/product";
import styles from "./Card.module.css";
import Image from "next/image";
import Badge from "@/components/common/Badge/Badge";

interface CardProps {
  data: ProductType;
}

const Card = ({ data }: CardProps) => {
  return (
    <li className={styles.card} key={data.id}>
      <Image
        src={data.thumbnail}
        alt={data.title}
        width={241}
        height={241}
        className={styles.thumbnail}
      />
      <div className={styles.badgeList}>
        <Badge status={data?.availabilityStatus} />
        <Badge status={data?.category} />
      </div>
      <span className={styles.brand}>{data.brand}</span>
      <h3 className={styles.title}>{data.title}</h3>
      <p>${data.price.toLocaleString()}</p>
    </li>
  );
};

export default Card;
