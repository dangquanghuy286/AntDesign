import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { deleteRoom } from "../../services/serviceRoom";

function DeleteRoom(props) {
    const { record, onReload } = props;
    const hanleConfirm = async () => {
        const res = await deleteRoom(record.id);
        if (res) {
            onReload();
            alert("XÓA THÀNH CÔNG")
        } else {
            alert("XÓA KHÔNG THÀNH CÔNG")
        }


    }
    return (
        <>
            <Popconfirm title="Bạn có muốn xóa" onConfirm={hanleConfirm}>
                <Button danger size="small" icon={<DeleteOutlined />} />
            </Popconfirm>

        </>
    )

}
export default DeleteRoom;