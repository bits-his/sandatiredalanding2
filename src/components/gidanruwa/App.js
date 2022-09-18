import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";

import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import pipe from "../../images/new8.jpg";
import Watertank from "../../images/new9.jpg";
import ruwaImg2 from "../../images/ruwa2.jpg";
import waterguard from "../../images/waterguard.png";

export default function Ruwa() {
  const Description = tw.span`inline-block mt-8 text-appcolor`;
  const HighlightedTextInverse = tw.span` text-appcolor px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />

      <MainFeature
        showMap={false}
        bg="appcolor"
        heading={<></>}
        description={
          <Description>
            Sanda &nbsp;
            <HighlightedTextInverse>Ruwan Gida </HighlightedTextInverse>
            &nbsp; Seeks to solve the incessant water problem in Kano by providing neighborhoods with clean and easily accessible water to the last mile. 
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={pipe}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Feature
        heading1={<span tw="text-appcolor">Vision</span>}
        description1="To provide clean and accessible water to all."
        heading2={<span tw="text-appcolor">Mission</span>}
        description2="We aspire to become the leading provider of clean and accessible water in Northern Nigeria."
      />
      <MainFeature2
        heading={<></>}
        bg="appbg"
        description={
          <Description>
            Sanda Ruwan Gida uses mobile tanks ranging from 1,000 liters to
            30,000 liters to distribute water to parts of Kano with severe water
            scarcity. The cost of water is subsidized to make it affordable to
            the poorest in the fringes of the urban areas in Kano State. In some
            neighbourhoods, Sanda has also created Sub depots where consumers
            and come to buy small quantities. Sanda Ruwan Gida...Water for All!
          </Description>
        }
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={Watertank}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <MainFeature2
        heading={<></>}
        description={
          <Description>
            Lack of access to safe water sources is a leading risk factor for
            infectious diseases, including cholera, diarrhea, dysentery,
            hepatitis A, typhoid and polio. It also exacerbates malnutrition,
            and in particular, childhood.
          </Description>
        }
        bg={false}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={waterguard}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={false}
      />
      {/* <MainFeature2
        heading={<>About us</>}
        description={<Description></Description>}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={ruwaImg3}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      /> */}

      <Testimonial
         bg={true}
        subheading=""
        quote={
          <>
            As a divorcee, Sanda Uwargida has made it possible for me to send my
            children to school and take care of my home
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
}
