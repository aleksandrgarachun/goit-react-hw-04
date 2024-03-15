import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({images, onClick}) => {
  return (
    <div>
        <ul className={css.ImageCardGallery}>
            {images.map((image) => {
                return (
                <li key={image.id}>
                    <ImageCard
                    imageUrl={image.urls.small}
                    description={image.alt_description}
                    onClick={() => onClick(image)}
                    />
                </li>
                
                );
            })}
            
        </ul>

    </div>
  )
}

export default ImageGallery


