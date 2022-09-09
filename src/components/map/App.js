import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Features from "components/features/ThreeColSimple.js";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import DownloadApp from "components/cta/DownloadApp.js";
import MainFeature from "components/features/MainFeatureWithMap.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import "./style.css";
import sdgImgOne from "../../images/1.jpg";
import sdgImgTwo from "../../images/2.jpg";
import sdgImgThree from "../../images/33.jpg";
import aspirationImgOne from "../../images/3.jpg";

export default function Map() {
  const Description = tw.span`inline-block mt-8 text-white`;
  const HighlightedText = tw.span`bg-appcolor text-white px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-appcolor px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  var appcolor = "#F37021";


  return (
    <AnimationRevealPage>
      <Header />
      <Feature
        heading2={<span tw="text-appcolor">Mission</span>}
        description2="To empower micro, small and medium enterprises through the use of technology"
        heading1={<span tw="text-appcolor">Vision</span>}
        description1="To create a business environment where micro, small and medium enterprises will thrive across Nigeria."
      />
      <MainFeature
        showMap={false}
        bg={appcolor}
        heading={
          <>
            
          </>
        }
        description={
          <Description>
            Sanda Tireda established the Kirana initiative in July 2021 to
            enable small store owners to expand their business, while allowing
            manufacturers to have direct access to retailers . Sanda Tireda
            leverages technology through a customized software application which
            enables the Kirana customers from orders to delivery and ultimate
            sales to consumers. Through this application, the retailers can also
            pay for the goods ordered
            <br />
            <br />
            <HighlightedTextInverse>Kirana</HighlightedTextInverse> is inspired
            by the Indian word used to describe “a small, usually family owned.”
            Under the Sanda Kirana model, Sanda Tireda offers Kirana stores a
            30-day interest free credit with free door to door delivery. This
            service is presently available within Kano state and Jigawa state.
            The importance of microfinance in poverty reduction has created a
            compelling need to design strategies for providing financial
            services to the vulnerable, poor and low-income groups on a
            sustainable basis.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        // imageSrc={truckImgSrc}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        // subheading={<Subheading>Distribution Operations</Subheading>}
        heading={<>Sustainable Development Goals (SDGs)</>}
        bg={false}
    
        buttonRounded={false}
        textOnLeft={false}
        // primaryButtonText="Become a Kirana"
        imageSrc={sdgImgOne}
        imageCss={imageCss}
        imageSrc2={sdgImgTwo}
        imageSrc3={sdgImgThree}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        // subheading={<Subheading>Distribution Operations</Subheading>}
        heading={
          <>African Union Development Agency-NEPAD (AUDA-NEPAD) Aspirations </>
        }
      
        description={
          <Description>
            Kirana is a Sanda Tireda initiative that eases access to credit
            facilities for small scale shop owners.
          </Description>
        }
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={aspirationImgOne}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={false}
        bg="appbg"
      />
      <Features
        heading={
          <>
            The <HighlightedText> Sanda </HighlightedText> Difference.
          </>
        }
        cards={[
          {
            // imageSrc: shopIconImageSrc,
            title: "Convenience",
            description:
              "We eliminate the need to travel to the market by delivering inventory to their shops free of charge.",
            // url: "https://google.com"
          },
          {
            // imageSrc: chefIconImageSrc,
            title: "Microcredit",
            description:
              "We offer credit of up to 200,000 naira in inventory to each Kirana Store on a 30-day cycle. ",
            // url: "https://timerse.com"
          },
          {
            // imageSrc: chefIconImageSrc,
            title: "Ease of Use",
            description:
              "We have a user-friendly mobile phone application where all orders from franchise stores are made.Increased Earning Capacity for Micro-Entrepreneurs.",
            // url: "https://timerse.com"
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      
      <DownloadApp
        text={
          <>
            Sanda Tireda leverages technology to monitor in real time its
            operations stock in warehouses and Kirana Stores. Furthermore, Sanda
            Tireda uses a mobile phone application to manage its sales and
            inventories across the Kirana stores. All orders from franchise
            stores are made via the app and goods are delivered to the Kirana’s
            using Sanda’s dedicated fleet of over 30 vehicles.
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
}
