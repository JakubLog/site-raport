import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Image = styled.img`
  position: absolute;
  width: 100%;
  left: 50%;
  opacity: 0.5;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`;

export const Name = styled.div`
  position: absolute;
  width: fit-content;
  left: 50%;
  top: 50%;
  font-size: 25px;
  opacity: 0.7;
  letter-spacing: 2px;
  transform: translate(-50%, -50%);
  color: ${({ theme }: themeProps) => theme.colors.white};
  padding: 5px 15px;
  transition: opacity 0.3s ease-in-out;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 100%;
    opacity: 0;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    transition: opacity 0.3s ease-in-out;
  }
`;

export const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }: themeProps) => theme.colors.white};
  width: 100%;
  height: 62px;
  overflow: hidden;
  position: relative;
  &:hover {
    cursor: pointer;
    ${Name} {
      opacity: 0.9;
      &::before {
        opacity: 0.8;
      }
    }
    ${Image} {
      opacity: 0.8;
    }
  }
`;
