import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media (min-width: 768px) {
    margin: 0;
    margin-right: 30px;
  }
`;
