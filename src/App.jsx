import React from 'react';
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
} from './styles';
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

const CV = () => (
  <Container>
    <HeaderContainer>
      <ImageContainer>
        <Image src={profileImage} alt="profile-photo" />
      </ImageContainer>
      <TitleContainer>
        <Title>{header.title}</Title>
        <SubTitle>{header.subtitle}</SubTitle>
      </TitleContainer>
    </HeaderContainer>
    <Label>{header.label}</Label>
    <Description>{parse(header.description)}</Description>
    
    <Line />

    <SectionContainer>
      <SideSection>
        <Label>{contact.label}</Label>
        {contact.items.map(item => (
          <Description fontSize="14px" lineHeight="1.45">
            {item}
          </Description>
        ))}
        <LinkContainer>
          {socialMedia.map(item => (
            <Link href={item.src} target="_blank">{item.label}</Link>
          ))}
        </LinkContainer>
        <Label marginTop="25px">{areas.label}</Label>
        <ul>
          {areas.items.map(item => (
            <ListItem fontSize="14px" lineHeight="1.45">
              {item}
            </ListItem>
          ))}
        </ul>
      </SideSection>
      <MainSection>
        <Label>{jobExperience.label}</Label>
        {jobExperience.items.map(item => (
          <>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionSubTitle>{item.subtitle}</SectionSubTitle>
            <Description fontSize="14px">{parse(item.description)}</Description>
            {item.bullets &&
              <BulletContainer>
                <BulletTitle>{item.bullets.title}</BulletTitle>
                <ul>
                  {item.bullets.items.map(bullet => (
                    <ListItem fontSize="14px" lineHeight="1.45">{parse(bullet)}</ListItem>
                  ))}
                </ul>
              </BulletContainer>
            }
            <br/>
          </>
        ))}
      </MainSection>
    </SectionContainer>

    <Line />

    <SectionContainer>
      <SideSection>
        <Label>{languages.label}</Label>
        {languages.items.map(item => (
          <Description fontSize="14px" lineHeight="1.45">
            {parse(item)}
          </Description>
        ))}
      </SideSection>
      <MainSection>
        <Label>{rewards.label}</Label>
        <ul>
          {rewards.items.map(item => (
            <ListItem fontSize="14px" lineHeight="1.45">{parse(item)}</ListItem>
          ))}
        </ul>
      </MainSection>
    </SectionContainer>

    <Line />

    <SectionContainer>
      <SideSection>
        <Label>{hardSkills.label}</Label>
        <ul>
          {hardSkills.items.map(item => (
            <ListItem fontSize="14px" lineHeight="1.45">{item}</ListItem>
          ))}
        </ul>
        <Label marginTop="25px">{softSkills.label}</Label>
        <ul>
          {softSkills.items.map(item => (
            <ListItem fontSize="14px" lineHeight="1.45">{item}</ListItem>
          ))}
        </ul>
      </SideSection>
      <MainSection>
        <Label fontWeight="900">{education.label}</Label>
        {education.items.map(item => (
          <>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionSubTitle>{parse(item.subtitle)}</SectionSubTitle>
            <Description width="80%">
              {parse(item.description)}
            </Description>
            <br/>
          </>
        ))}
      </MainSection>
    </SectionContainer>
    
    <Line />

    <SectionContainer>
      <SideSection />
      <MainSection>
        <Label>{jobReferences.label}</Label>
        {jobReferences.items.map(item => (
          <>
            <SectionTitle>{item.name}</SectionTitle>
            <SectionSubTitle>{item.company}</SectionSubTitle>
            <p>{item.title}</p>
            <Description>
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

export default CV;
