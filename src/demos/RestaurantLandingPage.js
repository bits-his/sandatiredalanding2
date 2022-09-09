import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Feature from "components/features/TwoColWithTwoTextColumn.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import BlogIndexPage from "pages/BlogIndex.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid.js";
import truckImgSrc from "images/app/truck4.png";
import heroImage from "images/sandatireda-building.png";
import motorCycleImgSrc from "images/app/bikers.jpeg";

export default () => {
  const HighlightedText = tw.span`bg-appcolor text-white px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8 text-appcolorfaded`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Sanda Tireda Limited</>}
        description="Founded in July 2021, Sanda Tireda Limited is a distribution and logistics company headquartered in Kano, Nigeria. Today, it has grown to include 130 direct employees and has created over 268 indirect jobs. The Sanda Tireda model bridges the gap in distribution by ensuring last mile solutions."
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageSrc={heroImage}
        // primaryButtonText="Join Us"
        // watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        showMap={false}
        bg="appcolorfaded"
        heading={<></>}
        description={
          <Description>
            Sanda Tireda’s portfolio includes both food and non-food household items. Its food portfolio 
            consists of rice, flour, seasoning cubes, cooking oil, noodles, sweets, snacks, and infant food items.
             Non-food products include home and toilet cleaning products, hand sanitisers, detergents and laundry starch.
            <br />
            <br />
            Sanda Tireda is the trusted Northern Nigeria distribution partner for key manufacturers and trading companies such as Tropical Group Investment, Multipro, FAN/Danone, Perfetti and PZ Cussons to mention a few..
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={truckImgSrc}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Feature
        heading1={<span tw="text-appcolor">Vision</span>}
        heading2={<span tw="text-appcolor">Mission</span>}
        description2="Creating an environment which motivates and empowers sole traders, SME’s and businesses to thrive by providing direct access to household consumer goods and services."
        description1="To become a leading agent of development for sole traders and businesses trading food and household consumer goods."
      />
      <TabGrid heading={<>Our Products</>} />
      <MainFeature2
        heading={<>Distribution Operations</>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
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
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={motorCycleImgSrc}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Portfolio />
      <BlogIndexPage />
      <DownloadApp
        text={
          <>
            Sanda Tireda has a strong accounting and inventory management system
            that monitors all its stock holdings in its warehouses and the
            Kirana Stores. Furthermore, Sanda Tireda uses a mobile phone
            application to manage its sales and inventories across the Kirana
            stores. All orders from franchise stores are made via the app and
            goods are delivered to the Kirana’s using Sanda’s dedicated fleet of
            vehicles.{" "}
          </>
        }
      />
      <ProfileThreeColGrid />
      <Testimonial
        subheading=""
        heading={
          <>
            <HighlightedText>Testimonials</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
