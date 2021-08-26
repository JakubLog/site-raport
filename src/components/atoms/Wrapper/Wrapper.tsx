import { themeProps } from 'assets/css/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }: themeProps) => theme.colors.purple};
  border-radius: 25px;
  box-shadow: ${({ theme }: themeProps) => theme.shadows.primary};
  overflow: hidden;
`;
