import { Layout, Typography } from "antd";
import React from "react";

type Props = {};
const { Header, Footer, Sider, Content } = Layout;
const { Text, Link } = Typography;
const ContentComponent = (props: Props) => {
  return (
    <>
      <Layout>
        <Layout>
          <Content
            style={{
              backgroundColor: "#fff",
              fontSize: "1.5vw",
              display: "flex",
              padding: "24px 24px 0px 24px",
              alignItems: "start",
            }}
          >
            GRIDUS RESUME HTML TEMPLATE
          </Content>
          <Content
            style={{
              backgroundColor: "#fff",
              fontSize: "2vw",
              height: "100%",
              display: "flex",
              alignItems: "center",
              padding: "10px 24px 0px 24px",
            }}
          >
            <div>
              <p style={{ fontSize: "0.8vw" }}>
                Ant Design, a design language for background applications, is
                refined by Ant UED Team. Ant Design, a design language for
                background applications, is refined by Ant UED Team. Ant Design,
                a design language for background applications, is refined by Ant
                UED Team. Ant Design, a design language for background
                applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.8vw" }}>
                Ant Design, a design language for background applications, is
                refined by Ant UED Team. Ant Design, a design language for
                background applications, is refined by Ant UED Team. Ant Design,
                a design language for background applications, is refined by Ant
                UED Team. Ant Design, a design language for background
                applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.8vw" }}>
                Ant Design, a design language for background applications, is
                refined by Ant UED Team. Ant Design, a design language for
                background applications, is refined by Ant UED Team. Ant Design,
                a design language for background applications, is refined by Ant
                UED Team. Ant Design, a design language for background
                applications, is refined by Ant UED Team. Ant Design, a design
                language for background applications
              </p>
            </div>
          </Content>
          {/* <Content
            style={{
              backgroundColor: "#fff",
              fontSize: "2vw",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Content
          </Content> */}
        </Layout>
        <Sider
          breakpoint="md"
          width={"30vw"}
          style={{
            backgroundColor: "#ededed",
            height: "100%",
            width: 500,
            // display: "flex",
          }}
        >
          <Content
            style={{
              backgroundColor: "#ededed",
              // fontSize: "2vw",
              height: "100%",
              display: "flex",
              padding: "24px 24px 24px 60px",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: "1.5vw" }}>{"persona info".toUpperCase()}</p>
            <div style={{ width: "100%", display: "flex" }}>
              <p style={{ fontSize: "0.8vw", flex: 0.3 }}>Name :</p>
              <p style={{ fontSize: "0.8vw", flex: 1 }}> Samuel Anderson</p>
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              <p style={{ fontSize: "0.8vw", flex: 0.3 }}>Birthday :</p>
              <p style={{ fontSize: "0.8vw", flex: 1 }}> 06/12/1998</p>
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              <p style={{ fontSize: "0.8vw", flex: 0.3 }}>address :</p>
              <p style={{ fontSize: "0.8vw", flex: 1 }}> Khon Kaen</p>
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              <p style={{ fontSize: "0.8vw", flex: 0.3 }}>telephone :</p>
              <p style={{ fontSize: "0.8vw", flex: 1 }}> 0982313699</p>
            </div>
            <div style={{ width: "100%", display: "flex" }}>
              <p style={{ fontSize: "0.8vw", flex: 0.3 }}>Email :</p>
              <p style={{ fontSize: "0.8vw", flex: 1 }}>
                {" "}
                decho_wanna_only@gmail.com
              </p>
            </div>
          </Content>
        </Sider>
      </Layout>
    </>
  );
};

export default ContentComponent;
