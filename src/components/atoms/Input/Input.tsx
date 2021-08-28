import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Input = styled.input<{ isLight?: boolean }>`
  color: ${({ theme, isLight }) => (isLight ? theme.colors.purpleLighten : theme.colors.purpleDarken)};
  font-size: 25px;
  padding: 10px 5px;
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 2px solid ${({ theme, isLight }) => (isLight ? theme.colors.purpleLighten : theme.colors.purpleDarken)};
  transition: background-color 0.4s ease-in-out;
  &::placeholder {
    transition: color 0.3s ease-in-out;
    color: ${({ theme, isLight }) => (isLight ? theme.colors.purpleLighten : theme.colors.purpleDarken)};
  }
  &:focus {
    background: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    color: ${({ theme, isLight }) => (isLight ? theme.colors.purpleDarken : theme.colors.purpleLighten)};
    &::placeholder {
      color: ${({ theme, isLight }) => (isLight ? theme.colors.purpleDarken : theme.colors.purpleLighten)};
    }
  }
`;
