import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro'
import { Container, ContentWithPaddingXl } from 'components/misc/Layouts.js'
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings'
import { SectionDescription } from 'components/misc/Typography'
// import { ReactComponent as TwitterIcon } from 'images/twitter-icon.svg'
// import { ReactComponent as LinkedinIcon } from 'images/linkedin-icon.svg'
// import { ReactComponent as GithubIcon } from 'images/github-icon.svg'

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
import ne from 'images/imagenew.png'
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-8`
const Description = tw(SectionDescription)`mx-auto text-center text-appcolor`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-3xl mx-auto`
const Card = tw.div`mt-8  w-full sm:w-1/2 lg:w-1/5 flex flex-col items-center`
const CardImage = styled.div`
  ${(props) => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-32 h-48 bg-contain bg-no-repeat bg-center rounded`}
`
export default ({
  heading = 'Our Partners',
  subheading = null,
  description = null,
  cards = [
    {
      imageSrc: mcpl,
      position: 'Quality Assurance',
      name: 'Holo Wo',
    },
    {
      imageSrc: bonita,
      position: 'Sr. Developer',
      name: 'Troye Sivan',
    },

    {
      imageSrc: chi,
      position: 'Quality Assurance',
      name: 'Holo Wo',
    },
    {
      imageSrc: cormart,
      position: 'Founder',
      name: 'Adam Cuppy',
    },
    {
      imageSrc: fanmilk,
      position: 'Sr. Designer',
      name: 'Charlotte Hale',
    },
    {
      imageSrc: perfetti,
      position: 'Jr. Designer',
      name: 'Silvester Wize',
    },
    {
      imageSrc: tgi,
      position: 'Lead Developer',
      name: 'Himali Turn',
    },
    {
      imageSrc: caraway,
      position: 'Lead Developer',
      name: 'Himali Turn',
    },
    {
      imageSrc: checkers,
      position: 'Lead Developer',
      name: 'Himali Turn',
    },
    {
      imageSrc: wasil,
      position: 'Lead Developer',
      name: 'Himali Turn',
    },
    {
      imageSrc: sonia,
      position: 'Lead Developer',
      name: '    ',
    },
    {
      imageSrc: wacot,
      position: 'Lead Developer',
      name: '    ',
    },
    {
      imageSrc: bua,
      position: 'Lead Developer',
      name: '    ',
    },
    {
      imageSrc: mamada,
      position: 'Lead Developer',
      name: '    ',
    },
    {
      imageSrc: pz,
      position: 'Lead Developer',
      name: '    ',
    },
    {
      imageSrc: ne,
      position: "Lead Developer",
      name: "    ",
    },
    // {
    //   imageSrc: popcola,
    //   position: "Lead Developer",
    //   name: "    ",
    // },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  )
}
