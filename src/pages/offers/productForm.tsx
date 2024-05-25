import { LoadingOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input } from "antd";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DefaultInputStyle } from "src/shared/components/commonStyles";
import useCreateProduct from "./hooks/useCreateProduct";
import { useEffect } from "react";

const ProductForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const {
    mutate: createProduct,
    isPending: productLoading,
    isError: productError,
    error: productErrorLog,
  } = useCreateProduct();

  const onFinish = (values: Resource) => {
    values.userId = 1;
    values.available = true;
    console.log(values);
    createProduct(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log(productErrorLog);
  }, [productError]);

  return (
    <div className="intercambios-container">
      <Flex
        style={{ width: "50vw", marginBottom: "20px" }}
        justify="space-between"
      >
        <h1 style={{ fontSize: "28px", color: "#125BD1", margin: "0" }}>
          Ofertas
        </h1>
        <Button
          type="primary"
          onClick={() => {
            navigate("/offers");
          }}
        >
          Volver
        </Button>
      </Flex>
      <Form
        form={form}
        name="login"
        layout="horizontal"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 24 }}
        style={{ color: "aliceblue" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        scrollToFirstError
      >
        <Flex>
          <Flex vertical={true}>
            <Form.Item
              name="resourceName"
              label={
                <span style={{ color: "aliceblue" }}>Nombre del producto</span>
              }
              style={{ color: "aliceblue" }}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                style={DefaultInputStyle}
                prefix={<MdDriveFileRenameOutline />}
              />
            </Form.Item>
            <Form.Item
              name="description"
              label={<span style={{ color: "aliceblue" }}>Descripción</span>}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={DefaultInputStyle} prefix={<HiOutlineMail />} />
            </Form.Item>
            <Form.Item
              name="category"
              label={<span style={{ color: "aliceblue" }}>Categoría</span>}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={DefaultInputStyle} prefix={<AiOutlineUser />} />
            </Form.Item>
          </Flex>
          <Flex vertical={true}>
            <Form.Item
              name="state"
              label={
                <span style={{ color: "aliceblue" }}>Estado del producto</span>
              }
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={DefaultInputStyle} prefix={<AiOutlineLock />} />
            </Form.Item>
            <Form.Item
              name="price"
              label={<span style={{ color: "aliceblue" }}>Precio</span>}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={DefaultInputStyle} prefix={<AiOutlineLock />} />
            </Form.Item>
            <Form.Item
              name="offer_price"
              label={
                <span style={{ color: "aliceblue" }}>Precio de oferta</span>
              }
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={DefaultInputStyle} prefix={<AiOutlineLock />} />
            </Form.Item>
          </Flex>
        </Flex>
        <Form.Item style={{ color: "aliceblue" }}>
          <Button type="primary" disabled={productLoading} htmlType="submit">
            {false ? <LoadingOutlined /> : "Crear producto"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
