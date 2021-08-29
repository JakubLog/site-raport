import Editable from 'components/organisms/Editable/Editable';
import { useProfile } from 'hooks/useProfile';
import React from 'react';
import { StyledWrapper, Header, StyledTitle, Content, StyledParagraph } from './Bio.styles';

const Bio = (): JSX.Element => {
  const { user } = useProfile();

  return (
    <StyledWrapper>
      <Header>
        <StyledTitle>Opowiedz coś o sobie</StyledTitle>
      </Header>
      <Content>
        <Editable afterEdit={<StyledParagraph>{user.bio}</StyledParagraph>} name="BIO" isArea />
      </Content>
    </StyledWrapper>
  );
};

export default Bio;
