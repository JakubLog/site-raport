import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from 'components/atoms/Bold/Bold';
import { InfoWrapper, RapperImage, RapperParagraph } from './AboutRapperInfo.styles';

interface props {
  name: string;
  description: string;
  imageSrc: string;
}

const AboutRapperInfo = ({ name, description, imageSrc }: props): JSX.Element => {
  return (
    <InfoWrapper>
      <RapperImage src={imageSrc} alt={name} />
      <RapperParagraph>
        <Bold>{name}</Bold> - {description}
      </RapperParagraph>
    </InfoWrapper>
  );
};

AboutRapperInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default AboutRapperInfo;
