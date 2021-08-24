import styled from 'styled-components';

export const ShareIcons = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 15px;
  & > * {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  @media (min-width: 768px) {
    padding-right: 30px;
    margin: 0;
    margin-left: auto;
  }
`;
