import styled from 'styled-components';
import { themeProps } from 'assets/css/theme';
import { Title } from 'components/atoms/Title/Title';

export const Wrapper = styled.div``;

export const SectionTitle = styled(Title)`
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
`;

export const SectionBody = styled.div`
  padding-top: 30px;
`;
