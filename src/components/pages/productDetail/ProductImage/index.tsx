import { ProductType } from "@/types/product";
import Image from "next/image";
import styles from "./ProductImage.module.css";
import { useState, useEffect } from "react";

interface ProductImageProps {
  data: ProductType | null;
}

const ProductImage = ({ data }: ProductImageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (data?.images) {
      data.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
      });
    }
  }, [data?.images]);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className={styles.productImageContainer}>
      <Image
        src={data?.images[selectedImage] as string}
        alt=""
        width={500}
        height={500}
        className={styles.productImage}
        priority
        loading="eager"
      />

      <div className={styles.imageList}>
        {data?.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            width={80}
            height={80}
            className={styles.image}
            onClick={() => handleImageClick(index)}
            priority={index < 4}
            loading="eager"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
