import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  padding: 15px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid ${({ theme }: themeProps) => theme.colors.purpleDarken};
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-bottom: 30px;
    padding: 0;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      height: 5px;
      background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      width: 450px;
      height: 100%;
      background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
    }
  }
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
    z-index: 10;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  letter-spacing: 1px;
  text-align: justify;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

export const Content = styled.div`
  padding: 15px;
  background-color: ${({ theme }: themeProps) => theme.colors.purple};
  border-radius: 10px;
  color: ${({ theme }: themeProps) => theme.colors.white};
  height: 500px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  }
`;
