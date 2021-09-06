import React from 'react';
import FeedBase from 'components/molecules/FeedBase/FeedBase';
import { PlaylistsList } from './Playlists.styles';
import Playlist from 'components/molecules/Playlist/Playlist';

const Playlists: React.FC = () => {
  return (
    <FeedBase title="Playlists" height="400" bgColor="#05001A">
      <PlaylistsList>
        <Playlist
          name="Rap"
          imageSrc="https://s-trojmiasto.pl/zdj/c/n/9/2454/3000x0/2454219.jpg"
          link="https://open.spotify.com/playlist/7zIXH9Cg5AAD3Pdb6phVTp"
        />
        <Playlist
          name="Rap bez przekleństw"
          imageSrc="https://i.iplsc.com/1/0007LJ59GGUX61OA-C321-F4.jpg"
          link="https://open.spotify.com/playlist/0klAcUdHDuEQlRGK0kKutm"
        />
        <Playlist
          name="Chill i utopia"
          imageSrc="https://w8m2g3k6.rocketcdn.me/wp-content/uploads/2020/07/white2115-1.jpg"
          link="https://open.spotify.com/playlist/4wOQh2JU64OXnZz0XsE7nL"
        />
        <Playlist
          name="Sad Mood"
          imageSrc="https://skrr.pl/wp-content/uploads/2019/03/xxx.jpg"
          link="https://open.spotify.com/playlist/1aEeSavjpduWrpT5Zpcc2b"
        />
      </PlaylistsList>
    </FeedBase>
  );
};

export default Playlists;
