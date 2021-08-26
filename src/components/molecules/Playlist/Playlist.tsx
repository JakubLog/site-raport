import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Image, Name } from './Playlist.styles';

interface props {
  name: string;
  imageSrc: string;
  link: string;
}

const Playlist = ({ name, imageSrc, link }: props): JSX.Element => {
  return (
    <Wrapper href={link} target="_blank">
      <Image src={imageSrc} alt={name} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Playlist;
