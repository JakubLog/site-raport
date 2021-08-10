import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  margin-top: 30px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  margin-left: -20px;
  @media (min-width: 768px) {
    padding-inline: 60px;
    font-size: 20px;
  }
`;
