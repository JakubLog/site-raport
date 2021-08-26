import { themeProps } from 'assets/css/theme';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const LoadingWrapper = styled.div<{ autoSize: boolean }>`
  width: 100%;
  height: ${({ autoSize }) => (autoSize ? '100%' : '600px')};
  background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled.div`
  background: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  width: 120px;
  height: 120px;
  animation: ${rotate} 3s forwards infinite;
  border-radius: 50%;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
    width: 30px;
    height: 50px;
  }
`;

export const LoadingText = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: 50px;
    color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
    margin-right: 50px;
  }
`;
