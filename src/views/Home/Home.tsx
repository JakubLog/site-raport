import React from 'react';
import Hero from 'components/molecules/Hero/Hero';
import Section from 'components/molecules/Section/Section';
import LatestNews from 'components/organisms/LatestNews/LatestNews';
import HeroSrc from 'assets/img/hero.jpg';
import Newsletter from 'components/molecules/Newsletter/Newsletter';
import { Wrapper, AboutUs } from './Home.styles';

const Home = (): JSX.Element => {
  return (
    <Wrapper>
      <Hero />
      <Section title="Latest News 📰">
        <LatestNews
          title="SBM Festival v.5 - Zobacz nasz opis wydarzenia roku"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem  Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing elit"
          imageSrc={HeroSrc}
        />
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
