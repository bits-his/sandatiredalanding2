/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { lazy, useEffect } from "react";
// import { MdAddShoppingCart } from "react-icons/md";
import { Redirect, Route, Switch } from "react-router";
import { Col, Row } from "reactstrap";
// import ExpensesForm from "./Expenses";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Ruwa from './App';

const path = "/me/map";
export default function AdmminstrationDashboard() {
  const user = useSelector((state) => state.auth.user);

  const history = useHistory();
  const navigateUser = (user) => {
    let functionality = user.functionality;
    const acc = ["Map viwer"];
    let sel = null;

    acc.forEach((i) => {
      if (functionality && functionality.findIndex((it) => it === i) !== -1)
        sel = i;
      return;
    });

    switch (sel) {
      case "Map viwer":
        return history.push(`${path}/index`);
      default:
        return history.push(`${path}/index`);
    }
  };

  useEffect(() => {
    if (user) {
      navigateUser(user);
    }
  }, [user]);

  return (
    <>
      <Row className="m-0 p-0">
        <Col md={12}>
          <AdmminstrationRoute />
        </Col>
      </Row>
    </>
  );
}

function AdmminstrationRoute() {
  return (
      <Switch>
        <Redirect
          from={`${path}/`}
          to={`${path}/index`}
          exact
        />
        <Route path={`${path}/index`} component={Ruwa} />
        <Route path={`${path}/map`} component={Ruwa} />
      </Switch>
  );
}