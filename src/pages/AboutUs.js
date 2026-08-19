/* eslint-disable no-unused-vars */
import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import TeamCardGrid from "components/cards/ProfileThreeColGridWithSlider";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import store11 from "images/app/stores/store-11.jpeg";
// eslint-disable-next-line no-unused-vars
import store13 from "images/app/stores/store-13.jpeg";
import Store2 from "../../src/sanda-img/store.png";
import motorCycleImgSrc from "images/app/bikers.jpeg";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
const imageCss = tw`rounded-4xl`;
const Description = tw.span`inline-block mt-8 text-appcolor`;
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
        // imageSrc={store11}
      />

<Feature
        heading1={<span tw="text-appcolor">Vision</span>}
        heading2={<span tw="text-appcolor">Mission</span>}
        description2="Creating an environment which motivates and empowers sole traders, SME’s and businesses to thrive by providing direct access to household consumer goods and services."
        description1="To become a leading agent of development for sole traders and businesses trading food and household consumer goods."
      />
      
      {/* <MainFeature1
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
      /> */}
      <MainFeature2
        heading={<>Distribution Operations</>}
        // statistics={[
        //   {
        //     key: "Orders",
        //     value: "94000+",
        //   },
        //   {
        //     key: "Customers",
        //     value: "11000+",
        //   },
        //   {
        //     key: "Chefs",
        //     value: "1500+",
        //   },
        // ]}
        description={
          <Description>
            The company’s operations cover Kano, Jigawa, Katsina, Kaduna and
            Yobe States. To support its retail and distribution operations,
            Sanda Tireda operates a dedicated fleet of vans and
            motorcycles.
            <br />
            <br />
            The fleet is insured and equipped with GPS tracking and fuel
            management systems.
          </Description>
        }
        // primaryButtonText="Order Now"
        // primaryButtonUrl="https://order.now.com"
        // imageInsideDiv={false}
        // imageSrc={motorCycleImgSrc}
        // imageCss={Object.assign(tw`bg-cover`, imageCss)}
        // imageContainerCss={tw`md:w-1/2 h-auto`}
        // imageDecoratorBlob={true}
        // imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <TeamCardGrid />
      <Footer />
    </AnimationRevealPage>
  );
};
