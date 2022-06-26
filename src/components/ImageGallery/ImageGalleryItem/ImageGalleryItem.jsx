import Modal from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    modalShow: false,
  };

  handleOnClick = () => {
    this.setState(state => ({
      modalShow: !state.modalShow,
    }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.image;

    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={this.handleOnClick}
        />
        {this.state.modalShow && (
          <Modal onClose={this.handleOnClick}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propType = {
  image: PropTypes.object.isRequired,
};
