import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Button } from 'components/atoms/Button/Button';

export const StyledWrapper = styled(Wrapper)`
  padding: 30px;
  & > * {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 300px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Informations = styled(Wrapper)`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  padding: 15px;
  border-radius: 10px;
  * {
    margin: 0;
    text-align: center;
  }
`;
export const Name = styled.h2`
  font-weight: 400;
`;
export const Email = styled.a`
  text-decoration: none;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  opacity: 0.7;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
