import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import styles from "../signin/Index.module.css";
type Props = {};
const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  justifyContent: "center",
};
const Index = (props: Props) => {
  const { signup, setSignup } = useSignup();
  const [email, setEmail] = useState<boolean>(false);
  const router = useRouter();
  const [form] = Form.useForm();
  const error = () => {
    message.error("This is an error duplicate emails. ");
  };
  const onFinish = (values: any) => {
    if (email) {
      error();
      return;
    }
    let _signup = signup;
    _signup.push(values);
    setSignup([..._signup]);
    router.push("/");
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
              name="email"
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
                onBlur={(e) => {
                  let _filter = signup.filter(
                    (Item) => Item.email === e.target.value
                  );
                  if (_filter.length > 0) {
                    setEmail(true);
                    error();
                  } else {
                    setEmail(false);
                  }
                }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  pattern: new RegExp(/([a-z])/),
                  message: "At least one lowercase",
                },
                {
                  pattern: new RegExp(/([A-Z])/),
                  message: "At least one uppercase",
                },
                {
                  pattern: new RegExp(/([0-9])/),
                  message: "At least one numeric",
                },
                {
                  min: 8,
                  message: "Minimum 8 characters",
                },
                { required: true, message: "Account name is required." },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.loginformbutton}
              >
                Signup
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Card>{" "}
    </div>
    // <div className={styles.top}>
    //   <Card className={styles.loginformcontent}>
    //     <Card hoverable={false} style={gridStyle}>
    //       <Form
    //         name="basic"
    //         initialValues={{ remember: true }}
    //         onFinish={onFinish}
    //         onFinishFailed={onFinishFailed}
    //         autoComplete="off"
    //         labelCol={{ span: 8 }}
    //         wrapperCol={{ span: 16 }}
    //       >
    //         <Form.Item
    //           label="Email"
    //           name="email"
    //           validateStatus={email ? "error" : undefined}
    //           rules={[
    //             {
    //               type: "email",
    //               message: "The input is not valid E-mail!",
    //             },
    //             { required: true, message: "Please input your username!" },
    //             { warningOnly: email, message: "Please input " },
    //           ]}
    //         >
    //           <Input
    //             onBlur={(e) => {
    //               let _filter = signup.filter(
    //                 (Item) => Item.email === e.target.value
    //               );
    //               if (_filter.length > 0) {
    //                 setEmail(true);
    //                 error();
    //                 console.log("_filter", _filter);
    //               } else {
    //                 setEmail(false);
    //                 console.log("_filter", _filter);
    //               }
    //             }}
    //           />
    //         </Form.Item>
    //         <Form.Item
    //           name="password"
    //           label="Password"
    //           rules={[
    //             {
    //               pattern: new RegExp(/([a-z])/),
    //               message: "At least one lowercase",
    //             },
    //             {
    //               pattern: new RegExp(/([A-Z])/),
    //               message: "At least one uppercase",
    //             },
    //             {
    //               pattern: new RegExp(/([0-9])/),
    //               message: "At least one numeric",
    //             },
    //             {
    //               min: 8,
    //               message: "Minimum 8 characters",
    //             },
    //             { required: true, message: "Account name is required." },
    //           ]}
    //         >
    //           <Input.Password />
    //         </Form.Item>
    //         <Form.Item>
    //           <Form.Item name="remember" valuePropName="checked" noStyle>
    //             <Checkbox>Remember me</Checkbox>
    //           </Form.Item>
    //         </Form.Item>
    //         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    //           <Button
    //             type="primary"
    //             htmlType="submit"
    //             className={styles.loginformbutton}
    //           >
    //             Submit
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </Card>
    //   </Card>
    // </div>
  );
};

export default Index;
