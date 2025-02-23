import { useEffect, useState } from "react"
import { getListRoom } from "../../services/serviceRoom";
import { Badge, Card, Col, Row } from "antd";

function ListRoom() {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListRoom();
            setRoom(res)
        }
        fetchApi();
    }, []);
    console.log(room);

    return (
        <>
            <Row gutter={[20, 20]}>
                {room.map((item) => (
                    <Col span={12} key={item.id}>
                        <Badge.Ribbon text={item.roomType?.includes("vip") ? "Phòng VIP" : "Phòng thường"} color={item.roomType?.includes("vip") ? "red" : "green"}>
                            {/* sử dụng includes() để kiểm tra xem "vip" có trong danh sách đã chọn hay không: */}
                            <Card title={item.roomName}>
                                <p>
                                    Số giường: <strong>
                                        {item.bedCount}
                                    </strong>
                                </p>
                                <p>
                                    Số người: <strong>
                                        {item.maxOccupancy}
                                    </strong>
                                </p>
                                {/* <p>
                                Loại phòng: <strong>
                                    
                                    {item.roomType.map((type) => roomLabels[type]).join(", ")}
                                </strong>
                            </p> */}
                                <p>
                                    {item.roomStatus ? (<Badge status="success" text="Còn phòng" />) : (<Badge status="error" text="Hết phòng" />)}
                                </p>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default ListRoom;