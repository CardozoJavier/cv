import React, { useState } from 'react';
import parse from 'html-react-parser';
import profileImage from './assets/profile.jpg';
import {
  Container,
  HeaderContainer,
  ImageContainer,
  Image,
  TitleContainer,
  Title,
  SubTitle,
  Label,
  Description,
  Line,
  SectionContainer,
  SideSection,
  LinkContainer,
  Link,
  MainSection,
  SectionTitle,
  SectionSubTitle,
  SectionDescription,
  ListItem,
  BulletContainer,
  BulletTitle,
  DarkModeContainer,
} from './styles';
import { Toggle } from './components';
import './main.css';
import data from './data.json';

const {
  header,
  contact,
  socialMedia,
  education,
  areas,
  languages,
  rewards,
  hardSkills,
  softSkills,
  jobExperience,
  jobReferences,
} = data;

const CV = () => {
  const [className, setClassName] = useState('light-mode');

  const handleMode = () => {
    const updateClassName = className === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setClassName(updateClassName);
    const root = document.getElementById('root');
    root.className = updateClassName;
  };

  return (
    <Container>
      <DarkModeContainer onClick={handleMode} role="button">
        <Label margin="0 10px 0 0" className={`${className} widget`}>{className === 'dark-mode' ? 'Light mode' : 'Dark mode'}</Label>
        <Toggle status={className === 'dark-mode'} />
      </DarkModeContainer>
      <HeaderContainer>
        <ImageContainer>
          <Image src={profileImage} alt="profile-photo" />
        </ImageContainer>
        <TitleContainer>
          <Title className={className}>{header.title}</Title>
          <SubTitle className={className}>{header.subtitle}</SubTitle>
        </TitleContainer>
      </HeaderContainer>
      <Label className={className}>{header.label}</Label>
      <Description className={className}>{parse(header.description)}</Description>
      
      <Line className={className} />

      <SectionContainer>
        <SideSection>
          <Label className={className}>{contact.label}</Label>
          {contact.items.map(item => (
            <Description className={className} key={item} fontSize="14px" lineHeight="1.45">
              {item}
            </Description>
          ))}
          <LinkContainer>
            {socialMedia.map(item => (
              <Link key={item.src} href={item.src} target="_blank">{item.label}</Link>
            ))}
          </LinkContainer>
          <Label className={className} marginTop="25px">{areas.label}</Label>
          <ul>
            {areas.items.map(item => (
              <ListItem className={className} key={item} fontSize="14px" lineHeight="1.45">
                {item}
              </ListItem>
            ))}
          </ul>
        </SideSection>
        <MainSection>
          <Label className={className}>{jobExperience.label}</Label>
          {jobExperience.items.map(item => (
            <>
              <SectionTitle className={className}>{item.title}</SectionTitle>
              <SectionSubTitle className={className}>{item.subtitle}</SectionSubTitle>
              <Description className={className} fontSize="14px">{parse(item.description)}</Description>
              {item.bullets &&
                <BulletContainer>
                  <BulletTitle className={className}>{item.bullets.title}</BulletTitle>
                  <ul>
                    {item.bullets.items.map(bullet => (
                      <ListItem className={className} fontSize="14px" lineHeight="1.45">{parse(bullet)}</ListItem>
                    ))}
                  </ul>
                </BulletContainer>
              }
              <br/>
            </>
          ))}
        </MainSection>
      </SectionContainer>

      <Line className={className} />

      <SectionContainer>
        <SideSection>
          <Label className={className}>{languages.label}</Label>
          {languages.items.map(item => (
            <Description className={className} key={item} fontSize="14px" lineHeight="1.45">
              {parse(item)}
            </Description>
          ))}
        </SideSection>
        <MainSection>
          <Label className={className}>{rewards.label}</Label>
          <ul>
            {rewards.items.map(item => (
              <ListItem className={className} key={item} fontSize="14px" lineHeight="1.45">{parse(item)}</ListItem>
            ))}
          </ul>
        </MainSection>
      </SectionContainer>

      <Line className={className} />

      <SectionContainer>
        <SideSection>
          <Label className={className}>{hardSkills.label}</Label>
          <ul>
            {hardSkills.items.map(item => (
              <ListItem className={className} key={item} fontSize="14px" lineHeight="1.45">{item}</ListItem>
            ))}
          </ul>
          <Label className={className} marginTop="25px">{softSkills.label}</Label>
          <ul>
            {softSkills.items.map(item => (
              <ListItem className={className} key={item} fontSize="14px" lineHeight="1.45">{item}</ListItem>
            ))}
          </ul>
        </SideSection>
        <MainSection>
          <Label className={className} fontWeight="900">{education.label}</Label>
          {education.items.map(item => (
            <>
              <SectionTitle className={className}>{item.title}</SectionTitle>
              <SectionSubTitle className={className}>{parse(item.subtitle)}</SectionSubTitle>
              <Description className={className} width="80%">
                {parse(item.description)}
              </Description>
              <br/>
            </>
          ))}
        </MainSection>
      </SectionContainer>
      
      <Line className={className} />

      <SectionContainer>
        <SideSection />
        <MainSection>
          <Label className={className}>{jobReferences.label}</Label>
          {jobReferences.items.map(item => (
            <>
              <SectionTitle className={className}>{item.name}</SectionTitle>
              <SectionSubTitle className={className}>{item.company}</SectionSubTitle>
              <SectionDescription className={className}>{item.title}</SectionDescription>
              <Description className={className}>
                {parse(item.description)}
              </Description>
              <br/>
              <br/>
            </>
          ))}
        </MainSection>
      </SectionContainer>
    </Container>
  );
};

export default CV;
