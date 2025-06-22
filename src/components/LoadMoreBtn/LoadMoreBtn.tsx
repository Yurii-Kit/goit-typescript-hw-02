import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
