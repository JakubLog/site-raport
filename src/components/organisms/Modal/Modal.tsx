import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Header, StyledTitle, Content, Background, StyledButton } from './Modal.styles';
import { useModal } from 'hooks/useModal';

const Modal: React.FC = () => {
  const { isOpen, closeModal, content, title } = useModal();

  return ReactDOM.createPortal(
    <>
      <Background isOpen={isOpen} />
      <Wrapper isOpen={isOpen}>
        <Header>
          <StyledTitle>{title}</StyledTitle>
        </Header>
        <Content>
          {content}
          <StyledButton onClick={closeModal}>Zamknij</StyledButton>
        </Content>
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;
