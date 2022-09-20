/* eslint-disable no-unused-vars */
import React from "react";
import tw from "twin.macro";
import './reignsb.css'
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/app/logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as PlaystoreIcon } from "../../images/google.svg";
import { ReactComponent as AppleIcon} from "../../images/apple.svg";
import store from '../../images/playme.png'
import apple from '../../images/apple.png'


const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-appcolor hocus:border-appcolor pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-appcolor`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Sanda Tireda Limited.</LogoText>
          </LogoContainer>
          <CompanyDescription>
          Lautai House, C5 Wudil Road,Kano State, Nigeria.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <div>
          <div 
            style={{width: 160, height: 50, backgroundColor: 'black', borderRadius: 10, cursor: "pointer",
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              {/* <div> 
                <p style={{color:"white", fontSize: 12, marginBottom: 0, marginTop: 2}}>Get App on</p>
                <p style={{color:"white", fontSize: 25, fontFamily: "Roboto"}}>Google</p>
              </div> */}
              <img  src={store} alt="store icon" />
            </div>
            <div
            style={{width: 160, height: 50, backgroundColor: 'black', borderRadius: 10, cursor: "pointer",
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
              {/* <div> 
                <p style={{color:"white", fontSize: 12, marginBottom: 0, marginTop: 2}}>Get App on</p>
                <p style={{color:"white", fontSize: 25, fontFamily: "Roboto"}}>Google</p>
              </div> */}
              <img src={apple} alt="store icon" />
            </div>
          </div>
        </WideColumn>
        <Column>
          <ColumnHeading>Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="/">Home</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="contact-us">Contact Us</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="our-partners">Partners</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="about-us">About Us</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
        <ColumnHeading>Contact</ColumnHeading>
        <CompanyDescription>
        Email: info@sandatireda.com
        </CompanyDescription>
        <CompanyDescription>
        Tel: 08097766556.
        </CompanyDescription>
        <CompanyDescription>
          Kano
        </CompanyDescription>
        <CompanyDescription>
          @ 2022.All Rights Reserved
        </CompanyDescription>
        </Column>
        {/* <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">GDPR</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Terms of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Disclaimer</Link>
            </LinkListItem>
          </LinkList>
        </Column> */}
      </FiveColumns>
    </Container>
  );
};

    // <Container>
    //   <Content>
    //     <ThreeColRow>
    //       <LogoContainer2>
    //         <LogoContainer>
    //           <LogoImg src={LogoImage} />
    //           <LogoText>Sanda Tireda Limited</LogoText>
    //         </LogoContainer>
    //         <LogoText2>Lautai House, C5 Wudil Road,</LogoText2>
    //         <LogoText2>Kano State, Nigeria.</LogoText2>
    //       </LogoContainer2>
    //       <LogoContainer2>
    //         <LogoText2>Email: info@sandatireda.com</LogoText2>
    //         <LogoText2>Tel: +234 (0) 8097766556</LogoText2>
    //       </LogoContainer2>
    //       <CopywrightNotice>
    //         &copy; {new Date().getFullYear()}. All Rights Reserved.
    //       </CopywrightNotice>
    //     </ThreeColRow>
    //   </Content>
    // </Container>
    // <footer>
    //         <div class="container ">
    //             <div class="grid grid--footer ">
    //                 <div class="logo-col " data-aos="fade-up">
    //                     <a href="#logo" class="footer-logo ">
    //                         <img class="logo" id="logos" alt="Inventria logo " src="images/logo.png" />
    //                     </a>
    //                     <p class="copyright ">
    //                         Inventory and Accounting app for SMEs
    //                     </p>

    //                     <div class="bottom btn-app ">
    //                         <a href="# " class="btn-app-1"><img src="images/download-app.svg" alt="App Store Button " /></a>
    //                         <a href='https://play.google.com/store/apps/details?id=com.sunda.tireda&hl=en&gl=US' class="btn-app-2"><img src={LogoImage} alt="Play Store Button " /></a>



    //                     </div>
    //                     <div class="enter final ">Copyright &copy; <span class="year ">2022</span> Inventria &mdash; All rights reserved.</div>
    //                 </div>

    //                 <nav class="address-col center ">
    //                     <p class="footer-heading " href="index.html ">Home </p>
    //                     <ul class="footer-nav ">
    //                         <li><a class="footer-link " href="aboutus.html ">About us </a></li>
    //                         <li><a class="footer-link " href="services.html ">Services</a></li>
    //                         <li><a class="footer-link " href="products.html ">products</a></li>
    //                         <li><a class="footer-link " href="contact.html ">Contact us</a></li>
    //                     </ul>
    //                 </nav> --{">"}
    //                 <div class="address-col " data-aos="fade-up">
    //                     <p class="footer-heading ">Address</p>
    //                     <address class="contacts ">
    //                 <p class="address ">
    //                     Office: Floor 1, African Alliance Building, No 1 Sani Abacha Way, Kano, Nigeria
    //                 </p>
    //                 <address class="contacts ">
    //                   <br/>
    //                     <p> 
   
    //                       <a class="footer-link " href=" ">Phone: +2349039892072</a><br />
    //                       <a class="footer-link " href=" "> Email: support@Inventria.app</a>
    //                     </p>
    //                   </address>

    //                     </address>
    //                 </div>
    //                 <div class="address-col " data-aos="fade-up">
    //                     <p class="footer-heading ">Contact us</p>

    //                     <div>


    //                         <ul class="social-links ">
    //                             <li>
    //                                 <a className="footer-link " href="">
    //                                     <ion-icon className="social-icon " name="logo-instagram"></ion-icon>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a className="footer-link " href="https://web.facebook.com/Inventriaapp/" target="_blank" rel="noreferrer">
    //                                     <ion-icon className="social-icon " name="logo-facebook"></ion-icon>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a className="footer-link " href="# ">
    //                                     <ion-icon className="social-icon " name="logo-twitter"></ion-icon>
    //                                 </a>
    //                             </li> --{">"}
    //                             <li>
    //                                 <a className="footer-link " href="https://www.linkedin.com/in/inventriaapp/" target="_blank" rel="noreferrer">
    //                                     <ion-icon className="social-icon " name="logo-linkedin"></ion-icon>
    //                                 </a>
    //                             </li>
    //                             <li>
    //                                 <a className="footer-link " href="https://www.youtube.com/channel/UCFZxw3Fe6zz9cMuvipwP9Xw/featured" target="_blank" rel="noreferrer">
    //                                     <ion-icon className="social-icon " name="logo-youtube"></ion-icon>
    //                                 </a>
    //                             </li>
    //                         </ul>
    //                         <ul><br/>Socials: @inventriaapp</ul>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </footer>