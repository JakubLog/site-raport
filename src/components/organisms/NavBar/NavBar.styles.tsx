import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 15px;
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  margin-bottom: 70px;
  @media (min-width: 768px) {
    height: 125px;
    justify-content: space-between;
    padding-inline: 60px;
    margin-bottom: 30px;
  }
`;
export const Logo = styled.h1`
  color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  position: relative;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const LogoBefore = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 125%;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.purpleDarken};
    z-index: 0;
    box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
    @media (min-width: 768px) {
      bottom: 10px;
    }
  }
`;
