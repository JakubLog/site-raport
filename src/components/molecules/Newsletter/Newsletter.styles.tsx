import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const AboutNewsletter = styled(Paragraph)`
  text-align: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    flex-grow: 0;
    p {
      text-align: right;
    }
    & > * {
      &:first-child {
        margin-right: 20px;
      }
      width: 50%;
    }
    input {
      width: 100%;
      max-width: 700px;
    }
  }
`;
