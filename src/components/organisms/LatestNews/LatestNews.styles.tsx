import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  height: 500px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border-radius: 25px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 50% 50%;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
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
`;

export const NewsImage = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 768px) {
    position: relative;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
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
