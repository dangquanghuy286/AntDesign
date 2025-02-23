import { Button, Cascader, DatePicker, Form, Input, InputNumber, Mentions, Select, Switch } from "antd";
const { RangePicker } = DatePicker;
function CreateRoom() {
    const handleonChangeStatus = (e) => {
        console.log(e);


    }
    const handleSubmit = (e) => {
        console.log(e);
    }
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    };
    return (
        <>
            <h3>
                Thêm phòng mới
            </h3>
            <Form name="create-room" {...formItemLayout} onFinish={handleSubmit}>
                <Form.Item
                    label="Tên"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="SĐT"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập SDT!',
                        },
                    ]}
                >
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập địa chỉ!',
                        },
                    ]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Email!',
                        },
                    ]}
                >
                    <Mentions />
                </Form.Item>

                <Form.Item
                    label="Chọn phòng"
                    name="pick_room"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng chọn phòng!',
                        },
                    ]}
                >
                    <Select mode="multiple" allowClear>
                        <Select.Option value="vip">Phòng VIP</Select.Option>
                        <Select.Option value="standard">Phòng thường</Select.Option>
                    </Select>

                </Form.Item>

                <Form.Item
                    label="Chọn vị trí cho phòng"
                    name="place"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng chọn vị trí cho phòng!',
                        },
                    ]}
                >
                    <Cascader
                        options={[
                            {
                                value: 'tang-1',
                                label: 'Tầng 1',
                                children: [
                                    { value: 'phong-101', label: 'Phòng 101' },
                                    { value: 'phong-102', label: 'Phòng 102' },
                                ],
                            },
                            {
                                value: 'tang-2',
                                label: 'Tầng 2',
                                children: [
                                    { value: 'phong-201', label: 'Phòng 201' },
                                    { value: 'phong-202', label: 'Phòng 202' },
                                ],
                            },
                        ]}
                    />

                </Form.Item>

                <Form.Item label="Chọn giường" name="BedType" rules={[{ required: true, message: 'Vui lòng chọn loại giường!' }]}>
                    <Select placeholder="Chọn loại giường">
                        <Select.Option value="single">Giường đơn</Select.Option>
                        <Select.Option value="double">Giường đôi</Select.Option>
                        <Select.Option value="bunk">Giường tầng</Select.Option>
                        <Select.Option value="king">Giường King-size</Select.Option>
                    </Select>
                </Form.Item>




                <Form.Item
                    label="Thời gian "
                    name="bookingPeriod"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng chọn thời gian !',
                        },
                    ]}
                >
                    <RangePicker placeholder={["Ngày đến:", "Ngày đi"]} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    label="Trạng thái"
                    name="status"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng chọn thời gian !',
                        },
                    ]}
                >
                    <Switch defaultChecked onChange={handleonChangeStatus} />

                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default CreateRoom;