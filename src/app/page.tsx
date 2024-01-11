"use client";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import { NextPage } from "next";
import React from "react";
import TopBar from "./components/TopBar";
import { Col, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

// import BarWidget from "./components/barWidget/barWidget";
// import LineWidget from "./components/lineWidget/lineWidget";
const { Header, Footer, Content } = Layout;

const wrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  background: "#f7f8f7",
};
const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
};


const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
};

const pageHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
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
              {/* <LineWidget />
              <BarWidget /> */}

              <Row style={{width: '100%'}} gutter={[16, 16]} >
                <Col span={12}>
                  Chart
                </Col>
                <Col span={12}>
                  Chart
                </Col>
              </Row>
            </section>
          </div>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default Home;
