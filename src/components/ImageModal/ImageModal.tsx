import Modal from 'react-modal';
import css from './ImageModal.module.css';
const customStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    maxWidth: '1200px',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    borderRadius: '10px',
  },
};
Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, urls, alt }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        ✖
      </button>
      <img
        className={css.image}
        src={`${urls}&w=800&h=600`}
        srcSet={`${urls}&w=800&h=600 1x, ${urls}&w=1600&h=1200 2x`}
        sizes="(max-width: 800px) 100vw, 800px"
        alt={alt}
      />
    </Modal>
  );
};

export default ImageModal;
