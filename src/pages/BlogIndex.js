import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import truckImgSrc from "images/app/truck4.png";

const Container = tw.div`py-10`;
const PostContainer = styled.div`
  ${tw`w-full `}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full `}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full  rounded`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-full w-full bg-cover bg-center rounded`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Description = tw.div``;

export default () => {
  return (
    <Container>
      <PostContainer featured={true}>
        <Post className="group" as="a" href={"/#"}>
          <Image imageSrc={truckImgSrc} />
        </Post>
      </PostContainer>
    </Container>
  );
};
