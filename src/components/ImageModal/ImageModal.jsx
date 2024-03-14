import ReactModal from 'react-modal';
import css from './ImageModal.module.css'

const ImageModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false} // Додаткова опція для React Modal, щоб уникнути проблем зі змістом при використанні з React
    >
      {data && (
        <div>
          <img className={css.photoModal} width="max" height="max" src={data.image} alt={data.description} />
          <p>{data.description}</p>
          <p>{data.name}</p>
        </div>
      )}
    </ReactModal>
  );
};

export default ImageModal;
