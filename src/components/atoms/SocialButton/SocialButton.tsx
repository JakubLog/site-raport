import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const SocialButton = styled.button`
  width: 200px;
  height: 200px;
  margin: 15px;
  border: 0;
  border-radius: 20px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-size: 30px;
  transition: 0.3s background-color linear;
  &:first-child {
    margin-left: 0;
    @media (min-width: 768px) {
      margin-left: 50px;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
`;
