import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const Background = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  opacity: 0.6;
  cursor: default;
  pointer-events: none;
  z-index: 999;
`;
export const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 100%;
  max-width: 750px;
  height: 600px;
  background-color: ${({ theme }: themeProps) => theme.colors.white};
  border-radius: 10px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  z-index: 1000;
  @media (max-width: 700px) {
    border-radius: 0;
  }
`;
export const Header = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 4px solid ${({ theme }: themeProps) => theme.colors.purpleDark};
`;
export const StyledTitle = styled(Title)`
  letter-spacing: 1px;
`;
export const Content = styled.div``;
export const StyledButton = styled(Button)`
  width: calc(100% - 50px);
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;
