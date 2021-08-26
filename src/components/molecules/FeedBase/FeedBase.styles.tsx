import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const StyledWrapper = styled(Wrapper)<{ height: string; bgColor: string }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  display: grid;
  grid-template-rows: 50px auto;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Content = styled.div`
  position: relative;
`;
