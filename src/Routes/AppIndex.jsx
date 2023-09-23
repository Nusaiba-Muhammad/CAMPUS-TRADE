import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import TradeNavbar from "../components/TradeNavbar";
import SideBarNew from "../components/SideBarNew";

export default function AppIndex() {
  return (
    <div className="m-0 p-0 ">
      <TradeNavbar />
      <Row className="m-0 p-0">
        {/* <Col md={2}>
          <SideBarNew />
        </Col> */}
        {/* <Col md={10}> */}
        <Outlet />
        {/* </Col> */}
      </Row>
    </div>
  );
}
