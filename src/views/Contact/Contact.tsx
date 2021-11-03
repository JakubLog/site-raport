import Details from 'components/molecules/Details/Details';
import Section from 'components/molecules/Section/Section';
import React from 'react';
import { Wrapper } from './Contact.styles';

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <Section title="Contact" fullScreen>
        <Details title="Telephone number" content="Our telephone number is: +48 123 123 123" />
        <Details title="Email address" content="Our email is: your@email.com" />
        <Details title="I don't know but must be 3" content="I very like Prof.Feynman quotes :D" />
      </Section>
    </Wrapper>
  );
};

export default Contact;
