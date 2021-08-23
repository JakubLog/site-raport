import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > input {
    margin-bottom: 15px;
  }
  & > * {
    width: 100%;
  }
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
