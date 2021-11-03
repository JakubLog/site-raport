import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin-bottom: 15px;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  * {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
