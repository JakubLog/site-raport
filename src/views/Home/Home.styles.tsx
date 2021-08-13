import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
  & > * {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
`;

export const AboutUs = styled(Paragraph)`
  text-align: justify;
  line-height: 1.5;
  @media (min-width: 768px) {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }
`;
