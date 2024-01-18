import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

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
  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
