import React, { useState } from "react";
import { Card, Col, Row, Modal } from "reactstrap";
import jacket from "../img/jacket.jpg";
import shirt from "../img/shirt.jpg";
import bag from "../img/bag.jpg";
import ladies from "../img/ladies-removebg.png";
import profile from "../img/profile.jpg";
import deep from "../img/deeps5.jpg";
import { useNavigate } from "react-router-dom";

import "../App.css";
import {
  Plus,
  XCircle,
  Phone,
  ChevronRight,
  ChevronsRight,
} from "react-feather";

export default function TradeIndex() {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState([]);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open2, setOpen2] = useState(false);
  const toggle2 = () => {
    setOpen2(!open2);
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

  // **************SIDEBAR DROPDOWN******************

  return (
    <div>
      <Row className="trade_index pt-4 pb-4 m-0 p-0">
        <Col md={2}>
          <Card className="index_top_card shadow-sm p-3 tins">
            <h3>EXPLORE</h3>

            <p className="categories_item">
              Tutoring <ChevronRight />
            </p>
            <p className="categories_item">
              Books <ChevronRight />
            </p>
            <p className="categories_item">
              Non-academic material <ChevronRight />
            </p>
            <p className="categories_item">
              Services <ChevronRight />
            </p>
            <p className="categories_item">
              Cannabis <ChevronRight />
            </p>
            <hr />
            <p className="categories_item">CNS Stimulants </p>
            <p className="categories_item"> Hallucinogens</p>
            <p className="categories_item">Dissociative Anesthetics</p>
            <p className="categories_item">Narcotic Analgesics</p>
            <p className="categories_item">Inhalants</p>
            <p className="categories_item">Cannabis</p>
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
              {itemData.map((item) => (
                <Col lg={3}>
                  <Card
                    className="index_card shadow-sm p-1"
                    onClick={() => {
                      toggle();
                      setSelectItem(item);
                    }}
                  >
                    {/* <CardBody> */}
                    <img src={item.itemImage} alt="" />
                    {/* </CardBody> */}
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
                      ADD TO CART
                    </button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Modal size="lg" isOpen={open} className="trade_index_modal">
        <Row className="p-4">
          <Col md={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "140px",
              }}
            >
              <div>
                <img src={selectItem.itemImage} className="cart_image" alt="" />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <h3 className="cart_item_name">{selectItem.itemName}</h3>
            <p className="cart_item_description">
              {selectItem.itemDescription}
            </p>
            <h3 className="cart_item_price">{selectItem.itemPrice}</h3>
            <hr />
            <div>
              <img src={profile} alt="profile" width={60} />
              <span className="seller-name">Mr.Ikechukwu Onono</span>
              <button className="contact-button">
                Contact seller <Phone />
              </button>
              <hr />
              {/* <div style={{ textAlign: "left" }}>
                <p className="shipping_fee">Shipping fee: 1 Near</p>
              </div> */}
            </div>

            <button
              className="trade_btn add_to_cart_btn mt-3"
              btnText={`Add to cart`}
              onClick={() => navigate("/cart")}
              style={{ width: "100%" }}
            >
              Add to cart
            </button>
          </Col>
          <Col md={2}>
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
