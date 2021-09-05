import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, Block, Header, Button } from './Favorite.styles';
import { useHistory } from 'react-router-dom';

interface props {
  postId: string;
  iteration: number;
}

const Favorite: React.FC<props> = ({ postId, iteration }) => {
  const history = useHistory();

  return (
    <StyledWrapper>
      <Block>
        <Header>#{++iteration}</Header>
        <Button onClick={() => history.push(`/post/${postId}`)}>Przeczytaj</Button>
      </Block>
    </StyledWrapper>
  );
};

Favorite.propTypes = {
  postId: PropTypes.string.isRequired,
  iteration: PropTypes.number.isRequired
};

export default Favorite;
