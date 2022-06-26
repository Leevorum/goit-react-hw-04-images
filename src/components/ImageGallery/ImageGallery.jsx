import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
