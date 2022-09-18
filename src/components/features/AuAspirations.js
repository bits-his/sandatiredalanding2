import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import YoutubeEmbed from '../social/VideoEmbaded';
// const Container = tw.div`bg-appcolor -mx-8 px-5`;
const Container = styled.div((props) => [
  props.bg ? tw`bg-white` : tw`bg-appbg`,
  tw`-mx-8 px-5 py-8`,
]);

const Heading = tw(
  SectionHeading
)`text-appcolor pt-6`;
const Description = tw(
    SubheadingBase
  )`mt-4 text-center! md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;
const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-appcolor -z-10`,
]);
const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs flex flex-col items-center justify-center`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

export default ({
  subheading = null,
  heading = (
    <>
      We have been doing this <wbr /> since{" "}
      <span tw="text-appcolor">1999.</span>
    </>
  ),
  description = null,
  imageSrc = "",
  image2Src = "",
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false,
  bg = true,
  imageSrc3="",
  imageSrc2=""
}) => {
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+",
    },
    {
      key: "Projects",
      value: "3891+",
    },
    {
      key: "Awards",
      value: "1000+",
    },
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <>
    <Container bg={bg}>
    {heading && <Heading>{heading}</Heading>}
            <Description>{description}</Description>
            <ThreeColumn>
            <Column >
              <Card>
            <img src={imageSrc} height={'5rem'} width={200} alt="" />
         
        <img src={image2Src} height={'5rem'} width={200} alt="" />
         
              </Card>
            </Column>
   <Column >
              <Card>
              <YoutubeEmbed embedId={'2B5-DKnzlT0'} width={'350'} />

              </Card>
            </Column>
             <Column >
              <Card>
              <YoutubeEmbed embedId={'6cXKQ3ng_cc'} width={'350'} />
              </Card>
            </Column>
        </ThreeColumn>
   
      {/* <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', justifyContent:'space-evenly'}}>
      <YoutubeEmbed embedId={'2B5-DKnzlT0'} width={'400'} />
      <YoutubeEmbed embedId={'6cXKQ3ng_cc'} width={'400'} />
      </div> */}
    </Container>
     
      </>
  );
};
