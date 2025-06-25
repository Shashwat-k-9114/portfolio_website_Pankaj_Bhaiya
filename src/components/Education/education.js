import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './EducationStyles';

const educationData = [
  { year: '2018 - 2021', degree: 'Bachelors in Computer Applications (BCA)', institution: 'Birla Institute of Technology, Noida' },
  { year: '2022 - 2024', degree: 'Masters in Computer Applications (MCA)', institution: 'Birla Institute of Technology, Noida' },
];

const Education = () => (
  <Section id="education">
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {educationData.map((edu, index) => (
        <Box key={index}>
          <BoxNum>{edu.year}</BoxNum>
          <BoxText>
            <strong>{edu.degree}</strong><br />
            {edu.institution}
          </BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider /> */}
  </Section>
);

export default Education;
