import css from './ImageCard.module.css';

const ImageCard = ({ item: { urls, description }, handleClick }) => {
  return (
    <div className={css.imageCard} onClick={() => handleClick(urls)}>
      <img className={css.image} src={urls.small} alt={description} />
    </div>
  );
};

export default ImageCard;
