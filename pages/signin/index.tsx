import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import React from "react";
import useSession from "../../hooks/useSession";
import useSignup from "../../hooks/useSignup";
import { fetchData } from "../../service/data";
import styles from "../signin/Index.module.css";

type Props = {};
const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  justifyContent: "center",
};
const Index = (props: Props) => {
  const { signup, setSignup } = useSignup();
  const { status, setStatus } = useSession();
  const router = useRouter();
  const onFinish = (values: { Email: string; password: string }) => {
    let _filter = signup.filter(
      (item) => item.email === values.Email && item.password === values.password
    );
    console.log("values", values, signup, _filter);

    if (_filter.length > 0) {
      setStatus("authenticated");
      router.push("/showdata");
    } else {
      setStatus("unauthenticated");
      error();
      return;
    }
  };
  const error = () => {
    message.error("Login not successful");
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.top}>
      <Card className={styles.loginformcontent}>
        <Card hoverable={false} style={gridStyle}>
          <Form
            name="normal_login"
            className={styles.loginform}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <p>Signup</p>
            <Form.Item
              name="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginformbutton}
              >
                Log in
              </Button>
              Or <a onClick={() => router.push("/signup")}>register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </Card>{" "}
    </div>
  );
};

export default Index;
