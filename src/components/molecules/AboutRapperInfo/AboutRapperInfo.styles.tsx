import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const InfoWrapper = styled.div`
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RapperImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0.8;
  border-radius: 10px;
`;

export const RapperParagraph = styled(Paragraph)`
  width: 60%;
  margin: 0 auto;
`;
