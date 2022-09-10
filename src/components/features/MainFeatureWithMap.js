import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  // Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import "../features/states.css";
import Map from "components/map/Map";

const Container = styled.div((props) => [
  props.bg ? tw`bg-white` : tw`bg-appbg`,
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

// const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-4xl text-center md:text-left leading-tight text-appcolor`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;

// const PrimaryButton = styled(PrimaryButtonBase)((props) => [
//   tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
//   props.buttonRounded && tw`rounded-full`,
// ]);

export default ({
  // subheading = "Our Expertise",
  heading = null,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  textOnLeft = true,
  bg = true,
  // showMap = true,
}) => {
  return (
    <Container bg={bg}>
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
        <Map />
      </TwoColumn>
    </Container>
  );
};
