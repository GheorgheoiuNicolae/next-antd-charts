"use client";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import React from "react";
import TopBar from "./components/TopBar";
import Widget from "./components/Widget";
import PieWidget from "./components/PieChart";
import BarWidget from "./components/ChartByMonth";
import { Col, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const { Content } = Layout;

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "#f7f8f7",
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
};

const pageHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: '20px'
};

const chartsWrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const Home = () => {
  return (
    <Space direction="vertical" size={[0, 48]} style={wrapperStyle}>
      <Layout>
        <TopBar />
        <Content style={contentStyle}>
          <div className="container">
            <section className="page-heading container" style={pageHeaderStyle}>
              <h3 style={{ margin: 0 }}>Page title</h3>
              <div className="buttons">
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Export to PDF
                </Button>
                <Button
                  type="default"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Notes (3)
                </Button>
                <Button
                  type="default"
                  icon={<DownloadOutlined />}
                  size={"middle"}
                  style={{ marginRight: "10px" }}
                >
                  Filter
                </Button>
              </div>
            </section>
            <section className="container" style={chartsWrapperStyles}>
              <Row style={{width: '100%'}} gutter={[16, 16]} >
                <Col span={12}>
                  <Widget title="Total deaths by Month">
                    <BarWidget />
                  </Widget>
                </Col>
                <Col span={12}>
                  <Widget title="Widget">
                    <PieWidget />
                  </Widget>
                </Col>
              </Row>
            </section>
          </div>
        </Content>
      </Layout>
    </Space>
  );
};

export default Home;
