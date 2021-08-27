import React from 'react';
import AboutProfile from 'components/organisms/AboutProfile/AboutProfile';
import Bio from 'components/organisms/Bio/Bio';
import { Wrapper } from './Profile.styles';
import SavedArticles from 'components/organisms/SavedArticles/SavedArticles';

const Profile = (): JSX.Element => {
  return (
    <Wrapper>
      <AboutProfile />
      <Bio />
      <SavedArticles />
    </Wrapper>
  );
};

export default Profile;
