import { AppleFilled } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "antd";

function HocButton() { // Viết hoa chữ cái đầu
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            const ketqua = {
                code: 200,
                ten: "huy"
            };
            if (ketqua && ketqua.code === 200) {
                setLoading(false);
            }
        }, 3000);
    };

    return (
        <>
            <Button type="primary" loading={loading} onClick={handleSubmit}>
                <AppleFilled rotate={45} spin={true} /> Nội dung
            </Button>
        </>
    );
}

export default HocButton; // Đổi tên cho đúng chuẩn React
