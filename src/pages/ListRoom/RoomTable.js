import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

function RoomTable(props) {
    const { room, onReload } = props;
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'roomName',
            key: 'roomName',
        },
        {
            title: 'Số người',
            dataIndex: 'maxOccupancy',
            key: 'maxOccupancy',
        },
        {
            title: 'Số giường',
            dataIndex: 'bedCount',
            key: 'bedCount',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'roomStatus',
            key: 'roomStatus',
            render: (text, record) => {
                console.log(text, record);
                return <>
                    {record.roomStatus ? (
                        <>
                            <Badge text="Còn phòng" color="green"></Badge>
                        </>
                    ) : (
                        <>
                            <Badge text="Hết phòng" color="red"></Badge>
                        </>
                    )}
                </>
            }
        },
        {
            title: 'Cấp bậc',
            dataIndex: 'roomType',
            key: 'roomType',
            render: (text, record) => {
                console.log(text, record);
                return <>
                    {record.roomType.includes("vip") ? (
                        <>
                            <Badge text="Phòng Vip" color="green"></Badge>
                        </>
                    ) : (
                        <>
                            <Badge text="Phòng Thường" color="red"></Badge>
                        </>
                    )}
                </>
            }
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (_, record) => {
                return (
                    <>
                        <DeleteRoom record={record} onReload={onReload} />
                    </>
                )

            }

        }
    ]
    return (
        <>

            <Table dataSource={room} columns={columns} rowKey="id" />;
        </>
    )
}
export default RoomTable;