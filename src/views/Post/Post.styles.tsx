import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

export const Image = styled.img`
  width: 100%;
  border-radius: 25px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  @media (min-width: 768px) {
    width: 35%;
    float: left;
    margin-bottom: 30px;
    margin-right: 30px;
  }
`;

export const StyledTitle = styled(Title)`
  margin-top: 15px;
  text-align: center;
  font-size: 35px;
  position: relative;
  &::after {
    content: '';
    width: 70%;
    height: 3px;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  @media (min-width: 768px) {
    &::after {
      display: none;
    }
    font-size: 40px;
    text-align: left;
  }
`;
export const Description = styled.p`
  text-align: justify;
  margin-top: 25px;
  font-size: 20px;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    margin-top: 15px;
    font-size: 25px;
  }
`;
export const Author = styled.div`
  width: fit-content;
  margin: 0 auto;
  opacity: 0.7;
  @media (min-width: 768px) {
    width: 100%;
    text-align: right;
    margin: 0;
    height: 50px;
    font-size: 20px;
    padding-right: 30px;
  }
`;
export const Favorite = styled.div<{ isActive?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 40px;
  border-radius: 25px 25px 0 0;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  &::after {
    content: '';
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 20px;
    border-radius: 10px;
    background-color: ${({ theme }: themeProps) => theme.colors.purple};
  }
  @media (min-width: 768px) {
    width: 40px;
    border-radius: 50%;
    &::after {
      border-radius: 50%;
      width: 50%;
    }
  }
`;
