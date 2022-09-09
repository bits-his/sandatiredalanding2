import React from "react";
import tw from "twin.macro";
import {
  SectionHeading as HeadingTitle,
  Subheading,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import YoutubeEmbed from "./VideoEmbaded";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;


const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "",
  heading = (
    <>
      <span tw="text-appcolor">Social Impact</span>
    </>
  ),
//   description = "Some amazing blog posts that are written by even more amazing people.",
}) => {
  const videoPosts = [
    {
      embedId: "lHoDFeIr3yc",
    },
    {
      embedId: "jR7Az8eGLaE",
    },
    {
      embedId: "tGLj6CftKJU",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <HeadingTitle>{heading}</HeadingTitle>
          {/* <HeadingDescription>{description}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {videoPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <YoutubeEmbed embedId={post.embedId} />
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
