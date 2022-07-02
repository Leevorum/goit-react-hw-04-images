import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import s from './imageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
