import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({images, onClick}) => {
  return (
    <div>
        <ul>
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


