import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { themeProps } from 'assets/css/theme';

export const EditableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  button {
    margin-left: 10px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  top: 60px;
  left: 0;
  position: absolute;
  height: 400px;
  resize: vertical;
  background-color: transparent;
  border: 5px solid ${({ theme }: themeProps) => theme.colors.purpleDarken};
  font-size: 20px;
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }: themeProps) => theme.colors.white};
  border-radius: 10px;
`;

export const StyledInput = styled(Input)`
  text-align: left;
  margin: 10px 25px;
  @media (min-width: 768px) {
    margin: 20px 0;
  }
`;
