import { Col, Row } from "antd";
import React from "react";
import useMake from "../../hooks/useMake";
import ContentComponent from "../ContentComponent/ContentComponent";
import DescriptionsComponent from "../DescriptionsComponent/DescriptionsComponent";
import PageHeaderComponent from "../PageHeader/PageHeaderComponent";

type Props = {};

const HomePages = (props: Props) => {
  const { make } = useMake();
  console.log("make", make);

  return (
    <>
      {" "}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <PageHeaderComponent />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <DescriptionsComponent />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <ContentComponent />
        </Col>
      </Row>
    </>
  );
};

export default HomePages;
