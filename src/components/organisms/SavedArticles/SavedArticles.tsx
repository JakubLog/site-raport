import React from 'react';
import LatestNews from '../ShortNews/ShortNews';
import { StyledWrapper, Header, StyledTitle, StyledSubTitle, Content, Fav } from './SavedArticles.styles';

const SavedArticles = (): JSX.Element => {
  return (
    <StyledWrapper>
      <Header>
        <StyledTitle>Ulubione artykuły</StyledTitle>
        <StyledSubTitle>
          Obecnie posiadasz <Fav>2/5</Fav> postów w swoim przenośnym schowku. Zostaną one tu tak długo jak tylko będziesz chciał, a jeżeli ci się już
          znudzą, możesz je usunąć i zastąpić nowymi!
        </StyledSubTitle>
      </Header>
      <Content>
        <LatestNews
          title="SBM Festival v.5 - zobacz nasz opis wydarzenia roku!"
          description="Wczoraj miało miejsce wydarzenie które przez wiele osób (w tym nas) jest nazywane wydarzeniem roku na scenie rapowej. Mowa tu oczywiście o SBM Festival’u który zrzesza fanów wszystkich twórz popularnej wytwór..."
          imageSrc="https://avatars.githubusercontent.com/u/77537823?v=4"
          postId="233"
        />
        <LatestNews
          title="SBM Festival v.5 - zobacz nasz opis wydarzenia roku!"
          description="Wczoraj miało miejsce wydarzenie które przez wiele osób (w tym nas) jest nazywane wydarzeniem roku na scenie rapowej. Mowa tu oczywiście o SBM Festival’u który zrzesza fanów wszystkich twórz popularnej wytwór..."
          imageSrc="https://avatars.githubusercontent.com/u/77537823?v=4"
          postId="233"
        />
      </Content>
    </StyledWrapper>
  );
};

export default SavedArticles;
