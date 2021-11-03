import { themeProps } from 'assets/css/theme';
import styled, { keyframes } from 'styled-components';

const fadeInBlock = keyframes`
    from {
        transform: scaleY(0);
    } to {
        transform: scaleY(1);
    }
`;

const fadeInText = keyframes`
    from {
        opacity: 0;
        transform: translateX(-2%);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Summary = styled.summary`
  cursor: pointer;
  list-style-type: none;
  font-size: 20px;
  letter-spacing: 1px;
  position: relative;
  &::before {
    content: '>';
    color: ${({ theme }: themeProps) => theme.colors.purpleLight};
    font-weight: 800;
    position: absolute;
    top: 50%;
    left: -25px;
    transition: transform 0.2s ease-in-out;
    transform: translateY(-50%) rotate(90deg);
  }
`;
export const Content = styled.div`
  padding: 15px;
  margin-top: 15px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  border-radius: 0 5px 10px 10px;
  color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  font-weight: 800;
  line-height: 1.3;
  text-align: justify;
  border-left: 5px solid ${({ theme }: themeProps) => theme.colors.purpleLight};
  transform-origin: left top;
  transform: scaleY(0);
  animation: ${fadeInBlock} 0.4s ease-in-out 1 forwards;
  & > p {
    margin: 0;
    opacity: 0;
    transform: translateX(-2%);
    animation: ${fadeInText} 0.2s 0.6s ease-in 1 forwards;
  }
`;
export const Wrapper = styled.details`
  width: 100%;
  padding: 20px 30px;
  padding-left: 50px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  border-radius: 15px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  &[open] {
    ${Summary}::before {
      transform: translateY(-50%) rotate(-90deg);
    }
  }
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &:nth-child(even) {
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
    ${Content} {
      border-left: 5px solid ${({ theme }: themeProps) => theme.colors.purpleDarken};
    }
  }
`;
