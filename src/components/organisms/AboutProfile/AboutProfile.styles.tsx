import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Button } from 'components/atoms/Button/Button';

export const StyledWrapper = styled(Wrapper)`
  padding: 30px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media (min-width: 1335px) {
    display: grid;
    grid-template-areas:
      'img img img img if if if if if if'
      'img img img img if if if if if if'
      'img img img img if if if if if if'
      'b b b b b b b b b b';

    grid-gap: 15px;
  }
`;

export const ImageWrapper = styled.div`
  height: 300px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  @media (min-width: 1335px) {
    grid-area: img;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  &:hover {
    opacity: 0.7;
    position: relative;
    cursor: pointer;
    &::after {
      content: 'Zmień zdjęcie';
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      font-size: 35px;
      font-weight: 700;
      color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 100px;
      background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    }
  }
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Informations = styled(Wrapper)`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  padding: 15px;
  border-radius: 10px;
  * {
    margin: 0;
    text-align: center;
  }
  @media (min-width: 1335px) {
    grid-area: if;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const Name = styled.h2`
  font-weight: 400;
  @media (min-width: 1335px) {
    font-size: 60px;
  }
`;
export const Email = styled.a`
  text-decoration: none;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  opacity: 0.7;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 1335px) {
    font-size: 30px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  @media (min-width: 1335px) {
    grid-area: b;
  }
`;
