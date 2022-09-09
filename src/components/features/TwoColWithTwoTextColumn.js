import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
const Container = styled.div((props) => [
  props.bg ? tw`bg-appcolor` : tw`bg-appcolorfaded`,
  tw`-mx-8 px-5`,
]);
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw.h5`font-bold text-appcolor text-center md:text-left`;
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center text-appcolor mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-appcolor`;

export default ({
  subheading = "",
  heading1 = (
    <>
      <span tw="text-appcolor">Our</span>
    </>
  ),
  heading2 = (
    <>
      <span tw="text-appcolor">Our</span>
    </>
  ),
  description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  features = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    // {
    //   Icon: BriefcaseIcon,
    //   title: "Professionalism",
    //   description: "We have the best professional marketing people across the globe just to work with you.",
    //   iconContainerCss: tw`bg-teal-300 text-teal-800`
    // },
    // {
    //   Icon: MoneyIcon,
    //   title: "Affordable",
    //   description: "We promise to offer you the best rate we can - at par with the industry standard.",
    //   iconContainerCss: tw`bg-red-300 text-red-800`
    // }
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>
      <TwoColumn>
        <TextColumn>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading className="text-center">{heading1}</Heading>
            <Description>{description1}</Description>
          </TextContent>
        </TextColumn>

        <TextColumn>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading className="text-center">{heading2}</Heading>
            <Description>{description2}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
