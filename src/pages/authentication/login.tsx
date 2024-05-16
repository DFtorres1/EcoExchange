import { Button, Card, Checkbox, Col, Flex, Form, Input, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useAuthentication from "./hooks/useAuthenticate";
import { useEffect } from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { DefaultInputStyle } from "src/shared/components/commonStyles";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: LoginObjectModel) => {
    console.log("Success:", values);
    authenticateUser(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const {
    mutate: authenticateUser,
    //error: authenticationError,
    isSuccess: authenticationSuccess,
    isPending: authLoading,
  } = useAuthentication();

  useEffect(() => {
    if (authenticationSuccess) {
      navigate("/");
    }
  }, [authenticationSuccess, navigate]);

  return (
    <div
      style={{
        backgroundImage: `url("./fondo.jpg")`,
        minHeight: "80vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "aliceblue",
        padding: "10vh 10vw",
      }}
    >
      <Card
        style={{
          padding: "20px",
          width: "80vw",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          border: "0",
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <Form
              name="login"
              style={{ maxWidth: 300, color: "aliceblue" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  style={DefaultInputStyle}
                  prefix={<AiOutlineUser />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  style={DefaultInputStyle}
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: "aliceblue" }}>
                    Remember me
                  </Checkbox>
                </Form.Item>

                <Link to={""} style={{ color: "#ADD8E6" }}>
                  Forgot password
                </Link>
              </Form.Item>
              <Form.Item
                style={{
                  color: "aliceblue",
                }}
              >
                <Flex justify="space-between">
                  <Button
                    type="primary"
                    disabled={authLoading}
                    htmlType="submit"
                  >
                    {authLoading ? <LoadingOutlined /> : "SIGN IN"}
                  </Button>
                  Or
                  <Link to={"/register"} style={{ color: "#ADD8E6" }}>
                    Registrate
                  </Link>
                </Flex>
              </Form.Item>
            </Form>
          </Col>
          <Col>
            <div
              style={{
                backgroundImage: `url("./EcoExLogo.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: "40vw",
                minHeight: "15vh",
              }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
