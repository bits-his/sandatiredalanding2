/* eslint-disable no-unused-vars */
import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Features from "components/features/ThreeColSimple.js";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import busImg from "../../images/bus.jpg";
import uwargida from '../../images/uwargida.jpg'
import andeideita from '../../images/andeideita.jpg'
import logo2 from "../../images/app/logo2.png";
import { Testimonial } from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js';

export default function Direba() {
  const Description = tw.span`inline-block mt-8 text-appcolor`;
  const HighlightedText = tw.span`bg-appcolorfaded px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-appcolor px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>
      <Header />
    <div>
    
    </div>
      <MainFeature
          showMap={false}
          bg={false}
          heading={<><img src={logo2} alt="logo" className="ReignsB" /></>}
          description={
            <Description>
              Sanda &nbsp;
              <HighlightedTextInverse>Direba</HighlightedTextInverse>
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

    <Feature
        heading1={<span tw="text-appcolor">Vision</span>}
        description1="To build the economic resilience of women all over Northern Nigeria."
        heading2={<span tw="text-appcolor">Mission</span>}
        description2="To empower women-owned enterprises and to enhance capacity development through the use of technology."
      />

<Features
  bg=""

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
        <MainFeature
          showMap={false}
          bg={false}
          heading={<>Sanda Tireda Routes</>}
          description={
            <Description> 
              <div className="table">
                <table>
                <tbody className="tbody1">Hotoro – Bata</tbody>
              <tbody className="tbody1">Katsina Road</tbody>
              <tbody className="tbody1">Zaria Road</tbody>
                </table>
                <table>
                <tbody className="tbody1">Hotoro – IBB Way</tbody>
              <tbody className="tbody1">Sharada</tbody>
              <tbody className="tbody1">Hadeja Road</tbody>
              <tbody className="tbody1">Kwana Hudu</tbody>
                </table>
             
              </div>
        {/* <ol>
        <li>Hotoro – Bata</li>
        <li>Hotoro – IBB Way</li>
        <li>Zaria Road</li>
        <li>Katsina Road</li>
        <li>Sharada</li>
        <li>Hadeja Road</li>
        <li>Kwana Hudu</li>
       </ol>   */}
            </Description>
          }
        />



        
      <MainFeature
        showMap={false}
        bg={false}
        heading={<>Uwar Gida</>}
        description={
          <Description>
            The purple Minibus is exclusively designed for female passengers in Kano metropolis.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={uwargida}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature
        showMap={false}
        bg={false}
        heading={<>An Dai Dai Ta</>}
        description={
          <Description>
            The yellow & purple Passenger Truck accommodates both gender of commuters within the Kano metropolis.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText="Latest Offers"
        imageSrc={andeideita}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />




      {/* <h1>Remember Sadiq Haruna</h1> */}
      {/* <Features
        bg="white"
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
      /> */}




      <Footer />
    </AnimationRevealPage>
  );
}
