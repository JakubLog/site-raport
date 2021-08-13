import React from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import LatestNews from 'components/organisms/LatestNews/LatestNews';
import Newsletter from 'components/molecules/Newsletter/Newsletter';
import { Wrapper, AboutUs } from './Home.styles';
import { useQuery } from 'graphql-hooks';
import Loading from 'components/molecules/Loading/Loading';

interface newsProps {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

const Home = (): JSX.Element => {
  const { data, loading: isLoadingNews } = useQuery(`{articles(last: 1){id,image{url},title,description}}`);

  return (
    <Wrapper>
      <Hero />
      <Section title="Latest News 📰">
        {isLoadingNews ? (
          <Loading />
        ) : (
          data.articles.map(({ id, title, description, image: { url } }: newsProps) => (
            <LatestNews key={id} postId={id} title={title} description={description} imageSrc={url} />
          ))
        )}
      </Section>
      <Section title="About us">
        <AboutUs>
          Jesteśmy grupą która kocha rap i w tym celu dzieli się swoimi źródłami i wiedzą ze swoimi fanami. Chcemy wam dostarczać jak najszybsze i
          najświeższe informacje z tego RapGry. Rap to sztuka jak to powiedział Białas, więc i my chcemy się nią dzielić.
        </AboutUs>
      </Section>
      <Section title="Newsletter ✉️">
        <Newsletter />
      </Section>
    </Wrapper>
  );
};

export default Home;
