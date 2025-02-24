import { EditOutlined } from "@ant-design/icons";
import { Button, Cascader, Form, Input, InputNumber, Modal, Select, DatePicker, Switch, notification, Spin } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { updateRoom } from "../../services/serviceRoom";
const { RangePicker } = DatePicker;
function EditRoom(props) {
    const { record, onReload } = props
    const [notifiApi, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const [spin, setSpin] = useState(false);
    const handleChangeStatus = (status) => {
        console.log("Trạng thái phòng:", status);
    };

    const handleSubmit = async (data) => {
        setSpin(true)
        const res = await updateRoom(record.id, data);
        setTimeout(() => {
            if (res) {
                notifiApi.success({

                    message: "Thành công",
                    description: `Bạn đã cập nhật thành công ${record.roomName}`,
                    duration: 2,

                });
                setShowModal(false);
                onReload();
            } else {
                notifiApi.error({
                    message: "Thất bại",
                    description: `Bạn đã cập nhật thất bại ${record.roomName}`,
                    duration: 2
                });
            }
            setSpin(false)
        }, 3000)
    };

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleCancel = () => {
        setShowModal(false)
    }
    const formItemLayout = {
        labelCol: { xs: { span: 24 }, sm: { span: 6 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
    };
    return (
        <>
            {contextHolder}
            <Button type="primary" size="small" icon={<EditOutlined />} onClick={handleShowModal} />
            <Modal title="Chỉnh sửa phòng" open={showModal} onCancel={handleCancel} footer={null} >
                <Spin tip="Đang tải" delay={5} spinning={spin}><Form name="create-room" {...formItemLayout} onFinish={handleSubmit} form={form} initialValues={{
                    ...record,
                    bookingPeriod: record.bookingPeriod
                        ? [dayjs(record.bookingPeriod[0]), dayjs(record.bookingPeriod[1])] : []
                    // : []//Đây là cách xử lý giá trị mặc định cho trường ngày tháng bookingPeriod trong RangePicker.
                    // 🔹 Giả sử record.bookingPeriod có giá trị dạng mảng [ "2025-02-01", "2025-02-10" ]:
                    // Chúng ta cần chuyển "2025-02-01" và "2025-02-10" thành đối tượng dayjs, vì RangePicker yêu cầu dữ liệu ở dạng dayjs.
                }}>
                    <Form.Item
                        label="Tên Phòng"
                        name="roomName"
                        rules={[{ required: true, message: "Vui lòng nhập tên phòng!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Số Người Tối Đa"
                        name="maxOccupancy"
                        rules={[{ required: true, message: "Vui lòng nhập số lượng người!" }]}
                    >
                        <InputNumber min={0} style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Mô Tả"
                        name="description"
                        rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
                    >
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item
                        label="Số Lượng Giường"
                        name="bedCount"
                        rules={[{ required: true, message: "Vui lòng nhập số lượng giường!" }]}
                    >
                        <InputNumber min={0} style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Loại Phòng"
                        name="roomType"
                        rules={[{ required: true, message: "Vui lòng chọn loại phòng!" }]}
                    >
                        <Select mode="multiple" allowClear>
                            <Select.Option value="vip">Phòng VIP</Select.Option>
                            <Select.Option value="standard">Phòng Thường</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Vị Trí Phòng"
                        name="roomLocation"
                        rules={[{ required: true, message: "Vui lòng chọn vị trí phòng!" }]}
                    >
                        <Cascader
                            options={[
                                {
                                    value: "tang-1",
                                    label: "Tầng 1",
                                    children: [
                                        { value: "phong-101", label: "Phòng 101" },
                                        { value: "phong-102", label: "Phòng 102" },
                                    ],
                                },
                                {
                                    value: "tang-2",
                                    label: "Tầng 2",
                                    children: [
                                        { value: "phong-201", label: "Phòng 201" },
                                        { value: "phong-202", label: "Phòng 202" },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Loại Giường"
                        name="bedType"
                        rules={[{ required: true, message: "Vui lòng chọn loại giường!" }]}
                    >
                        <Select placeholder="Chọn loại giường">
                            <Select.Option value="single">Giường Đơn</Select.Option>
                            <Select.Option value="double">Giường Đôi</Select.Option>
                            <Select.Option value="bunk">Giường Tầng</Select.Option>
                            <Select.Option value="king">Giường King-size</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Thời Gian Đặt"
                        name="bookingPeriod"
                        rules={[{ required: true, message: "Vui lòng chọn thời gian đặt phòng!" }]}
                    >
                        <RangePicker placeholder={["Ngày đến", "Ngày đi"]} style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item layout="vertical"
                        label="Trạng Thái Phòng"
                        name="roomStatus"
                        rules={[{ required: true, message: "Vui lòng chọn trạng thái phòng!" }]}
                    >
                        <Switch defaultChecked onChange={handleChangeStatus} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit" >
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form></Spin>
            </Modal>
        </>
    )
}
export default EditRoom;