import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
