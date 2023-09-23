import React, { useState } from "react";
import { Card, Col, Row, Modal } from "reactstrap";
import jacket from "../img/jacket.jpg";
import shirt from "../img/shirt.jpg";
import bag from "../img/bag.jpg";
import ladies from "../img/ladies-removebg.png";
import profile from "../img/profile.jpg";
import deep from "../img/deeps5.jpg";
import { useNavigate } from "react-router-dom";
import inna from "../img/inna.jpg";

import "../App.css";
import { Plus, XCircle, Phone, Bookmark } from "react-feather";
import SideBarNew from "./SideBarNew";
import TradeNavbar from "./TradeNavbar";

export default function TradeIndex() {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState([]);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const itemData = [
    {
      itemImage: bag,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: shirt,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: bag,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: shirt,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: jacket,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: deep,
      itemDescription: "Baby girl",
      itemName: "Artifical Intelligence Tutor",
      itemPrice: "#2000 per hour",
    },
    {
      itemImage: jacket,
      itemDescription: "awsdfgfhnjhkmhnbgfvcdxszdfghh",
      itemName: "Jacket",
      itemPrice: "#2000",
    },
    {
      itemImage: deep,
      itemDescription: "Baby girl",
      itemName: "Mathematics Tutor",
      itemPrice: "#2000 per hour",
    },
  ];
  const tutorData = [
    {
      tutorImage: profile,
      tutorDescription: "Baby girl",
      itemName: "Mathematics Tutor",
      itemPrice: "#2000 per hour",
    },
    {
      tutorImage: deep,
      tutorDescription: "Baby girl",
      itemName: "Mathematics Tutor",
      itemPrice: "#2000 per hour",
    },
    {
      tutorImage: profile,
      tutorDescription: "Baby girl",
      itemName: "Mathematics Tutor",
      itemPrice: "#2000 per hour",
    },
    {
      tutorImage: deep,
      tutorDescription: "Baby girl",
      itemName: "Mathematics Tutor",
      itemPrice: "#2000 per hour",
    },
  ];

  const [filterText, setFilterText] = useState("");
  const rows = [];
  itemData.forEach((p) => {
    if (
      p.itemName &&
      p.itemName.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    )
      return;
    else rows.push(p);
  });

  // **************SIDEBAR DROPDOWN******************

  return (
    <div>
      <TradeNavbar
        value={filterText}
        handleChange={(e) => setFilterText(e.target.value)}
      />
      <Row className="trade_index pt-4 pb-4 m-0 p-0">
        <Col md={2}>
          <Card className="index_top_card shadow-sm p-3 tins">
            <h3>EXPLORE</h3>
            <SideBarNew />
          </Card>
        </Col>

        <Col md={10}>
          <div className="container">
            <Row>
              <Col md={9}>
                <Card className="index_top_card shadow-sm">
                  <div className="first">
                    <div className="first_text">
                      <h2 className="first-header">Elevate your campus life</h2>
                      <span className="span-header">
                        "Discover,shop and thrive..."
                      </span>
                      <button className="first-button">EXPLORE MORE</button>
                    </div>

                    <img src={ladies} alt="shop-img" width={550} />
                  </div>
                </Card>
              </Col>{" "}
              <Col md={3}>
                <Card
                  className="index_top_card shadow-sm p-3"
                  style={{ backgroundColor: "#ffb020" }}
                >
                  <div className="text-center">
                    Got something to sell?
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: 10,
                      }}
                    >
                      <Plus size={180} />
                    </div>
                    Post an advert
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              {rows.map((item) => (
                <Col lg={3}>
                  <Card
                    className="index_card shadow-sm p-1"
                    onClick={() => {
                      toggle();
                      setSelectItem(item);
                    }}
                  >
                    <img src={item.itemImage} alt="" />

                    <div>
                      <h5 className="item_name">
                        {item.itemName.length > 14
                          ? `${item.itemName.substring(0, 14)}...`
                          : item.itemName}
                      </h5>
                      <p className="item_generic_name">
                        {item.itemDescription.length > 20
                          ? `${item.itemDescription.substring(0, 20)}...`
                          : item.itemDescription}
                      </p>
                      <h5 className="item_name">{item.itemPrice}</h5>
                    </div>
                    <button className="trade_btn add_to_cart_btn m-3">
                      VIEW
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              {tutorData.map((item) => (
                <Col lg={3}>
                  <Card
                    className="index_card shadow-sm p-1 second_card"
                    onClick={() => {
                      toggle();
                      setSelectItem(item);
                    }}
                  >
                    <div className="tutor-sec">
                      <img src={item.tutorImage} alt="" width={90} />
                      <p className="tutor_generic_name">
                        {item.tutorDescription.length > 20
                          ? `${item.tutorDescription.substring(0, 20)}...`
                          : item.tutorDescription}
                      </p>
                      <Bookmark size={30} className="bookmark" />
                    </div>
                    <hr />

                    <div>
                      <h5 className="course_name">
                        {item.itemName.length > 30
                          ? `${item.itemName.substring(0, 30)}...`
                          : item.itemName}
                      </h5>

                      <h5 className="item_name">{item.itemPrice}</h5>
                    </div>
                    <button className="trade_btn add_to_cart_btn m-3">
                      VIEW
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Modal size="xl" isOpen={open} className="trade_index_modal">
        <Row className="p-4">
          <Col md={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "350px",
              }}
            >
              <div>
                <img
                  src={selectItem.tutorImage}
                  className="cart_image"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col md={7} className="second-column">
            <h3 className="cart_item_name">{selectItem.itemName}</h3>
            <p className="cart_item_description">
              {selectItem.itemDescription}
            </p>
            <h3 className="cart_item_price">{selectItem.itemPrice}</h3>
            <hr />
            <div className="seller-div">
              <div>
                <img src={profile} alt="profile" width={60} />
                <span className="seller-name">Mr.Ikechukwu Onono</span>
              </div>
              <div>
                <button className="contact-button">
                  Contact seller <Phone />
                </button>
              </div>
            </div>
            <hr />
            <div>
              <ul>
                <li>Remember, dont send any pre-payment</li>
                <li>Meet the seller at a safe public plac</li>
                <li>Inspect the goods to make sure they meet your need</li>
                <li>Check all documentation and only pay if youre satisfie</li>
              </ul>
              <hr />
            </div>

            <button
              className="trade_btn add_to_cart_btn mt-3"
              btnText={`Add to cart`}
              onClick={() => navigate("/cart")}
              style={{ width: "100%" }}
            >
              Add to favorites
            </button>
          </Col>
          <Col md={1}>
            <XCircle
              size="2em"
              className="modal_closer"
              onClick={toggle}
              style={{ float: "right" }}
            />
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
