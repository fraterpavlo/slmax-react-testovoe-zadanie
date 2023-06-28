import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/ProductCard.module.scss";
import { toggleIsFavoriteProductById } from "../api/apiRequests";
import cn from "classnames";
import { useState } from "react";

export function ProductCard({ cardData, onClickCallBack }) {
  const [isFavorite, setIsFavorite] = useState(cardData.isFavorite);

  const myLoader = ({ src }) => {
    return `${cardData.avatar}`;
  };

  async function onAddToFavoriteHandler(e) {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    await toggleIsFavoriteProductById(cardData.id, !cardData.isFavorite);
  }

  return (
    // <Link href={`/products/${cardData.id}`}>
    <div className={styles["card"]} onClick={() => onClickCallBack()}>
      <div className={styles["card__img-container"]}>
        <Image
          className={styles["card__img"]}
          loader={myLoader}
          src={cardData.avatar}
          width={500}
          height={500}
          alt="Picture of product"
        />
      </div>
      <div className={styles["card__description-container"]}>
        <span className={styles["card__title"]}>{cardData.title}</span>
        <span className={styles["card__price"]}>{cardData.price} $</span>
        <div className={styles["card__actions-container"]}>
          <button disabled className={styles["card__add-to-cart-btn"]}>
            В корзину
          </button>
          <button
            onClick={onAddToFavoriteHandler}
            className={cn(styles["card__add-to-favorite-btn"], {
              [styles["card__add-to-favorite-btn_active"]]: isFavorite,
            })}
          ></button>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default ProductCard;
