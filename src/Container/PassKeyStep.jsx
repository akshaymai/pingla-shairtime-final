import { Typography, Row, Col } from "antd";
import React from "react";

const PassKeyStep = (props) => {
	return (
		<div className={"tl-c"}>
			<Typography.Paragraph>passkey</Typography.Paragraph>
			<Row justify="center">
				<Col xs={16} sm={16} md={16} lg={16}>
					<div className={"box-div"}>
						<Typography.Text className={"pass-keyText"}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</Typography.Text>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default PassKeyStep;
