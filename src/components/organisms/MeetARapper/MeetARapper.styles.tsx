import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Image = styled.img`
  min-height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.5;
  left: 0;
  top: 0;
`;
export const Content = styled.a`
  text-decoration: none;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  padding-block: 10px;
  padding-inline: 15px;
  &::before {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  & > p {
    text-align: center;
    margin: 0;
    font-size: 42px;
    letter-spacing: 2px;
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  }
  &:hover {
    &::before {
      opacity: 0.8;
    }
  }
`;
