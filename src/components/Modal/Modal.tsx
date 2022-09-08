import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IModalState } from 'types/IModal';

import IconSwitcher from 'components/InterfaceElements/IconSwitcher';

import {
  Backdrop,
  Wrapper,
  TitleWrapper,
  Title,
  CloseButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

const Modal: React.FC<IModalState> = ({ children, title, onClose }) => {
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

  return createPortal(
    <Backdrop onClick={onBackdropClick}>
      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <CloseButton type="button" onClick={onClose}>
            <IconSwitcher name="cross" size="18px" fill="currentColor" />
          </CloseButton>
        </TitleWrapper>
        {children}
      </Wrapper>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
