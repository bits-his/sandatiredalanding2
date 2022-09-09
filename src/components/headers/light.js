import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useHistory, useLocation } from "react-router-dom";

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/app/logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = styled.a((props) => [
  tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 
  pb-1 border-b-2 border-transparent hover:border-appcolor hocus:text-appcolor`,
  props.active
    ? tw`lg:text-appcolor md:text-white sm:text-white`
    : tw`lg:text-white md:text-appcolor sm:text-appcolor`,
]);

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-appcolor text-appcolorfaded
  hocus:bg-appcolorfaded hocus:text-appcolor focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-20 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-appcolor transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const history = useHistory();
  const location = useLocation();

  const checkActive = (path) => location.pathname === path;

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/");
        }}
        active={checkActive("/")}
      >
        Home
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/about-us");
        }}
        active={checkActive("/about-us")}
      >
        About Us
      </NavLink>
      {/* <NavLink href="/#">Blog</NavLink> */}
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/our-partners");
        }}
        active={checkActive("/our-partners")}
      >
        Partners
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-locations");
        }}
        active={checkActive("/kirana-locations")}
      >
        Kirana
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-uwar-gida");
        }}
        active={checkActive("/kirana-uwar-gida")}
      >
        Uwar Gida
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-direba");
        }}
        active={checkActive("/kirana-direba")}
      >
        Direba
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-ruwangida");
        }}
        active={checkActive("/kirana-ruwangida")}
      >
        Ruwangida
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-csr");
        }}
        active={checkActive("/kirana-csr")}
        title="Corporate Social Responsibility"
      >
        CSR
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/kirana-media");
        }}
        active={checkActive("/kirana-media")}
      >
        Media
      </NavLink>
      <NavLink
        href="/#link"
        onClick={(e) => {
          e.preventDefault();
          history.push("/contact-us");
        }}
        active={checkActive("/contact-us")}
      >
        Contact
      </NavLink>
      {/* <NavLink href="https://app.sandatireda.com/auth" tw="lg:ml-12!">
        Login
      </NavLink> */}
      {/* <PrimaryLink
        css={roundedHeaderButton && tw`rounded-full`}
        href="https://play.google.com/store/apps/details?id=com.sunda.tireda"
      >
        Register
      </PrimaryLink> */}
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      {/* Sanda Tireda Limited */}
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
