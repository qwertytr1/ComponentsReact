import React from 'react';
import styles from './module.module.css';
import Header from '../../Header';
type TProps = {
  children: React.ReactElement;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ children, setActive }: TProps) {
  return (
    <>
      <Header />
      <div className={styles.wrapper} data-testid="modal">
        <button className={styles.modal} type="button" onClick={() => setActive(false)}>
          lul
        </button>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </>
  );
}

export default Modal;
