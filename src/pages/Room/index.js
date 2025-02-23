import { DatePicker, Button, Checkbox, Col, Input, Row, Space, Radio, Select } from 'antd';

import "./BookingRoom.css"
import CartItem from '../../components/CartItem';
import { useState } from 'react';
import { newRoom } from '../../services/listbookroom';
const { RangePicker } = DatePicker;
function BookRoom() {
    const [data, setData] = useState({
        time: "14 giờ"
    })
    const options = [];
    for (let i = 0; i <= 24; i++) {
        options.push({
            value: i > 9 ? `${i} giờ` : `0${i} giờ`
        })
    }
    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(object)
    }
    const handleChangeSelecter = (e) => {
        const object = {
            ...data,
            time: e
        }
        setData(object)
    }

    const handleChangeCheckbox = (e) => {

        const object = {
            ...data,
            services: e
        }
        setData(object)

    }
    const handleChangeDatePicker = (dates, dateStrings) => {

        const object = {
            ...data,
            date: dateStrings
        }
        setData(object)


    }

    const handleSubmit = async () => {
        const res = await newRoom(data);

        if (res) {
            alert("Đặt phòng thành công")
        } else {
            alert("Xin lỗi vui lòng cài đặt sau")
        }

    }

    return (
        <>
            <h2>
                Đặt phòng khách sạn
            </h2>
            <form>
                <Row className='Bookimg__Item' gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={24} lg={12} xl={6} xxl={6}  >
                        <CartItem>Item 1</CartItem>
                    </Col>
                    <Col span={24}>
                        <p>Họ Tên</p>
                        <Input name='fullname' placeholder="Điền họ và tên" onChange={handleChangeInput} />
                    </Col>

                    <Col span={12}>
                        <p>Số điện thoại</p>
                        <Input name='phone' placeholder="+84 123456789" onChange={handleChangeInput} />
                    </Col>
                    <Col span={12}>
                        <p>Email</p>
                        <Input name='fullname' placeholder="levanA@gmail.com" onChange={handleChangeInput} />
                    </Col>

                    <Col span={24}>
                        <p>Địa chỉ</p>
                        <Input name='fullname' placeholder="Điền địa chỉ" onChange={handleChangeInput} />
                    </Col>

                    <Col span={12}>
                        <h4>Lịch trình
                        </h4>
                        <RangePicker placeholder={["Ngày đến:", "Ngày đi:"]} format="DD-MM-YYYY" onChange={handleChangeDatePicker} />
                    </Col>
                    <Col span={12}>
                        <h4>Gio nhan phong
                        </h4>
                        <Select placeholder={["Giờ đến:"]} style={{ width: "100%" }} onChange={handleChangeSelecter} options={options} defaultValue={data.time} />
                    </Col>
                    <Col span={12}>
                        <p>Dịch vụ khác</p>
                        <Checkbox.Group onChange={handleChangeCheckbox}>
                            <Space direction="horizontal">
                                <Checkbox value="thue_xe_may">Thuê xe máy</Checkbox>
                                <Checkbox value="mat_xa">Mát xa</Checkbox>
                                <Checkbox value="thue_xe_oto">Thuê xe ô tô</Checkbox>
                            </Space>
                        </Checkbox.Group>

                    </Col>
                    <Col span={12}>
                        <p>Quà tặng</p>
                        <Radio.Group name='gift' onChange={handleChangeInput}>
                            <Space direction="horizontal">
                                <Radio value="Non_di_bien">Nón đi biển</Radio>
                                <Radio autoFocus={true} value="Voucher">Voucher</Radio>
                            </Space>
                        </Radio.Group>

                    </Col>
                    <Col span={24}>
                        <Button type='primary' onClick={handleSubmit}> Đặt phòng</Button>
                    </Col>

                </Row>

            </form>
        </>
    )
}
export default BookRoom;