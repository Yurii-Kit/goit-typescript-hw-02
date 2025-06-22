import css from "./ImageCard.module.css";
import type { Photo } from "../../types/photo";

interface ImageCardProps {
  item: Photo;
  handleClick: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, handleClick }) => {
  return (
    <div className={css.imageCard} onClick={() => handleClick(item)}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.description ?? "Image description"}
      />
    </div>
  );
};

export default ImageCard;
