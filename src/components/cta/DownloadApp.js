import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import mockupImageSrc from "images/app-mockup.png"
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container as ContainerBase } from "components/misc/Layouts";
import { SectionHeading } from "components/misc/Headings.js";
import googlePlayIconImageSrc from "images/google-play-icon.png"

const Container = tw(ContainerBase)`bg-white -mx-8`
const Content = tw(ContentWithPaddingXl)``
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`
const TextContainer = tw(ColumnContainer)``;
// const Text = tw(SectionHeading)`text-gray-100 lg:text-left max-w-none text-lg leading-snug`;
const Subheading = tw(SectionHeading)`mb-4 tracking-wider text-3xl`

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-appcolorfaded`;


const ImageContainer = tw(ColumnContainer)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`
export default ({
  subheading = "Kirana App",
  text = "Developers all over the world are happily using Treact.",
  // link1Text = "App Store",
  // link1Url = "http://apple.com",
  // link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "https://play.google.com/store/apps/details?id=com.sunda.tireda&hl=en&gl=US",
  link2IconSrc = googlePlayIconImageSrc,
  pushDownFooter = false,
  imageSrc = mockupImageSrc,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <Content>
        <Row>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Description>{text}</Description>
            <LinksContainer>
             
              <Link href={link2Url}>
                <img src={link2IconSrc} alt=""/>
                <span>{link2Text}</span>
              </Link>
            </LinksContainer>
          </TextContainer>
          <ImageContainer>
            <img src={imageSrc} alt="" tw="w-64"/>
          </ImageContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </Content>
    </Container>
  );
};
