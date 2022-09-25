import { useEffect } from 'react';

const useModal = (onClose: () => void) => {
  useEffect(() => {
    const onPressEscape = (e: { code: string }) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onPressEscape);

    return () => window.removeEventListener('keydown', onPressEscape);
  }, [onClose]);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return { onBackdropClick };
};

export default useModal;
