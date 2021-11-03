import React from 'react';
import FeedBase from 'components/molecules/FeedBase/FeedBase';
import { Image, Content } from './SongOfTheDay.styles';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';

const SongOfTheDay: React.FC = () => {
  const { data, loading } = useQuery(`{songs(last: 1){id,image{url},name}}`);

  return (
    <FeedBase title="Song of The Day" height="300" bgColor="#313044">
      {loading ? (
        <Loading autoSize />
      ) : (
        <>
          <Image src={data.songs[0].image.url} alt={data.songs[0].name} />
          <Content href={`https://genius.com/search?q=${data.songs[0].name}`} target="_blank">
            <p>{data.songs[0].name}</p>
          </Content>
        </>
      )}
    </FeedBase>
  );
};

export default SongOfTheDay;
