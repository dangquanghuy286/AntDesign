import { Layout, QRCode, Rate } from "antd";
// import HocGrid from "../../components/Grid";
// import FooterDefault from "../../components/Footer";
import logo from "../../image/QH_logo.png";
import {
    SearchOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import { useState } from "react";
import "./Header.scss";
import Notify from "../../components/Notify";
import MenuSider from "../../components/Menu";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

function LayoutDefault() {
    const [collaps, setCollaps] = useState(false);

    return (
        <Layout className="layout-default">
            <header className="layout-default__header">
                <div className={`layout-default__logo ${collaps ? "layout-default__logo--hidden" : ""}`}>
                    <img className="layout-default__logo-img" alt="Logo" src={logo} />
                </div>

                <div className="layout-default__nav">
                    <div className="layout-default__nav-left">
                        <div className="layout-default__collapse" onClick={() => setCollaps(!collaps)}>
                            {collaps ? <MenuFoldOutlined /> :
                                <MenuUnfoldOutlined />}
                        </div>
                        <div className="layout-default__search"><SearchOutlined /></div>
                    </div>
                    <div className="layout-default__nav-right">
                        <Notify />
                    </div>
                </div>
            </header>
            <Layout className="layout-default__body">
                <Sider className="layout-default__sider" collapsed={collaps} theme="light"><MenuSider /></Sider>
                <Content className="layout-default__content">
                    <Outlet />
                </Content>
                <QRCode value="https://www.facebook.com/dangquanghuy2806">


                </QRCode>
                <Rate allowHalf ></Rate>
            </Layout>
            {/* <FooterDefault /> */}
        </Layout>
    );
}

export default LayoutDefault;
