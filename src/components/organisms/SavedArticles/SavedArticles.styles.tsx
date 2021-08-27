import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Title } from 'components/atoms/Title/Title';

export const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-direction: column;
  & > * {
  }
`;
export const StyledTitle = styled(Title)`
  font-size: 30px;
  font-weight: 400;
`;
export const StyledSubTitle = styled(Title)`
  font-size: 20px;
  opacity: 0.7;
  text-align: center;
  font-weight: 400;
`;
export const Content = styled.div`
  scroll-snap-type: y mandatory;
  padding: 30px;
  max-height: 560px;
  overflow: auto;
  background-color: ${({ theme }: themeProps) => theme.colors.purple};
  & > * {
    scroll-snap-align: center;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  }
`;

export const Fav = styled.span`
  font-weight: bold;
`;
