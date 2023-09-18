import React from "react";
import { Outlet } from "react-router-dom";
import { Row } from "reactstrap";
import TradeNavbar from "../components/TradeNavbar";
import New from "../components/New";

export default function AppIndex() {
  return (
    <div className="m-0 p-0">
      <Row className="m-0 p-0">
        <TradeNavbar />
       

        <Outlet />
      </Row>
    </div>
  );
}
