import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../../api";
import { ClipLoader } from "react-spinners";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  const handleSearch = (newInput) => {
    setPhotos([]);
    setInput(newInput);
    setCurrentPage(1);
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleOpenModal = (urls) => {
    setIsOpenModal(true);
    setModalSrc(urls.regular);
    setModalAlt(urls.description);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setModalSrc("");
    setModalAlt("");
  };

  useEffect(() => {
    if (input === "") {
      return;
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const newPhotos = await fetchPhotos(input, currentPage);

        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [input, currentPage]);

  return (
    <div className={css.App}>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <ClipLoader color="#36d7b7" size={100} />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} handleClick={handleOpenModal} />
      )}
      {!isLoading && photos.length > 0 && (
        <LoadMoreBtn onClick={incrementPage} />
      )}

      <ImageModal
        modalIsOpen={isOpenModal}
        closeModal={handleCloseModal}
        urls={modalSrc}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;
