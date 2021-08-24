import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div<{ fullScreen: boolean }>`
  --purple: ${({ theme }: themeProps) => theme.colors.purpleDark};
  ${({ fullScreen }) =>
    fullScreen
      ? `
    border-bottom: 5px solid var(--purple);
    padding-bottom: 30px;
    @media(min-width: 768px) {
      border-bottom: 0;
      padding: 0;
    }
  `
      : null}
`;

export const SectionTitle = styled(Title)<{ fullScreen: boolean }>`
  font-size: 35px;
  font-weight: 400;
  padding-bottom: 15px;
  width: fit-content;
  padding-inline: 40px;
  border-bottom: 5px solid ${({ theme }: themeProps) => theme.colors.purpleDark};
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 45px;
    padding-inline: 60px;
  }
  ${({ fullScreen }) =>
    fullScreen
      ? `
    width: 100% !important;
  padding-inline: 0px !important;
  border-bottom: 5px solid var(--purple) !important;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding-left: 10px !important;
  }
  `
      : null}
`;

export const SectionBody = styled.div`
  padding-top: 30px;
`;
