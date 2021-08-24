import React from 'react';
import PropTypes from 'prop-types';
import { ShareIcons } from './Share.styles';
import {
  FacebookShareButton as FBShare,
  FacebookIcon as FBIcon,
  TwitterShareButton as TWShare,
  TwitterIcon as TWIcon,
  LinkedinShareButton as LIShare,
  LinkedinIcon as LIIcon
} from 'react-share';

interface props {
  url: string;
}

const Share = ({ url }: props): JSX.Element => {
  return (
    <ShareIcons>
      <FBShare url={url}>
        <FBIcon round size="30" />
      </FBShare>
      <TWShare url={url}>
        <TWIcon round size="30" />
      </TWShare>
      <LIShare url={url}>
        <LIIcon round size="30" />
      </LIShare>
    </ShareIcons>
  );
};

Share.propTypes = {
  url: PropTypes.string.isRequired
};

export default Share;
