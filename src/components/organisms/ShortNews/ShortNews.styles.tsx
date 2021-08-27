import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const StyledWrapper = styled(Wrapper)`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  height: 500px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  display: grid;
  grid-template-rows: 50% 50%;
  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 50% 50%;
  }
`;

export const NewsTitle = styled.h3`
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 5px solid ${({ theme }: themeProps) => theme.colors.purple};
  @media (min-width: 768px) {
    padding-top: 30px;
    font-size: 35px;
  }
  transition: color 0.3s linear;
  &:hover {
    cursor: pointer;
    color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  @media (max-width: 768px) {
    &:hover ${NewsImage} {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
  @media (min-width: 768px) {
    position: relative;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    &::after {
      content: 'Czytaj...';
      color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
      opacity: 0;
      cursor: pointer;
      transition: opacity 0.2s linear;
    }
    &:hover {
      &::after {
        opacity: 0.6;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 15px;
  height: 60%;
  @media (min-width: 768px) {
    padding: 15px 30px;
  }
`;

export const NewsContent = styled.div`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  height: 100%;
  padding: 15px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  border-radius: 0 0 20px 20px;
  pointer-events: none;
  @media (min-width: 768px) {
    border-radius: 10px;
  }
`;

export const NewsParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
  display: -webkit-box;
  width: fit-content;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  @media (min-width: 768px) {
    -webkit-line-clamp: 8;
  }
`;
