import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

// toast shelf. i would think we want this to fully manage the state of toasts and messages, with the parent component only supplying what a new message should be
// that way this can handle dismissals, ordering, etc
// so we will pass a newToast, and when it changes (when the user hits submit), we will add a toast here
function ToastShelf({ toasts, dismissToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            handleDismiss={() => dismissToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
