import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.query.value.trim();

    // Використання FormData для отримання даних із форми
    // const formData = new FormData(form);
    // const query = formData.get('query').trim(); // Отримуємо значення поля "query"

    if (query === "") {
      toast.error("Please enter a search query!");

      return;
    }
    onSearch(query);
    form.reset();
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.Searchform} onSubmit={handleSubmit}>
        <input
          className={css.Searchform_input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.FormBtn} type="submit">
          Search
        </button>
      </form>
      <Loader />
    </header>
  );
};

export default SearchBar;
