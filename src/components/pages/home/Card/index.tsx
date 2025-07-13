import { ProductType } from "@/types/product";
import styles from "./Card.module.css";
import Image from "next/image";
import Badge from "@/components/common/Badge/Badge";
import { calculatePriceInfo } from "@/utils/price";
import Link from "next/link";

interface CardProps {
  data: ProductType;
}

const Card = ({ data }: CardProps) => {
  const { originalPrice, currentPrice, discountPercentage } =
    calculatePriceInfo(data.price, data.discountPercentage);

  return (
    <li className={styles.card} key={data.id}>
      <Link href={`/products/${data.id}`}>
        <div className={styles.thumbnailContainer}>
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={241}
            height={241}
            className={styles.thumbnail}
          />

          {data?.availabilityStatus === "Out of Stock" && (
            <div className={styles.soldOut}>
              <p>Sold Out</p>
            </div>
          )}
        </div>
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
      </Link>
    </li>
  );
};

export default Card;
