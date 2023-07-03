import React from "react";
import {
  AboutLabel,
  AboutPage,
  AboutSection,
  AboutSectionLeft,
  AboutSectionRight,
  AboutTitle,
  Button,
  ButtonLabel,
  ImageFrame,
  Page,
} from "../Style";
import { Label } from "../Style";
import Image from "../Images/resim.jpg";
import { LeftArrow } from "../Images/Icon";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Page>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>
          <ButtonLabel>
            <LeftArrow></LeftArrow>Main Page
          </ButtonLabel>
        </Button>
      </Link>

      <AboutTitle>Who Am I ?</AboutTitle>

      <AboutSection>
        <AboutSectionLeft>
          <AboutLabel>
            Like most young people, my passion for computers started at a young
            age with computer games. After solving the bugs I experienced in
            games, my passion for computers increased even more. My entry into
            computer engineering was when I met Python and coding at the end of
            high school. Then I became interested in C and C++ during my
            university education. With the advancement of technology and the
            industry, I met Javascript. I am currently trying to specialize in
            this subject. In my spare time, I share articles under the name of
            Royto community, which we created in the fields of gaming,
            programming and technology.
          </AboutLabel>
          <AboutLabel style={{ paddingTop: "40px" }}>
            If you are curious about my profile, you can check my CV.
          </AboutLabel>
        </AboutSectionLeft>
        <AboutSectionRight>
          <ImageFrame src={Image} alt="Berkay Şerbetçi"></ImageFrame>
        </AboutSectionRight>
      </AboutSection>
    </Page>
  );
}
