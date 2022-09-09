import React from "react";
import tw from "twin.macro";
import LogoImage from "images/app/logo.png";
const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-10 lg:py-6`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoContainer2 = tw.div`flex flex-col`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;
const LogoText2 = tw.p`text-gray-900`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

export default () => {
  return (
    <Container>
      <Content>
        <ThreeColRow>
          <LogoContainer2>
            <LogoContainer>
              <LogoImg src={LogoImage} />
              <LogoText>Sanda Tireda Limited</LogoText>
            </LogoContainer>
            <LogoText2>Lautai House, C5 Wudil Road,</LogoText2>
            <LogoText2>Kano State, Nigeria.</LogoText2>
          </LogoContainer2>
          <LogoContainer2>
            <LogoText2>Email: info@sandatireda.com</LogoText2>
            <LogoText2>Tel: +234 (0) 8097766556</LogoText2>
          </LogoContainer2>
          <CopywrightNotice>
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </CopywrightNotice>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
