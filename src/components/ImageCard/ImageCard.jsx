import css from './ImageCard.module.css'

const ImageCard = ({ imageUrl, description, onClick}) => {
  return (
    <div className={css.ImageCardOne} onClick={onClick}>
        <img className={css.ImageCardOneIMG} width="300" height="300" src={imageUrl} alt={description} />
    </div>

  )
}

export default ImageCard