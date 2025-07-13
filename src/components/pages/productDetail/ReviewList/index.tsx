import { ProductType } from "@/types/product";
import styles from "./ReviewList.module.css";
import { formatDate } from "@/utils/date";

interface ReviewListProps {
  data: ProductType | null;
}

const ReviewList = ({ data }: ReviewListProps) => {
  const getRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={styles.star}>
        {index < Math.floor(rating) ? "😊" : "🥺"}
      </span>
    ));
  };

  return (
    <section className={styles.reviewList}>
      <h3 className={styles.reviewListTitle}>리뷰</h3>
      {data?.reviews.length === 0 ? (
        <p className={styles.noReview}>리뷰가 없습니다.</p>
      ) : (
        <ul className={styles.reviewListContainer}>
          {data?.reviews.map((review, index) => (
            <li key={index} className={styles.reviewItem}>
              <div className={styles.reviewItemHeader}>
                <p className={styles.reviewItemRating}>
                  {getRating(review.rating)}
                  {review.rating}/5
                </p>
                <p className={styles.reviewItemReviewerName}>
                  {review.reviewerName}
                </p>
              </div>
              <p className={styles.reviewItemComment}>{review.comment}</p>
              <p className={styles.reviewItemDate}>{formatDate(review.date)}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ReviewList;
