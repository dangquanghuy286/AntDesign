import { useEffect, useState } from "react"
import { getListRoom } from "../../services/serviceRoom";

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
            List room
        </>
    )
}
export default ListRoom;