import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio! <br />
          My name is Pankaj
        </SectionTitle>
        <SectionText>
          Merging code with creativity, I craft digital experiences that feel as intuitive as they are inspired.
          </SectionText>

        
        <a href="/resume.pdf" download>
          <Button>My Resume</Button>
        </a>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
