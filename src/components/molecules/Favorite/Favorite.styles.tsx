import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const StyledWrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Block = styled(Wrapper)`
  width: 80%;
  height: 50%;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border-radius: 25px;
  display: grid;
  grid-template-rows: 30% 70%;
  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  justify-content: center;
  font-size: 50px;
`;

export const Button = styled.button`
  grid-column: 2 / -1;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border: none;
  transition: background-color 0.3s linear;
  font-size: 50px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  border-top: 3px solid ${({ theme }: themeProps) => theme.colors.purpleDark};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  @media (min-width: 768px) {
    border-left: 3px solid ${({ theme }: themeProps) => theme.colors.purpleDark};
    border-top: 0;
  }
`;
