import React from "react";
import { Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import tradelogo from "../img/camplogo.jpg";
import cart from "../img/cart.png";
import bell from "../img/bell.png";
import help from "../img/help.png";
import search from "../img/search.png";
import account from "../img/account.png";
import InputField from "./InputField";
import "../components/InputField.css";
import "../App.css";

export default function TradeNavbar({ value, handleChange }) {
  const navigate = useNavigate();

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
                  <span>ery</span>
                </div>
                <img src={cart} alt="" />
              </div>
              <div
                className="icon_div p-1"
                onClick={() => navigate("/notification")}
              >
                <img src={bell} alt="" />
              </div>
              <div className="icon_div p-1" onClick={() => navigate("/admin")}>
                <img src={help} alt="" />
              </div>
              <div className="icon_div p-1" onClick={() => navigate("/admin")}>
                <img src={account} alt="" />
              </div>
              <div>
                {/* <Dropdown isOpen={dropdown} toggle={toggle}>
                  <DropdownToggle>
                    <span>Account</span> <img src={account} alt="" />
                  </DropdownToggle>
                  <DropdownMenu className="mt-4">
                    <DropdownItem>
                      {" "}
                      <ButtonGroup className="mb-2">
                        <Button className="mr-1" onClick={toggle1}>
                          <Modal isOpen={modal} toggle={toggle1}>
                            <ModalBody>
                              
                            </ModalBody>
                          </Modal>
                          Register
                        </Button>
                        <Button className="mr-1" onClick={toggle2}>
                          <Modal isOpen={mymodal} toggle={toggle2}>
                            <ModalBody>
                              
                            </ModalBody>
                          </Modal>
                          Sign in
                        </Button>
                      </ButtonGroup>
                    </DropdownItem>
                    <DropdownItem className="mb-1">My Orders</DropdownItem>
                    <DropdownItem className="mb-1">
                      Payment Item Text
                    </DropdownItem>
                    <DropdownItem className="mb-1">Message center</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
