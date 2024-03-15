import ReactModal from 'react-modal';
import css from './ImageModal.module.css'

const ImageModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false} // Додаткова опція для React Modal, щоб уникнути проблем зі змістом при використанні з React
      style={Styles}      
    >
      {data && (
        <div className={css.photoModalDiv}>
          <img className={css.photoModal} src={data.image} alt={data.description} />
          <p className={css.photoParagraph}>Description: {data.description}</p>
          <p className={css.photoParagraph}>User nickname: {data.name}</p>
        </div>
      )}
    </ReactModal>
  );
};

const Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "85%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "30px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
}

export default ImageModal;
