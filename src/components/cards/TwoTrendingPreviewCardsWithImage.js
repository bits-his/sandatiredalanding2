import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

import store4 from 'images/app/store4.png'
import store3 from 'images/app/store3.png'

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-5/12`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight text-3xl`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-appcolor font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 text-white text-sm`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const cards = [
    {
      imageSrc:store4,
      type: "Beachfront",
      pricePerDay: "$99",
      title: "A Trip to the Bahamas and the Carribean Ocean",
      trendingText: "Muri Provision Stores",
      durationText: "7 Days Tour",
      locationText: "Kano"
    },
    {
      imageSrc:store3,
      type: "Cruise",
      pricePerDay: "$169",
      title: "Cruise to the Mariana Trench and the Phillipines",
      trendingText: "SAAS Stores",
      durationText: "15 Days Tour",
      locationText: "Kano"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Kirana Franchise Network</HeadingTitle>
              <HeadingDescription>
              Sanda Tireda operates a franchise network of retail neighbourhood stores (the “Kirana’s”) across the North West. 
              Kirana is an Indian word used to describe “a small, usually family owned, shop selling groceries and other household 
              sundries”. 
              </HeadingDescription>
              <HeadingDescription>
                In this business, the Kirana store owner enters into an agreement  with Sanda Tireda for his/her inventory needs. 
                Depending on their credit worthiness and track record, Sanda Tireda may supply part of the stock on credit to the Kirana. 
                This enables these small store owners to scale up while allowing Sanda Tireda, and its manufacturing partners, 
                to increase their supplies directly to consumers. Sanda Tireda uses an in-house developed “app” to monitor and track 
                the sales and inventory at each Kirana Store. 
              </HeadingDescription>
              <PrimaryLink>
              View all Kirana <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  {/* <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount> per day
                    </CardPrice>
                  </CardHeader> */}
                  {/* <CardTitle>{card.title}</CardTitle> */}
                  <CardMeta>
                    <CardMetaFeature>
                      {/* <TrendingIcon />  */}
                      {card.trendingText}
                    </CardMetaFeature>
                    {/* <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature> */}
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  {/* <CardAction>Book Now</CardAction> */}
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
