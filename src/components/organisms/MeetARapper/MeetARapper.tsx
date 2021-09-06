import React from 'react';
import FeedBase from 'components/molecules/FeedBase/FeedBase';
import { Image, Content } from './MeetARapper.styles';
import Loading from 'components/molecules/Loading/Loading';
import { useQuery } from 'graphql-hooks';

const MeetARapper: React.FC = () => {
  const { data, loading } = useQuery(`{rappers(last: 1){id,image{url},name,description}}`);

  return (
    <FeedBase title="Meet A Rapper" height="250" bgColor="#313044">
      {loading ? (
        <Loading autoSize />
      ) : (
        <>
          <Image src={data.rappers[0].image.url} alt={data.rappers[0].name} />
          <Content href={`https://genius.com/artists/${data.rappers[0].name}`} target="_blank">
            <p>{data.rappers[0].name}</p>
          </Content>
        </>
      )}
    </FeedBase>
  );
};

export default MeetARapper;
