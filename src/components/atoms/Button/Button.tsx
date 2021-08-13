import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Button = styled.button<{ isDisabled: boolean }>`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  font-size: 20px;
  padding: 10px 30px;
  border: 0;
  border-radius: 10px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  &:focus,
  &:hover {
    cursor: pointer;
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  opacity: ${({ isDisabled }) => (isDisabled ? 0.6 : 1)};
`;
