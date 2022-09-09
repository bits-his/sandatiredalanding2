import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import "./style.css";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import Gallery from "./Gallery";
import Custom from "./Custom";

export default function Media() {
  var appcolorfaded = "#fef0e7";

  const tabs = {
    draft: {
      title: "News Blog",

      content: (
        <Row className="p-2">
          <Col className="p-2">
            <Blog />
          </Col>
        </Row>
      ),
    },

    in_progress: {
      title: "Social Impact",

      content: (
        <Row className="p-2">
          <Col className="p-2">
           <Custom  />
          </Col>
        </Row>
      ),
    },

    completed: {
      title: "Gallery",

      content: (
        <Row className="p-2">
          <Col className="p-2">
            <Gallery />
          </Col>
        </Row>
      ),
    },
  };

  const [activeTab, setActiveTab] = useState("in_progress");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <AnimationRevealPage>
      <Header />
      <br />
      <br />
      <div className="row p-4">
        <div className="col-lg-12">
          <Nav fill pills>
            {Object.entries(tabs).map((tab) => (
              <NavItem key={tab[0]}>
                <NavLink
                  className={
                    activeTab === tab[0]
                      ? `action bg-appcolor border text-${appcolorfaded}`
                      : ""
                  }
                  onClick={() => {
                    toggle(tab[0]);
                  }}
                  role="button"
                >
                  {tab[1].title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          <TabContent activeTab={activeTab}>
            {Object.entries(tabs).map((tab) => (
              <TabPane key={tab[0]} tabId={tab[0]}>
                {tab[1].content}
              </TabPane>
            ))}
          </TabContent>
        </div>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
}
