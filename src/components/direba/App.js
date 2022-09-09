import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import busImg from "../../images/bus.jpg";

export default function Direba() {
  const Description = tw.span`inline-block mt-8 text-white`;
  const HighlightedText = tw.span`bg-appcolor text-white px-4 transform -skew-x-12 inline-block`;
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
            Sanda &nbsp;
            <HighlightedTextInverse>Direba </HighlightedTextInverse>
            &nbsp; provides transportation services for commuters within the
            Kano metropolis. Our goal is to establish a service that is safe,
            reliable, affordable, and comfortable for all customers. Our fleet
            consists of two major types of vehicles.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={busImg}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Features
        bg="appColor"
        cards={[
          {
            title: "Uwar Gida",
            description:
              "The purple Minibus is exclusively designed for female passengers in Kano metropolis.",
          },
          {
            title: "An Dai Dai Ta:",
            description:
              "The yellow & purple Passenger Truck accommodates both gender of commuters within the Kano metropolis.",
          },
        ]}
        imageContainerCss={tw`p-2!`}  
        imageCss={tw`w-20! h-20!`}
      />

      <Features
        heading={
          <>
            The <HighlightedText> Sanda Direba</HighlightedText> Difference.
          </>
        }
        cards={[
          {
            title: "Safety",
            description:
              "Great caution is taken to ensure our customers’ safety and satisfaction.  ",
          },
          {
            title: "Honesty & Commitment",
            description:
              "Our drivers are honest when conducting ourselves in our operation.",
          },
          {
            title: "Employment",
            description:
              "Sanda Direba has a fleet of 16 drivers. It is believed that mobility is a key driver of development, with po sitive economic and social benefits from investment in transport.",
          },0
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />

      <Footer />
    </AnimationRevealPage>
  );
}
