import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Input = styled.input`
  color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  font-size: 25px;
  padding: 10px 5px;
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 2px solid ${({ theme }: themeProps) => theme.colors.purpleDarken};
  transition: background-color 0.4s ease-in-out;
  &::placeholder {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  }
  &:focus {
    background: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    &::placeholder {
      color: ${({ theme }: themeProps) => theme.colors.purple};
    }
  }
`;
