import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { themeProps } from 'assets/css/theme';

export const StyledButton = styled(Button)<{ isActive: boolean }>`
  width: fit-content;
  padding: 0;
  box-shadow: none;
  background-color: transparent;
  color: ${({ theme }: themeProps) => theme.colors.purpleLight};
  &:hover,
  &:focus {
    background-color: unset;
    color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  }
  & > * {
    margin: 0;
  }
`;
