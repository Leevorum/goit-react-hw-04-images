import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalPortal = document.querySelector('#modal-portal');

export default function Modal({ onClose, children }) {
  const firstRenderCheck = useRef(true);

  useEffect(() => {
    const handleOnClose = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    //Skip first render
    if (firstRenderCheck.current) {
      firstRenderCheck.current = false;
      return;
    }
    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
  }, [onClose]);

  const handleBackdropClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClose}>
      <div className="Modal">{children}</div>
    </div>,
    modalPortal,
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
