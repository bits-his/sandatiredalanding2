import React from "react";
import tw from "twin.macro";

import map1Src from "images/app/map-transparent-white.png";
import MainFeature2 from "components/features/TwoColWithButton.js";

const Description = tw.span`inline-block mt-8 text-appcolor`;
const imageCss = tw`rounded-4xl`;

export default ({
  description = "Sanda Tireda operates a franchise network of retail neighbourhood stores (the “Kirana’s”) across the North West. Kirana is an Indian word used to describe “a small, usually family owned, shop selling groceries and other household sundries”. ",
}) => {
  return (
    <>
      <MainFeature2
        heading={<>Kirana Frachise Network</>}
        description={
          <>
            <Description>{description}</Description>
            <Description>
              In this business, the Kirana store owner enters into an agreement
              with Sanda Tireda for his/her inventory needs. Depending on their
              credit worthiness and track record, Sanda Tireda may supply part
              of the stock on credit to the Kirana. This enables these small
              store owners to scale up while allowing Sanda Tireda, and its
              manufacturing partners, to increase their supplies directly to
              consumers. Sanda Tireda uses an in-house developed “app” to
              monitor and track the sales and inventory at each Kirana Store.
            </Description>
          </>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Become a Kirana"
        imageSrc={map1Src}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
    </>
  );
};
