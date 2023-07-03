import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "../Images/image.jpg";
import {
  HeaderTop,
  NameLeft,
  Label,
  HeaderMain,
  Type,
  HeaderMainLabel,
  HeaderSection,
  RightSection,
  IMGContainer,
  Page,
  TechStackLabel,
  TechAnimation,
  IconContainer,
  MenuLabel,
  ContactMenu,
  ContactMenuItem,
  ContactMenuItems,
  CloseToggle,
} from "../Style";
import {
  ExpressIcon,
  GraphQLIcon,
  JSIcon,
  JestIcon,
  MongoIcon,
  NodeIcon,
  NpmIcon,
  ReactIcon,
  CloseIcon,
  GithubLogo,
  GmailLogo,
  LinkedinLogo,
} from "../Images/Icon";
export default function MainPage() {
  const [isOpen, setOpen] = useState(false);
  const handleToogle = () => {
    setOpen(!isOpen);
  };
  const handleCloseToggle = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const HandleClickButton = (url) => {
    const NewPage = window.open(url, "_blank");
    NewPage.focus();
  };
  return (
    <Page>
      <HeaderTop>
        <Label
          onClick={() =>
            HandleClickButton(
              "https://github.com/BerkaySerbetci?tab=repositories"
            )
          }
        >
          Projects
        </Label>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <Label>About</Label>
        </Link>
        <MenuLabel onClick={handleToogle}>Contact</MenuLabel>
        <ContactMenu isOpen={isOpen}>
          `
          <CloseToggle onClick={handleCloseToggle}>
            <CloseIcon />
          </CloseToggle>
          <ContactMenuItems>
            <ContactMenuItem>
              <GithubLogo />
            </ContactMenuItem>
            <ContactMenuItem>
              <GmailLogo />
            </ContactMenuItem>
            <ContactMenuItem>
              <LinkedinLogo />
            </ContactMenuItem>
          </ContactMenuItems>
        </ContactMenu>
      </HeaderTop>
      <HeaderSection>
        <HeaderMain>
          <Type>Hello , I'm Berkay </Type>
          <HeaderMainLabel>
            I'm a web developer based in Turkey.While developing the project, I
            use Javascript and ReactJs, and on the backend side, I use GraphQL
            and NodeJs. I am currently trying to improve myself in design
            patterns and GO.
          </HeaderMainLabel>
        </HeaderMain>
        <RightSection>
          <img src={Image} style={{ borderRadius: "50%" }}></img>
        </RightSection>
      </HeaderSection>
      <TechStackLabel>Tech Stack</TechStackLabel>
      <IconContainer>
        <JSIcon />

        <ReactIcon />
        <GraphQLIcon />
        <JestIcon />
        <NodeIcon />
        <MongoIcon />
        <NpmIcon></NpmIcon>
        <ExpressIcon></ExpressIcon>
      </IconContainer>
    </Page>
  );
}
