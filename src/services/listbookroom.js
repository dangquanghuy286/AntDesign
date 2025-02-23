import { post } from "../utils/request";
export const newRoom = async (data) => {
    const ketqua = await post("book-room", data)
    return ketqua;

}