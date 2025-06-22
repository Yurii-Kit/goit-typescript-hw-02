import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

// Описуємо тип пропсів
type SearchProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    // const query = form.elements.query.value.trim();

    // Використання FormData для отримання даних із форми
    const formData = new FormData(form);
    // Отримуємо значення поля "query"
    const query = formData.get("query") as string;

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
