import tw from "twin.macro";
import styled from 'styled-components';

export const Container = styled.div((props) => [
    props.bg ? tw`bg-appcolor` : tw`bg-appcolorfaded`,
    tw`-mx-8 px-5`,
  ]);
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl= tw.div`max-w-screen-2xl mx-auto`;
