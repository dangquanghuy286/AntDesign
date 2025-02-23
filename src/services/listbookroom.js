import { post } from "../utils/request";
export const createRoom = async (data) => {
    const ketqua = await post("book-room", data)
    return ketqua;

}