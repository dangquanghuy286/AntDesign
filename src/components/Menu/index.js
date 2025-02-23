import { AppstoreOutlined, MailOutlined, PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function MenuSider() {
    const items = [
        {
            key: '/',
            icon: <MailOutlined />,
            label: <Link to="/">Dashboard</Link>,
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ],
        },
        {
            key: '2',
            icon: <AppstoreOutlined />,
            label: 'Navigation Two',
            children: [
                { key: '/book-room', label: <Link to="/book-room">BookRoom</Link> },
                { key: '22', label: 'Option 2' },
                {
                    key: '23',
                    label: 'Submenu',
                    children: [
                        { key: '231', label: 'Option 1' },
                        { key: '232', label: 'Option 2' },
                        { key: '233', label: 'Option 3' },
                    ],
                },
                {
                    key: '24',
                    label: 'Submenu 2',
                    children: [
                        { key: '241', label: 'Option 1' },
                        { key: '242', label: 'Option 2' },
                        { key: '243', label: 'Option 3' },
                    ],
                },
            ],
        },
        {
            key: '/create-room',
            icon: <PlusOutlined />,
            label: <Link to="/create-room">Tạo phòng</Link>,
        },
        {
            key: '/list-room',
            icon: <UnorderedListOutlined />,
            label: <Link to="/list-room">List phòng</Link>,
        },
    ];

    return (
        <>

            <br />
            <Menu
                mode="inline"
                items={items}
            />
        </>
    )
}
export default MenuSider;