/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import gidaImg from "../../images/gida.jpg";
export default function Map() {
  const Description = tw.span`inline-block mt-8 text-appcolorfaded`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-appcolor px-4 transform -skew-x-12 inline-block`;
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
            <HighlightedTextInverse>Uwar Gida</HighlightedTextInverse>
            &nbsp; Similar to Kirana’s, this business unit is a womencooperative-based initiative that identifies at home traders and provides goods on credit for onward sales to house wives.  This creates  business opportunities for women from the comfort of their homes hence the name ‘Uwargida’ meaning mother of the house.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={gidaImg}
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
      <MainFeature2
        heading={<></>}
        bg="appbg"
        description={
          <Description>
            Women are provided the opportunity to expand their small businesses
            from the comfort of their homes. Uwar Gida Project was created to
            support women who are already in the business but have insufficient
            capital to grow. Uwar Gida adopts a cooperative system which
            minimizes the credit risk due to group trusts They can also access
            the benefits of the Kirana if they meet the terms and conditions.
          </Description>
        }
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={false}
      />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124888.39223894956!2d8.467080010570168!3d11.990945673377865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80eff0fff3f1%3A0x85ff8700a3da54eb!2sKano!5e0!3m2!1sen!2sng!4v1662066547386!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Testimonial
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
