import { get, post } from "../utils/request"
export const createRoom = async (dataRoom) => {
    const res = await post("room", dataRoom);
    return res
}
export const getListRoom = async () => {
    const res = await get("room");
    return res;
}