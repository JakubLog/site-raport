import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themeProps } from 'assets/css/theme';

export const Wrapper = styled.div`
  position: absolute;
  bottom: -54px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    position: static;
    width: 400px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  font-size: 18px;
  width: 22%;
  min-width: fit-content;
  text-align: center;
  padding: 10px 8px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border-radius: 10px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  transition: 0.3s color ease-in-out, 0.4s background-color ease-in-out;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  }
  &.${activeClassName} {
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    @media (max-width: 768px) {
      background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    }
  }
  @media (min-width: 768px) {
    position: relative;
    background-color: unset;
    box-shadow: unset;
    font-size: 25px;
    &:hover {
      background-color: unset;
    }
    &.${activeClassName} {
      &::before {
        content: '';
        width: 110%;
        height: 20%;
        background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0.4;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
