import styled, { keyframes } from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50%);
    }
`;

const slideOut = keyframes`
    to {
        opacity: 0;
        transform: translateY(-50%);
    }
`;

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 450px;
  height: 225px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  border-radius: 20px;
  padding: 20px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  animation: ${slideIn} 2s forwards, ${slideOut} 1s 4s forwards;
  z-index: 998;
`;

export const StyledTitle = styled(Title)`
  padding-inline: 12px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  letter-spacing: 1px;
  border-bottom: 3px solid ${({ theme }: themeProps) => theme.colors.purpleLight};
`;

export const Content = styled.div`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  height: 67%;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
`;

export const Paragraph = styled.p`
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
