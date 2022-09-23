import React from "react";
import { Card, Col, Image, Layout, Row, Typography } from "antd";
const { Text, Link } = Typography;
import styles from "../../styles/Descriptions.module.css";
import { MdOutlinedFlag } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { FaBehanceSquare, FaBriefcase, FaHeadphonesAlt } from "react-icons/fa";
import { BiPen } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";

const { Header, Footer, Sider, Content } = Layout;
type Props = {};
const DescriptionsComponent = (props: Props) => {
  return (
    <>
      <Layout>
        <Sider width={400} breakpoint="md">
          <img
            width="100%"
            height="auto"
            alt="example"
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </Sider>
        <Layout>
          <Layout>
            <Content className={styles.contentheader}>SAMUEL ANDERSON</Content>
            <Sider breakpoint="xl" className={styles.contentheadersider}>
              <div className={styles.contentheaderflexcenter}>
                {" "}
                <AiOutlineDownload size="3vw" className={styles.contenticon} />
              </div>
            </Sider>
          </Layout>{" "}
          <Layout>
            <Content className={styles.contentheaderP1}>
              THE EXPERIENCED UI/UX DESIGNER
            </Content>
            <Sider breakpoint="xl" className={styles.contentheadersiderp1}>
              <div className={styles.contentheaderflexcenter}>
                <FaBehanceSquare size="3vw" className={styles.contenticon} />
              </div>
            </Sider>
          </Layout>{" "}
          <Layout>
            <Content>
              <div className={styles.contentdivflex}>
                {[
                  {
                    text: "HOME",
                    background: "#04b591",
                    icon: <MdOutlinedFlag size="3vw" />,
                  },
                  {
                    text: "RESUME",
                    background: "#008fd9",
                    icon: <IoMdSchool size="3vw" />,
                  },
                  {
                    text: "PORTFOLIO",
                    background: "#a64eb3",
                    icon: <FaBriefcase size="3vw" />,
                  },
                  {
                    text: "CONTACTS",
                    background: "#fe730d",
                    icon: <GoLocation size="3vw" />,
                  },
                  {
                    text: "FEEDBACK",
                    background: "#ff4233",
                    icon: <FaHeadphonesAlt size="3vw" />,
                  },
                  {
                    text: "BLOG",
                    background: "#e79f01",
                    icon: <BiPen size="3vw" />,
                  },
                ].map((data) => (
                  <>
                    <Text
                      style={{
                        backgroundColor: data.background,
                      }}
                      className={styles.contentetext}
                    >
                      {data.icon}
                      {data.text}
                    </Text>
                  </>
                ))}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default DescriptionsComponent;
