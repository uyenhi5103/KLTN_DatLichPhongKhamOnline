import {
    EnvironmentOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined,
    PhoneOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import React from "react";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <AntFooter style={{ background: "rgb(226, 250, 242)", padding: "40px 0 20px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
                <Row gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={8} lg={8}>
                        <Title level={4} style={{ color: "black" }}>Công ty của chúng tôi</Title>
                        <Text style={{ color: "rgb(45 145 179)", display: "block" }}>
                            Chúng tôi cung cấp các dịch vụ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng với sự chuyên nghiệp và tận tâm.
                        </Text>
                        <Space style={{ marginTop: "20px" }}>
                            <Link href="#" target="_blank">
                                <FacebookOutlined style={{ color: "black", fontSize: "20px" }} />
                            </Link>
                            <Link href="#" target="_blank">
                                <TwitterOutlined style={{ color: "black", fontSize: "20px" }} />
                            </Link>
                            <Link href="#" target="_blank">
                                <InstagramOutlined style={{ color: "black", fontSize: "20px" }} />
                            </Link>
                        </Space>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={8}>
                        <Title level={4} style={{ color: "black" }}>Liên kết nhanh</Title>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={{ margin: "8px 0" }}>
                                <Link style={{ color: "rgb(45 145 179)" }} href="/">Trang chủ</Link>
                            </li>
                            <li style={{ margin: "8px 0" }}>
                                <Link style={{ color: "rgb(45 145 179)" }} href="#">Về chúng tôi</Link>
                            </li>
                            <li style={{ margin: "8px 0" }}>
                                <Link style={{ color: "rgb(45 145 179)" }} href="#">Dịch vụ</Link>
                            </li>
                            <li style={{ margin: "8px 0" }}>
                                <Link style={{ color: "rgb(45 145 179)" }} href="#">Sản phẩm</Link>
                            </li>
                            <li style={{ margin: "8px 0" }}>
                                <Link style={{ color: "rgb(45 145 179)" }} href="#">Liên hệ</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col xs={24} md={8} lg={8}>
                        <Title level={4} style={{ color: "black" }}>Thông tin liên hệ</Title>
                        <Space direction="vertical" style={{ width: "100%" }}>
                            <Space>
                                <EnvironmentOutlined style={{ color: "rgb(45 145 179)" }} />
                                <Text style={{ color: "rgb(45 145 179)" }}>09 Phong Châu, Tân Bình, Hồ Chí Minh</Text>
                            </Space>
                            <Space>
                                <PhoneOutlined style={{ color: "rgb(45 145 179)" }} />
                                <Text style={{ color: "rgb(45 145 179)" }}>0333 452 911</Text>
                            </Space>
                            <Space>
                                <MailOutlined style={{ color: "rgb(45 145 179)" }} />
                                <Text style={{ color: "rgb(45 145 179)" }}>cskh@lifeline.vn</Text>
                            </Space>
                        </Space>
                    </Col>
                </Row>

                <Divider style={{ borderColor: "#ffffff33", margin: "24px 0" }} />

                <Row justify="center">
                    <Col style={{ textAlign: "center" }}>
                        <Text style={{ color: "black" }}>
                            Các thông tin trên Lifeline Medical chỉ dành cho mục đích tham khảo, tra cứu và không thay thế cho việc chẩn đoán hoặc điều trị y khoa.
                        </Text>
                        <br />
                        <Text style={{ color: "black" }}>
                            Cần tuyệt đối tuân theo hướng dẫn của Bác sĩ và Nhân viên y tế.
                        </Text>
                        <br />
                        <Text style={{ color: "black" }}>
                            Copyright © 2018 - {currentYear} Công ty TNHH Lifeline Medical Việt Nam.
                        </Text>
                    </Col>
                </Row>
            </div>
        </AntFooter>
    );
};

export default Footer;