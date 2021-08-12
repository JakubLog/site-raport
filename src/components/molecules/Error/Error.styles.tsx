import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';
import styled, { keyframes } from 'styled-components';

const shrink = keyframes`
    from {
        transform: translateX(-50%) scaleX(1);
    } to {
        transform: translateX(-50%) scaleX(0)
    }
`;

const slideIn = keyframes`
    from {
        transform: translateX(-1000%)
    } to {
        transform: translateX(-50%);
    }
`;
const slideOut = keyframes`
    from {
        transform: translateX(-50%)
    } to {
        transform: translateX(1000%);
    }
`;

export const Wrapper = styled.div`
  --red: ${({ theme }: themeProps) => theme.colors.error};
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translateX(-1000%);
  background-color: transparent;
  width: 350px;
  height: 200px;
  border-radius: 15px;
  border: 4px solid var(--red);
  padding: 15px 20px;
  animation: ${slideIn} 3s forwards, ${slideOut} 3s 8s forwards;
  &::after,
  &::before {
    content: '';
    width: 50%;
    height: 5px;
    border-radius: 30px;
    background-color: var(--red);
    position: absolute;
    bottom: 20px;
    left: 50%;
  }
  &::before {
    opacity: 0.4;
    transform: translateX(-50%);
  }
  &::after {
    opacity: 1;
    transform: translateX(-50%) scaleX(1);
    animation: ${shrink} 5s 3s;
    transform-origin: left top;
  }
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ErrorTitle = styled(Title)`
  font-size: 25px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: var(--red);
  border-bottom: 3px solid var(--red);
`;

export const ErrorContent = styled.p`
  margin: 0;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--red);
`;
