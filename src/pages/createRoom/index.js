import { Button, Cascader, DatePicker, Form, Input, InputNumber, message, Select, Switch } from "antd";
import { createRoom } from "../../services/serviceRoom";

const { RangePicker } = DatePicker;

function CreateRoom() {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const handleChangeStatus = (status) => {
        console.log("Trạng thái phòng:", status);
    };

    const handleSubmit = async (values) => {
        const res = await createRoom(values);
        if (res) {
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: 'Tạo mới thành công',
                duration: 2,

            });
        } else {
            messageApi.open({
                type: 'error',
                content: 'Tạo mới thất bại',
                duration: 2
            });
        }
    };

    const formItemLayout = {
        labelCol: { xs: { span: 24 }, sm: { span: 6 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
    };

    return (
        <>
            {contextHolder}
            <h3>Thêm Phòng Mới</h3>
            <Form name="create-room" {...formItemLayout} onFinish={handleSubmit} form={form}>
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

                <Form.Item
                    label="Trạng Thái Phòng"
                    name="roomStatus"
                    rules={[{ required: true, message: "Vui lòng chọn trạng thái phòng!" }]}
                >
                    <Switch defaultChecked onChange={handleChangeStatus} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit" >
                        Thêm Phòng
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CreateRoom;
