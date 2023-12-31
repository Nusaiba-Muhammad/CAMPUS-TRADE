import React, { useState } from "react";
import { Row, Col, Button, Modal, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import tradelogo from "../img/camplogo.jpg";
import cart from "../img/cart.png";
import bell from "../img/bell.png";
import help from "../img/help.png";
import search from "../img/search.png";
import account from "../img/account.png";
import InputField from "./InputField";
import "../components/InputField.css";
import { useSelector } from "react-redux";
import "../App.css";
import Login from "./Login";
import Signup from "./Signup";

export default function TradeNavbar({ value, handleChange }) {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.cartList);
  let totalItems = cartList.length;
  const [modal, setModal] = useState(false);
  const [mymodal, setMyModal] = useState(false);

  const toggle1 = () => setModal(!modal);
  const toggle2 = () => setMyModal(!mymodal);

  return (
    <div>
      <div className="campus_nav_menu " style={{ positon: "sticky", top: 0 }}>
        <Row className="m-0 p-0 ">
          <Col md={3}>
            <img
              src={tradelogo}
              alt="tradelogo"
              style={{ width: 300, marginTop: 7 }}
              onClick={() => navigate("/")}
            />
          </Col>
          <Col md={6} className="">
            <div style={{ marginTop: 13 }}>
              <div>
                <InputField
                  type={"text"}
                  name="searchDrugs"
                  value={value}
                  onChange={handleChange}
                  placeholder={"Search Items"}
                  className="search_input"
                />
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                height: "70px",
              }}
            >
              <div
                className="icon_div p-1"
                style={{ position: "relative" }}
                onClick={() => navigate("/cart")}
              >
                <div className="absolute">
                  <span>{totalItems}</span>
                </div>
                <img src={cart} alt="" />
              </div>
              {/* <div
                className="icon_div p-1"
                onClick={() => navigate("/notification")}
              >
                <img src={bell} alt="" />
              </div> */}
              {/* <div className="icon_div p-1" onClick={() => navigate("/admin")}>
                <img src={account} alt="" />
              </div> */}

              <button className="login-button" onClick={toggle1}>
                <Modal isOpen={modal} toggle={toggle1}>
                  <ModalBody>
                    <Login />
                  </ModalBody>
                </Modal>
                LOGIN
              </button>
              <button className="signup-button" onClick={toggle2}>
                <Modal isOpen={mymodal} toggle={toggle2}>
                  <ModalBody>
                    <Signup />
                  </ModalBody>
                </Modal>
                SIGNUP
              </button>

              <div></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
