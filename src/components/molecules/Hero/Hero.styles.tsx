import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const HeroWrapper = styled(Wrapper)`
  width: 100%;
  height: calc(100vh - 230px);
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    height: calc(100vh - 195px);
  }
`;

export const HeroImage = styled.img`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.9;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > * {
    width: max-content;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    margin: 0;
    &:first-child {
      margin-bottom: 30px;
    }
  }
  @media (min-width: 768px) {
    display: block;
    width: 625px;
    height: 160px;
  }
`;

export const Header = styled.h1`
  padding-top: 10px;
  padding-left: 30px;
  font-size: 50px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 60px;
    padding-right: 10px;
  }
`;

export const Subheader = styled.h2`
  font-size: 25px;
  font-weight: 400;
  padding-inline: 10px;
  padding-top: 15px;
  padding-bottom: 3px;
  @media (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 40px;
  }
`;
