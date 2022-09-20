/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/arrow-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/arrow-right.svg";
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
const Content = tw.div`max-w-screen-xl mx-auto py-3 lg:py-3`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex justify-center mt-5`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2 flex flex-row justify-center`}
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

export default ({imgList=[]}) => {
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


  return (
    <Container>
      <Content>
      
          {/* {JSON.stringify(imgList)} */}
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {imgList.map((img, index) => (
            <Card key={index}>
              <CardImage imageSrc={img} />
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

        <Controls>
          <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
          <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
        </Controls>
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