import { Typography, Row, Col, Checkbox, Form } from "antd";
import React from "react";

const ContractDetails = (props) => {
	return (
		<div className={"tl-c"}>
			<Typography.Paragraph>Self Contract</Typography.Paragraph>
			<Row justify="center">
				<Col xs={12} sm={12} md={12} lg={12}>
					<Form name="agreeForm" initialValues={{ checked: false }}>
						<div className={"box-div"}>
							<Typography.Paragraph>
								{" "}
								11.2 Entire agreement
							</Typography.Paragraph>
							<Typography.Text className={"pass-keyText"}>
								(a) The placeholder attribute specifies a short hint that
								describes the expected value of an input field (e.g. a sample
								value or a short description of the expected format). The short
								hint is displayed in the input field before the user enters a
								value.
							</Typography.Text>
							<br />
							<Typography.Text className={"pass-keyText"}>
								(a) The placeholder attribute specifies a short hint that
								describes the expected value of an input field (e.g. a sample
								value or a short description of the expected format). The short
								hint is displayed in the input field before the user enters a
								value.
							</Typography.Text>
						</div>
						<Form.Item
							name="remember"
							valuePropName="checked"
							className={"checkbox"}
							rules={[
								{
									required: true,
									message: "Please accept our terms and conditions",
								},
							]}
						>
							<Checkbox
								className={
									"ant-checkbox.ant-checkbox.inner.logged-in ant-checkbox.ant-checkbox.checked.logged-in"
								}
							>
								Agree to your self contract
							</Checkbox>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default ContractDetails;
