import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismissAllToasts();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        message,
        variant,
        id: crypto.randomUUID(), // generate a random id here so we can track it and dismiss
      },
    ];
    setToasts(nextToasts);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const dismissAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        dismissToast,
        dismissAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
