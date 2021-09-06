import React from 'react';
import SongOfTheDay from 'components/organisms/SongOfTheDay/SongOfTheDay';
import MeetARapper from 'components/organisms/MeetARapper/MeetARapper';
import Playlists from 'components/organisms/Playlists/Playlists';
import { Wrapper } from './Feeds.styles';

const Feeds: React.FC = () => {
  return (
    <Wrapper>
      <SongOfTheDay />
      <Playlists />
      <MeetARapper />
    </Wrapper>
  );
};

export default Feeds;
