import { ProductType } from "@/types/product";
import styles from "./Card.module.css";
import Image from "next/image";
import Badge from "@/components/common/Badge/Badge";
import { calculatePriceInfo } from "@/utils/price";

interface CardProps {
  data: ProductType;
}

const Card = ({ data }: CardProps) => {
  const { originalPrice, currentPrice, discountPercentage } =
    calculatePriceInfo(data.price, data.discountPercentage);

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
      <div className={styles.priceList}>
        <p className={styles.originalPrice}>
          ${originalPrice.toLocaleString()}
        </p>
        <div className={styles.discountInfo}>
          <p className={styles.discountPercentage}>
            {discountPercentage.toFixed(0)}%
          </p>
          <p className={styles.currentPrice}>
            ${currentPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
