import { Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

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
                            <Tooltip title="Còn phòng" placement="top" color="green" trigger="hover" mouseEnterDelay={2}><Tag color="green">Còn phòng</Tag></Tooltip>
                        </>
                    ) : (
                        <>
                            <Tooltip title="Hết phòng" placement="top" color="red" trigger="hover" mouseEnterDelay={2}><Tag color="green">Hêt phòng</Tag></Tooltip>
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
                            {/* <Badge text="Phòng Vip" color="green" /> */}
                            <Tag color="violet" >VIP</Tag>
                        </>
                    ) : (
                        <>
                            <Tag color="gray">Thường</Tag>
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
                        <EditRoom record={record} onReload={onReload} />
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