import styles from "./Badge.module.css";

interface BadgeProps {
  status: "In Stock" | "Low Stock" | "Out of Stock" | string;
}

export default function Badge({ status }: BadgeProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Stock":
        return styles.inStock;
      case "Low Stock":
        return styles.lowStock;
      case "Out of Stock":
        return styles.outOfStock;
      default:
        return styles.category;
    }
  };

  return (
    <span className={`${styles.badge} ${getStatusClass(status)}`}>
      {status}
    </span>
  );
}
