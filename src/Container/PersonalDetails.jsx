import React from "react";
import { Typography, Form, Input, Row, Col, Button } from "antd";

const PaymentStep = (props) => {
  return (
    <div className="tl-c">
      <Typography.Paragraph>Personal Details</Typography.Paragraph>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form name="loginform" wrapperCol={{ span: 24 }} autoComplete="off">
            <Form.Item
              name="firstname"
              rules={[
                { required: true, message: "First Name is Required" },
                {
                  pattern: "[A-Za-z]",
                  message: "Please Enter Valid Name",
                },
              ]}
            >
              <Input placeholder="First Name" className={"payment-input"} />
            </Form.Item>
            <Form.Item
              name="lastname"
              rules={[
                { required: true, message: "Last Name is Required" },
                {
                  pattern: "[A-Za-z]",
                  message: "Please Enter Valid Name",
                },
              ]}
            >
              <Input placeholder="Last Name" className={"payment-input"} />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Phone Number is Required" },
                {
                  pattern: '[0-9]{10}',
                  message: "Please Enter Valid Phone Numbers",
                },
              ]}
            >
              <Input placeholder="Telephone Number" className={"payment-input"} />
            </Form.Item>
            <Row justify="end">
              <Button className="submit-step">Send</Button>
            </Row>

            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Username is Required" },
                { pattern: "[a-z]", message: "Please Enter Valid Username" },
              ]}
            >
              <Input placeholder="Username" className={"payment-input"} />
            </Form.Item>
            <Form.Item
              name="otp"
              rules={[
                { required: true, message: "otp is Required" },
                { pattern: "[0-9]", message: "Please Enter Valid Otp" },
              ]}
            >
              <Input placeholder="Enter One Time Password" className={"payment-input"} />
            </Form.Item>
 
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentStep;
