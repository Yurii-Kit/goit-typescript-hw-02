import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, handleClick }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map((item) => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard item={item} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
