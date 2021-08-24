import { themeProps } from 'assets/css/theme';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const ErrorParagraph = styled.p`
  margin: 0;
  color: ${({ theme }: themeProps) => theme.colors.error};
  letter-spacing: 1px;
  animation: ${fadeIn} 2s forwards;
`;
