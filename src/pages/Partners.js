import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ProfileThreeColGrid />
      <Footer />
    </AnimationRevealPage>
  );
};
