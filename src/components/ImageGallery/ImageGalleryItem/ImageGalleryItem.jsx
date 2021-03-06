import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import s from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem(props) {
  const [modalShow, setModalShow] = useState(false);
  const { tags, webformatURL, largeImageURL } = props.image;

  const handleOnClick = () => {
    setModalShow(!modalShow);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={handleOnClick}
      />
      {modalShow && (
        <Modal onClose={handleOnClick}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propType = {
  image: PropTypes.object.isRequired,
};
