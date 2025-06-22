import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import type { Photo } from "../../types/photo";

interface ImageGalleryProps {
  items: Photo[];
  handleClick: (photo: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, handleClick }) => {
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
