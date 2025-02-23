import CartItem from "../CartItem";
import "./LearnGrid.css"
import { Row, Col, Carousel, Image }
    from
    "antd"
    ;
import banner from "../../image/carousef.jpg";
function HocGrid() {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="box 1" />
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="box 2" /></Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="box 3" /></Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CartItem title="box 4" /></Col>
            </Row >
            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={16} xl={16} lg={16} md={12} sm={24} xs={24}>
                    <CartItem title="box 5" style={{ height: "400px" }} /></Col>
                <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                    <CartItem title="box 6" style={{ height: "400px" }} /></Col>
            </Row>
            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                    <CartItem title="box 7" style={{ height: "400px" }} /></Col>
                <Col xxl={16} xl={16} lg={16} md={12} sm={24} xs={24}>
                    <CartItem title="box 8" style={{ height: "400px" }} /></Col>
            </Row>
            <Row gutter={[20, 20]} className="mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title="box 9" style={{ height: "400px" }} /></Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title="box 10" style={{ height: "400px" }} /></Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CartItem title="box 11" style={{ height: "400px" }} /></Col>
            </Row>
            <Carousel>
                <div className="anh1">
                    <img src={banner} alt="banner" />

                </div>
                <div className="anh1">
                    <img src={banner} alt="banner" />

                </div>
                <div className="anh1">
                    <img src={banner} alt="banner" />

                </div>
                <div className="anh1">
                    <img src={banner} alt="banner" />

                </div>
            </Carousel>
            <Image src={banner} width={200} />

        </>
    )
}
export default HocGrid;