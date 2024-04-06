import { Button, Card, Col, Form, Input, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Register = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundImage: `url("./loginbg.webp")`,
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
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "aliceblue",
                    minHeight: "50px",
                    fontSize: "20px",
                  }}
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Link to={""} style={{ color: "#ADD8E6" }}>
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item style={{ color: "aliceblue" }}>
                <Button type="primary">Log in</Button>
                Or{" "}
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

export default Register;
