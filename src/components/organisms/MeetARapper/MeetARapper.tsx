import React from 'react';
import FeedBase from 'components/molecules/FeedBase/FeedBase';
import { Image, Content } from './MeetARapper.styles';
import Loading from 'components/molecules/Loading/Loading';
import { useQuery } from 'graphql-hooks';

const MeetARapper = (): JSX.Element => {
  const { data, loading } = useQuery(`{rappers(last: 1){id,image{url},name,description}}`);

  return (
    <FeedBase title="Meet A Rapper" height="250" bgColor="#313044">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image src={data.rappers[0].image.url} alt={data.rappers[0].name} />
          <Content>
            <p>{data.rappers[0].name}</p>
          </Content>
        </>
      )}
    </FeedBase>
  );
};

export default MeetARapper;
