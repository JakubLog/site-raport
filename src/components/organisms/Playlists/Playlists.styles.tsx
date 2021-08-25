import styled from 'styled-components';

export const PlaylistsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > * {
    &:first-child {
      margin-top: 15px;
    }
    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
  padding-bottom: 30px;
`;
