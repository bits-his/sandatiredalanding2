import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import store11 from "images/app/stores/store-11.jpeg";
import store13 from "images/app/stores/store-13.jpeg";
import Store2 from "../../src/sanda-img/store.png";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={
          <Subheading style={{ color: "brown" }}>About Us</Subheading>
        }
        heading="Sanda Tireda Limited is a distribution and logistics company headquartered in Kano, Nigeria."
        description="“SANDA TIREDA – YOUR DISTRIBUTION PARTNER FOR NORTHERN NIGERIA”"
        buttonRounded={false}
        primaryButtonText="About Us"
        imageSrc={store11}
      />
      <MainFeature1
        subheading={<Subheading>Our Portfolio</Subheading>}
        heading="MISSION"
        buttonRounded={false}
        description="Creating an environment which motivates and empowers sole traders, SME’s and businesses to thrive by providing direct access to household consumer goods and services."
        primaryButtonText="View Portfolio"
        imageSrc={Store2}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>Vision</Subheading>}
        heading="VISION"
        buttonRounded={false}
        description="To become a leading agent of development for sole traders and businesses trading food and household consumer goods."
        primaryButtonText="View Portfolio"
        imageSrc={store13}
      />
      <TeamCardGrid />
      <Footer />
    </AnimationRevealPage>
  );
};
