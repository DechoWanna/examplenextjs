import React from "react";
import { Button, Descriptions, PageHeader } from "antd";
import styles from "../../styles/PageHeader.module.css";
import useSignup from "../../hooks/useSignup";
import { useRouter } from "next/router";
type Props = {};

const PageHeaderComponent = (props: Props) => {
  const { signup, setSignup } = useSignup();
  const router = useRouter();
  return (
    <>
      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        className={styles.pageHeader}
        extra={[
          <Button
            className={styles.Login}
            onClick={() => {
              router.push("/signin");
              // window.history.pushState("", "", "/signup");
              // window.history.go();
            }}
          >
            Login
          </Button>,
          <Button
            className={styles.Signup}
            key="2"
            onClick={() => {
              router.push("/signup");
              // window.history.pushState("", "", "/signup");
              // window.history.go();
            }}
          >
            Signup
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
};

export default PageHeaderComponent;
