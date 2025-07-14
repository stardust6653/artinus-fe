import Badge from "@/components/common/Badge/Badge";
import { ProductType } from "@/types/product";
import styles from "./ProductInformation.module.css";
import { calculatePriceInfo } from "@/utils/price";
import { shareLink } from "@/utils/share";

interface ProductInformationProps {
  data: ProductType | null;
}

const ProductInformation = ({ data }: ProductInformationProps) => {
  const { originalPrice, currentPrice, discountPercentage } =
    calculatePriceInfo(
      data?.price as number,
      data?.discountPercentage as number
    );

  const handleBuy = () => {
    if (data?.availabilityStatus === "Out of Stock") {
      alert("품절된 상품입니다.");
      return;
    }
    alert("구매완료");
  };

  const buyButtonStyle =
    data?.availabilityStatus !== "Out of Stock"
      ? styles.buyButton
      : styles.soldOutButton;

  const buyButtonText =
    data?.availabilityStatus !== "Out of Stock" ? "구매하기" : "Sold Out";

  return (
    <div className={styles.productInformationContainer}>
      <div className={styles.productInfo}>
        <div className={styles.badgeList}>
          <Badge status={data?.availabilityStatus as string} />
          <Badge status={data?.category as string} />
        </div>
        <h2 className={styles.brand}>{data?.brand}</h2>
        <h1 className={styles.title}>{data?.title}</h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionTitle}>상품 설명</p>
          <p className={styles.description}>{data?.description}</p>
        </div>
      </div>

      <div className={styles.buyContainer}>
        <div className={styles.priceContainer}>
          <p className={styles.originalPrice}>
            ${originalPrice.toLocaleString()}
          </p>
          <p className={styles.discountPrice}>
            <span className={styles.discountPercentage}>
              {discountPercentage}%
            </span>
            <span className={styles.currentPrice}>
              ${currentPrice.toLocaleString()}
            </span>
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.shareButton} onClick={shareLink}>
            공유하기
          </button>
          <button className={buyButtonStyle} onClick={handleBuy}>
            {buyButtonText}
          </button>
        </div>

        <div className={styles.tagList}>
          {data?.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
