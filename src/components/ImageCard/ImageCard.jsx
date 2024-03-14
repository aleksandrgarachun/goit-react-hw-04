
const ImageCard = ({ imageUrl, description, onClick}) => {
  return (
    <div onClick={onClick}>
        <img width="300" height="300" src={imageUrl} alt={description} />
    </div>

  )
}

export default ImageCard