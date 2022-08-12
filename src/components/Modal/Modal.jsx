import { useEffect } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ dataLargeImage, toogleModal }) => {
  const { largeImageURL, tags } = dataLargeImage;

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    window.addEventListener('keydown', onEscapeClick);
    return () => {
      const body = document.querySelector('body');
      body.style.overflow = 'auto';

      window.removeEventListener('keydown', onEscapeClick);
    };
  });

  const onOverlayClick = e => {
    e.target === e.currentTarget && toogleModal();
  };

  const onEscapeClick = e => {
    if (e.code === 'Escape') {
      toogleModal();
    }
  };

  return (
    <div className={s.Overlay} onClick={onOverlayClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  toogleModal: PropTypes.func,
  dataLargeImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

export default Modal;
