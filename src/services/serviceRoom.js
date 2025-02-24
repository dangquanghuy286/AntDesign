import { del, get, post } from "../utils/request"
export const createRoom = async (dataRoom) => {
    const res = await post("room", dataRoom);
    return res
}
export const getListRoom = async () => {
    const res = await get("room");
    return res;
}
export const deleteRoom = async (id) => {
    const res = await del(`room/${id}`)
    return res
}