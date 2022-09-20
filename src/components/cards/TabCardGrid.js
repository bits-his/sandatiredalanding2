/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
// import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { getItems } from "helpers/api";


import bonita_chips from "images/items/foods/bonita-coconut-chips.jpg";
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
import rene_starch from "images/items/none-foods/rene-starch.jpeg";

import shineall_handwasher from "images/items/none-foods/shineall-handwasher.jpeg";
import renew_detergent from "images/items/none-foods/renew-washing-machine-detergent.jpeg";
import kleansol from "images/items/none-foods/kleansol.jpeg";
import corysan_handwash from "images/items/none-foods/corysan-handwash.jpeg";
import spark_classic_cleaner from "images/items/none-foods/spark-classic-cleaner.jpeg";
import ProductsSlider from "./ProductsSlider";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-appcolorfaded px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-appcolor text-appcolorfaded!`}
  }
`;
export const Container = tw.div`relative py-8`;

const TabContent = tw(
  motion.div,
)`mt-6 flex flex-row justify-center flex-wrap sm:-mr-10 md:-mr-6 lg:mr-0`;
const CardContainer = tw.div` w-full sm:w-1/2 md:w-1/3 lg:w-1/6 xl:w-1/6 m-2`;
const Card = tw(
  motion.a,
)`bg-white block max-w-xs mx-auto sm:max-w-none sm:mx-0 rounded-lg p-8`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-40 bg-center bg-contain bg-no-repeat relative bg-white`}
`;

// const CardHoverOverlay = styled(motion.div)`
//   background-color: rgba(255, 255, 255, 0.5);
//   ${tw`absolute inset-0 flex justify-center items-center`}
// `;
// const CardButton = tw(PrimaryButtonBase)`text-sm`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-appcolor`}
`;

// const PrimaryLink = styled(PrimaryLinkBase)`
//   ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
//   svg {
//     ${tw`ml-2 w-5 h-5`}
//   }
// `;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    "Food Items": [
      {
        imageSrc: terra2,
        title: "Golde Terra",
        content: "Golde Terra",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
      },
      {
        imageSrc: terra1,
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
      },
      {
        imageSrc: big_bull,
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
      },
      {
        imageSrc: aptamil4,
        title: "Jalapeno Poppers",
        content: "Crispy Soyabeans",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
      },
      {
        imageSrc: chi_exotic,
        title: "Cajun Chicken",
        content: "Roasted Chicken & Egg",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",

      },
      {
        imageSrc: chi_exotic2,
        title: "Chillie Cake",
        content: "Deepfried Chicken",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",

      },
      {
        imageSrc: bonita_chips,
        title: "Guacamole Mex",
        content: "Mexican Chilli",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
      },
      {
        imageSrc: carisun,
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
      },
      {
        imageSrc: mentos,
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
      },
      {
        imageSrc: indome_sp,
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
      },
    ],
    "Non Food Items": getRandomCards(),
  },
}) => {
  const [itemsList, setItemList] = useState({
    "Food Items": [],
    "Non Food Items": [],
  });

  const getItems = async (cat) => {
    try {
      const request = await fetch(`https://yge.wvi.mybluehost.me/test/sanda-server/account/get/catalogue?query_type=by_cat&category=${cat}`)
      return await request.json()
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getItems('FOO').then(it => setItemList(p => ({
      ...p, "Food Items": it.results
    }))).catch(err => console.log("Error fetching item images"))

    getItems('NON').then(it => setItemList(p => ({
      ...p, "Non Food Items": it.results
    }))).catch(err => console.log("Error fetching item images"))
    
  }, [])
  
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(itemsList);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  const [showCount,] = useState(5);

  // useEffect(() => {
  //   getItems()
  //     .then((data) => {
  //       // setList(data)
  //       console.log(data);
  //       if (data.results && data.results.length) {
  //         let _food = [];
  //         let _nonFood = [];

  //         data.results.forEach((i) => {
  //           // console.log(i)
  //           if (i.group_code === "FOO" && i.item_image !== "") {
  //             _food.push(i);
  //           } else if (i.group_code === "NON" && i.item_image !== "") {
  //             _nonFood.push(i);
  //           }
  //         });

  //         setItemList({
  //           "Food Items": _food,
  //           "Non Food Items": _nonFood,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error");
  //     });
  // }, []);

  return (
    <Container>
      {/* <ContentWithPaddingXl> */}
      <HeaderRow>
        <Header>{heading}</Header>
        <TabsControl>
          {Object.keys(tabs).map((tabName, index) => (
            <TabControl
              key={index}
              active={activeTab === tabName}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </TabControl>
          ))}
        </TabsControl>
      </HeaderRow>
      {/* {JSON.stringify(itemsList)} */}
      {/* <ProductsSlider /> */}
      {tabsKeys.map((tabKey, index) => (
        <TabContent
          key={index}
          variants={{
            current: {
              opacity: 1,
              scale: 1,
              display: "flex",
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
              display: "none",
            },
          }}
          transition={{ duration: 0.4 }}
          initial={activeTab === tabKey ? "current" : "hidden"}
          animate={activeTab === tabKey ? "current" : "hidden"}
        >
          {/* {JSON.stringify(itemsList)} */}
          <ProductsSlider imgList={itemsList[tabKey].slice(0, showCount).map(a => 'https://yge.wvi.mybluehost.me/test/sanda-server/uploads/' + a.item_image)} />
        </TabContent>
      ))}
      {/* <center>
        <PrimaryLink onClick={() => setShowCount((p) => p + 5)}>
          View More
        </PrimaryLink>
      </center> */}
      {/* </ContentWithPaddingXl> */}
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc: shineall_handwasher,
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
    },
    {
      imageSrc: rene_starch,
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
    },
    {
      imageSrc: scatch_bite,
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
    },
    {
      imageSrc: renew_detergent,
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
    },
    {
      imageSrc: kleansol,
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
    },
    {
      imageSrc: corysan_handwash,
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
    },
    {
      imageSrc: spark_classic_cleaner,
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
