import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import MainFeature from "components/features/TwoColWithButton.js";

import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import ruwaImg from "../../images/ruwa.jpg";
import ruwaImg2 from "../../images/ruwa2.jpg";
// sandaKirana.jpg

export default function CSR() {
  const Description = tw.span`inline-block mt-8 text-appcolor`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-appcolor px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />

      <MainFeature
        showMap={false}
        bg={false}
        heading={<></>}
        description={
          <Description>
            &nbsp;
            <HighlightedTextInverse>Sanda Tireda</HighlightedTextInverse>
            &nbsp; aspires to provide a platform which enhance a empowerment and sustainability. After the successful
            completion of our inaugural competition where cash prizes of
            N250,000, N500,000 and N1,000,000 given to 3 winners.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={ruwaImg}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        heading={<></>}
        bg={true}
        description={
          <Description>
            We are delighted to announce our next initiative,the uwar gida business training,a two days event curated by sandatireda for women owned  enterprises.to teach them  the difference between merely running a business and building a successful growth-oriented enterprise. The workshop will provide participants with practical tools to critically assess their personal and business competencies and proven strategies to improve, eventually equipping them with the right mind-set and motivation that will bring about concrete and measurable changes in their own business and delivered in hausa language.
          </Description>
        }
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={ruwaImg2}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
