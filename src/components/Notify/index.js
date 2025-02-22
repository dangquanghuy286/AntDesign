import { BellOutlined, SettingOutlined, WindowsOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import "./Notify.scss"
function Notify() {
    const items = [
        {
            label: <div className="notify__item">
                <div className="notify__item-logo"><WindowsOutlined /></div>
                <div className="notify__item-title">
                    <div className="notify__item-container">
                        <div className="notify__item-content">Item 1</div>
                        <div className="notify__item-time">10 phút trước</div>
                    </div>
                    <div className="notify__item-request" >
                        <SettingOutlined />

                    </div>
                </div>
            </div>,
            key: '1',
        },
        {
            label: 'Clicking me will not close the menu also.',
            key: '2',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '3',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '4',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '5',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '6',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '7',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '8',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '9',
        },
        {
            label: 'Clicking me will close the menu.',
            key: '10',
        },
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={["click"]}
                dropdownRender={(menu) => (
                    <>
                        <div className="notify__dropdown">
                            <div className="notify__header">
                                <div className="notify__header-title">
                                    <BellOutlined /> Thông Báo
                                </div>
                                <Button type="link">View All
                                </Button>
                            </div>
                            <div className="notify__body">
                                {menu}
                            </div>
                        </div>
                    </>
                )}>
                <Button type="text" icon={<BellOutlined />}></Button>


            </Dropdown>
        </>
    )
}
export default Notify;