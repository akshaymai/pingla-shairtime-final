import React, { useState } from "react";
import { Steps, PageHeader, Row, Col, Typography, Button } from "antd";
import Logo from "../assets/reactjs-icon.svg";
import "../App.css";
import { AuthSteps } from "../constants";

const { Step } = Steps;
const StepAuth = (props) => {
	const [current, setCurrent] = useState(0);
    const nextPage = () => {
        setCurrent(current+1)
    }
	return (
		<div>
			<PageHeader className={"page-headDiv"}>
				<Row justify="center" align="middle" >
					<Col xs={16} sm={16} md={16} lg={8}>
						<div className={"tl-c"}>
							<img src={Logo} className={"page-headerLogo"} alt="" />
							<Typography.Title level={1}>SHAIRTIME</Typography.Title>
						</div>
					</Col>
				</Row>
			</PageHeader>
			<Row justify="center" >
				<Col xs={16} sm={16} md={16} lg={8}>
					<Steps current={current}>
						{AuthSteps.map((item) => (
							<Step key={item.title} title={item.title} />
						))}
					</Steps>
                    <div>{AuthSteps[current].content}</div>
				</Col>
			</Row>
            <Row justify="center">
                <Col xs={24} sm={24} md={16} lg={8} className={"tl-c"}>            
                    <Button className={"submit-step"} onClick={nextPage}>SUBMIT</Button>
                </Col>
            </Row>
		</div>
	);
};

export default StepAuth;
