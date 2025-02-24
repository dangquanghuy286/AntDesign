import { useEffect, useState } from "react"
import { getListRoom } from "../../services/serviceRoom";
import { Button } from "antd";
import { UnorderedListOutlined, WindowsOutlined } from "@ant-design/icons";
import RoomGrid from "./RoomGrid";
import RoomTable from "./RoomTable";

function ListRoom() {
    const [room, setRoom] = useState([]);
    const [isGrid, setIsGrid] = useState(true);
    const fetchApi = async () => {
        const res = await getListRoom();
        setRoom(res)
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const handleReload = () => {
        fetchApi();
    }

    return (
        <>
            <Button onClick={() => setIsGrid(true)}><WindowsOutlined /></Button>
            <Button onClick={() => setIsGrid(false)}><UnorderedListOutlined /></Button>
            {isGrid ? (
                <>
                    <RoomGrid room={room} />
                </>) : (
                <>
                    <><RoomTable room={room} onReload={handleReload} /></>
                </>
            )
            }

        </>
    )
}
export default ListRoom;