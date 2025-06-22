import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
