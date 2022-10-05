/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import cormart from 'images/app/partners/cormart.png'
import fanmilk from 'images/app/partners/fanmilk.png'
import perfetti from 'images/app/partners/perfetti.png'
import tgi from 'images/app/partners/tgi-logo.png'
import bonita from 'images/app/partners/bonita.png'
import mcpl from 'images/app/partners/mcpl.png'
import chi from 'images/app/partners/chi.png'
import caraway from 'images/app/partners/caraway.png'
import checkers from 'images/app/partners/checkers.png'
import wasil from 'images/app/partners/wasil.png'
import sonia from 'images/app/partners/sonia.png'
import wacot from 'images/app/partners/wacot.png'
import bua from 'images/app/partners/bua.png'
import mamada from 'images/app/partners/mamada.png'
import pz from 'images/app/partners/pz.jpeg'


const Container = tw.div`relative max-w-screen-xl`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-64 h-64 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const Title = tw.h5`text-2xl font-bold`;



const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: mcpl,
      title: "Multipro Limited ",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Rome, Italy",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: bonita,
      title: "Bonita's Treatsx",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Ibiza, Spain",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: chi,
      title: "   Chi Limited ",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Palo Alto, CA",
      pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: cormart,
      title: " Cormart Nigeria",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: fanmilk,
      title: "Fan Milk PLC",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: perfetti,
      title: " Perfetti Van Melle",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: tgi,
      title: "Tropical General Investment",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: caraway,
      title: "Caraway Nigeria Ltd",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: checkers,
      title: "Checkers Clusterd",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: wasil,
      title: "WASIL (West African Soy Industries Limited)",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: sonia,
      title: "Sonia Foods Industries",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: wacot,
      title: "Wacot Limited",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: bua,
      title: "BUA Food Products",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: mamada,
      title: "Mamuda Industries Nigeria",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
    {
      imageSrc: pz,
      title: "PZ Cussons Nigeria Plc",
      description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
      locationText: "Arizona, RAK",
      pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Our Partners</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              {/* <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                </SecondaryInfoContainer>
              </TextInfo> */}
            
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};

{/* import bonita_chips from "images/items/foods/bonita-coconut-chips.jpg";
import carisun from "images/items/foods/caprisun.jpg";
import chi_exotic from "images/items/foods/chi-exotic-can.jpg";
import chi_exotic2 from "images/items/foods/Chi-exotic-150ml-Juice.jpg";
import terra1 from "images/items/foods/golden-terra5-oil.jpg";
import terra2 from "images/items/foods/item7.jpeg";
import indome_sp from "images/items/foods/item8.jpeg";
import mentos from "images/items/foods/mentos.jpeg";
import aptamil4 from "images/items/foods/aptamil4.jpeg";
import big_bull from "images/items/foods/big-bull.jpeg";
import scatch_bite from "images/items/none-foods/scotch-brite.jpeg";
import rene_starch from "images/items/none-foods/rene-starch.jpeg"; */}