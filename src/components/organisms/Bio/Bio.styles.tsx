import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Title } from 'components/atoms/Title/Title';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  padding: 15px;
`;

export const Header = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid ${({ theme }: themeProps) => theme.colors.purpleDarken};
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-size: 25px;
  font-weight: 400;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: 18px;
  letter-spacing: 1px;
  text-align: justify;
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
