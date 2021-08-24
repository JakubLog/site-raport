import styled from 'styled-components';
import { Form } from 'components/atoms/Form/Form';
import { Title } from 'components/atoms/Title/Title';

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 60px;
  @media (min-width: 768px) {
    margin-block: 200px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  margin-inline: 15px;
  & > input {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  & > p {
    margin-top: -15px;
    margin-bottom: 15px;
  }
`;

export const Info = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
export const StyledTitle = styled(Title)`
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 70px;
    width: 70%;
    margin-left: auto;
    margin-bottom: 25px;
  }
`;
export const StyledSubtitle = styled.h3`
  margin: 0;
  font-size: 25px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  @media (min-width: 768px) {
    margin-left: auto;
    width: 80%;
    font-size: 23px;
    text-align: right;
  }
`;
