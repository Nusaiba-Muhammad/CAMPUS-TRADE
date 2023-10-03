/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { MinusSquare, Plus, PlusSquare, Trash, Trash2 } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
// import Button from "../CustomFiles/Button";
import { REMOVECARTITEM } from "../redux/action/ActionType";

export default function Cart() {
  
  const cartList = useSelector((state) => state.cart.cartList);
  

  return (
    <div className="">
      <Row className="pharmacy_index pt-4 pb-4 p-0 m-0">
        <Col md={8}>
          {cartList.map((item) => (
            <Card className="cart_card shadow-sm p-3 m-3">
              <Row>
                {/* <Col md={1}>check</Col> */}
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
                      <img src={item.itemImage} className="cart_image" alt="" />
                    </div>
                  </div>
                </Col>
                <Col md={7}>
                  <h3 className="cart_drug_name">{item.itemName}</h3>
                  <p className="cart_drug_description">
                    {item.itemDescription}
                  </p>
                  <h3 className="cart_drug_price">{item.itemPrice}</h3>
                </Col>
                <Col md={2}>
                  <div className="cart_actions">
                    <div className="mb-4">
                      <Trash
                        className="trash"
                       
                      />
                    </div>
                    <p className="shipping_fee">Quantity</p>
                    <div className="mb-1">
                      <PlusSquare className="arith" size="1.6em" />
                    </div>
                    <span>1</span>
                    <div className="mb-1">
                      <MinusSquare className="arith" size="1.6em" />
                    </div>
                  </div>
                  <p className="b_m_d">Buy more drugs</p>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          {/* <Card className="cart_card shadow-sm p-3 m-3">
            <h4 className="summary">Summary</h4>
            <Row>
              <Col md={8}>
                <p>Subtotal</p>
                <p>Shipping fee</p>
                <p>Total</p>
              </Col>
              <Col md={4}>
                <div style={{ float: "right", textAlign: "right" }}>
                  <p>10Near</p>
                  <p>121Near</p>
                  <p>121Near</p>
                </div>
              </Col>
            </Row>
            <Button btnText={"Checkout"} className={"checkout_btn"} />
          </Card> */}
        </Col>
      </Row>
    </div>
  );
}
