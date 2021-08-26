import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const StyledWrapper = styled(Wrapper)`
  height: 360px;
  border-radius: 5px;
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in;
`;
export const Title = styled.div`
  position: relative;
  font-size: 25px;
  color: ${({ theme }: themeProps) => theme.colors.purpleLighten};
  transition: color 0.3s ease-in;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  & > p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;
export const Header = styled.div`
  height: 119px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDarken};
  &:hover {
    cursor: pointer;
    ${Image} {
      opacity: 0.7;
    }
    ${Title} {
      color: ${({ theme }: themeProps) => theme.colors.white};
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const Snippet = styled.div`
  height: 241px;
  padding: 20px;
  background-color: ${({ theme }: themeProps) => theme.colors.purple};
  pointer-events: none;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 201px;
  padding: 15px;
  background-color: ${({ theme }: themeProps) => theme.colors.purpleDark};
  border-radius: 2px;
  color: ${({ theme }: themeProps) => theme.colors.white};
  & > p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;
