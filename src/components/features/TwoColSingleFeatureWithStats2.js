import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
// const Container = tw.div`bg-appcolor -mx-8 px-5`;
const Container = styled.div((props) => [
  props.bg ? tw`bg-appcolorfaded` : tw`bg-appbg`,
  tw`-mx-8 px-5`,
]);
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 md:text-center flex flex-row justify-center items-center `;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`text-appcolor pt-6`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;
const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-appcolor -z-10`,
]);

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
  
          <TextContent>
         
            <Description>{description}</Description>
            {/* <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics> */}
            {/* <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
    </Container>
        {/* <Container bg={bg}>
        <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
          <ImageColumn css={imageContainerCss}>
            {imageInsideDiv ? (
              <Image imageSrc={imageSrc2} css={imageCss} />
            ) : (
              <img src={imageSrc2} css={imageCss} alt="" />
            )}
            {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          </ImageColumn>
          
        </TwoColumn>
      </Container>
      <Container bg={bg}>
        <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
          <ImageColumn css={imageContainerCss}>
            {imageInsideDiv ? (
              <Image imageSrc={imageSrc3} css={imageCss} />
            ) : (
              <img src={imageSrc3} css={imageCss} alt="" />
            )}
            {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
          </ImageColumn>
         
        </TwoColumn>
      </Container> */}
      </>
  );
};
