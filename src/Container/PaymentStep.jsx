import React from "react";
import { Typography, Form, Input, Row, Col } from "antd";

const PaymentStep = (props) => {
    return(
        <div className={"tl-c"}>
            <Typography.Paragraph>Payment</Typography.Paragraph>
            <Row justify="center">
            <Col xs={24} sm={24} md={24} lg={24}>
            <Form name="paymentform" wrapperCol={{span: 24}} autoComplete="off">
                <Form.Item name="name" rules={[{required:true,message:'Name is Required'},{pattern:'[a-z][A-Z]',message:'Please Enter Valid Name'}]}>
                    <Input placeholder="Name" className={'payment-input'}/>
                </Form.Item>
                <Form.Item name="card" rules={[{required:true,message:'Card is Required'},{pattern:'[0-9]{16}',message:'Please Enter Valid Card'}]}>
                    <Input placeholder="Card Number" className={'payment-input'}/>
                </Form.Item>
                <Row justify="space-between">
                    <Col xs={8} sm={8} md={8} lg={8} >
                    <Form.Item name="expiry" rules={[{required:true,message:'Date is Required'},{pattern:'(0[1-9]|[12][0-9]-([0-9]{4}))',message:'Please Enter Valid Date'}]}>
                        <Input placeholder="Expiry" className={'payment-input'}/>
                    </Form.Item>  
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} >
                    <Form.Item name="cvv" rules={[{required:true,message:'CVV is Required'},{pattern:'[0-9]{3}',message:'Please Enter Valid CVV'}]}>
                        <Input placeholder="CVV" className={'payment-input'}/>
                    </Form.Item>
                    </Col>
                </Row>
            </Form>
            </Col>
            </Row>
        </div>
    )
}

export default PaymentStep;