import { Carousel, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HinhChuNhat from "../../../components/TrangChu/HinhChuNhat/HinhChuNhat";
import HinhTron from "../../../components/TrangChu/HinhTron/HinhTron";
import HinhTronSlider from "../../../components/TrangChu/HinhVuong/HinhTronSlider";
import HinhVuong from "../../../components/TrangChu/HinhVuong/Slider";
import {
  fetchAllChuyenKhoaBodyPage,
  fetchAllDoctor,
  fetchAllPhongKham,
} from "../../../services/apiDoctor";
import "./bodyHomePage.scss";

const BodyHomePage = () => {
  const [dataDoctor, setDataDoctor] = useState(null);
  const [dataPhongKham, setDataPhongKham] = useState(null);
  const [dataChuyenKhoa, setDataChuyenKhoa] = useState(null);
  const [loadingCard, setLoadingCard] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await listChuyenKhoa();
      await listDoctor();
      await listPhongKham();
    };

    fetchData();
  }, []);

  const listDoctor = async () => {
    const res = await fetchAllDoctor();
    if (res && res.data) {
      setDataDoctor(res.data);
    }
  };

  const listPhongKham = async () => {
    const res = await fetchAllPhongKham();
    if (res && res.data) {
      setDataPhongKham(res.data);
    }
  };

  const listChuyenKhoa = async () => {
    setLoadingCard(true);
    const res = await fetchAllChuyenKhoaBodyPage();
    if (res && res.data) {
      setDataChuyenKhoa(res.data);
    }
    setLoadingCard(false);
  };

  // Mảng chứa các giá trị src và txtP
  const items = [
    {
      key: "0",
      src: "./assets/images/danh_cho_ban/bs.png",
      txtP: "Bác sĩ",
      navigate: "/user/bac-si-noi-bat",
    },
    {
      key: "1",
      src: "./assets/images/danh_cho_ban/chuyen_khoa.png",
      txtP: "Chuyên khoa",
      navigate: "/user/chuyen-khoa-kham",
    },
    {
      key: "3",
      src: "./assets/images/danh_cho_ban/hoi_dap.jpg",
      txtP: "Hỏi đáp",
      navigate: "/user/cau-hoi-dap",
    },
    {
      key: "4",
      src: "./assets/images/danh_cho_ban/co_so_y_te.png",
      txtP: "Cơ sở y tế",
      navigate: "/user/phong-kham",
    },
    // Thêm các đối tượng khác nếu cần
  ];

  const items_goi_y = [
    {
      key: "0",
      src: "./assets/images/danh_cho_ban/bs.png",
      txtP: "Bác sĩ",
      navigate: "/user/bac-si-noi-bat",
    },
    {
      key: "1",
      src: "./assets/images/danh_cho_ban/chuyen_khoa.png",
      txtP: "Chuyên khoa",
      navigate: "/user/chuyen-khoa-kham",
    },
    {
      key: "3",
      src: "./assets/images/danh_cho_ban/hoi_dap.jpg",
      txtP: "Hỏi đáp",
      navigate: "/user/cau-hoi-dap",
    },
    {
      key: "4",
      src: "./assets/images/danh_cho_ban/co_so_y_te.png",
      txtP: "Cơ sở y tế",
      navigate: "/user/phong-kham",
    },
    // Thêm các đối tượng khác nếu cần
  ];

  const items_toandien = [
    {
      src: "./assets/images/dich_vu_toan_dien/kham_chuyen_khoa.png",
      txtP: "Khám chuyên khoa",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/kham_tu_xa.png",
      txtP: "Khám từ xa",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/kham_theo_thong_tu.png",
      txtP: "Khám tổng quát",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/dat_lich_xet_nghiem.png",
      txtP: "Xét nghiệm y học",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/dat_lich_tiem.png",
      txtP: "Đặt lịch tiêm",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/goi_kham_suc_khoe.png",
      txtP: "Gói khám sức khỏe",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/dat_kham_theo_bac_si.png",
      txtP: "Đặt khám theo bác sĩ",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/dat_kham_ngoai_gio.png",
      txtP: "Đặt khám ngoài giờ",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/thanh_toan.png",
      txtP: "Thanh toán viện phí",
    },
    {
      src: "./assets/images/dich_vu_toan_dien/y_te_tai_nha.png",
      txtP: "Y tế tại nhà",
    },
  ];

  const items_ChuyenKhoa = dataChuyenKhoa
    ? dataChuyenKhoa.map((chuyenKhoa) => ({
      id: chuyenKhoa._id, // Thêm _id vào đây
      src: `${import.meta.env.VITE_BACKEND_URL}/uploads/${chuyenKhoa?.image}`,
      txtP: `${chuyenKhoa?.name}`,
      txtAddress: ``,
    }))
    : [];
  const items_PhongKham = dataPhongKham
    ? dataPhongKham.map((phongKham) => ({
      src: `${import.meta.env.VITE_BACKEND_URL}/uploads/${phongKham?.image}`,
      txtP: `${phongKham?.name}`,
      txtAddress: `${phongKham?.address}`,
    }))
    : [];

  const items_BacSiNoiBat = dataDoctor
    ? dataDoctor.map((doctor) => ({
      id: doctor._id, // Thêm _id vào đây
      src: `${import.meta.env.VITE_BACKEND_URL}/uploads/${doctor?.image}`,
      txtP: `${doctor?.chucVuId.map((chucVu) => chucVu?.name).join(", ")}
                , ${doctor?.lastName} ${doctor?.firstName}`,
      txtB: `${doctor?.chuyenKhoaId
        .map((chuyenKhoa) => chuyenKhoa.name)
        .join(", ")}`,
    }))
    : [];

  const handleRedirectDoctor = (item) => {
    navigate(`/view-doctor?id=${item}`);
  };

  const handleRedirectChuyenKhoa = (item) => {
    navigate(`/user/view-chuyen-khoa-kham?idChuyenKhoa=${item}`);
  };

  return (
    <>
      <Row className="body-top">
        <div style={{ position: "relative", width: "70%", margin: "2px auto" }}>
          <Carousel
            // className="custom-carousel"
            autoplay
            draggable={true}
            arrows={true}
          >
            <div>
              <img
                width={"100%"}
                height={400}
                style={{ borderRadius: "20px" }}
                src="./assets/images/1.png"
                alt=""
              />
            </div>
            <div>
              <img
                width={"100%"}
                height={400}
                style={{ borderRadius: "20px" }}
                src="./assets/images/2.png"
                alt=""
              />
            </div>
            <div>
              <img
                width={"100%"}
                height={400}
                style={{ borderRadius: "20px" }}
                src="./assets/images/3.png"
                alt=""
              />
            </div>
            <div>
              <img
                width={"100%"}
                height={400}
                style={{ borderRadius: "20px" }}
                src="./assets/images/4.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </Row>

      <div className="danh-cho-ban">
        <Row className="ben-trong">
          <span
            style={{
              fontWeight: "500",
              fontSize: "4vh",
              width: "100%",
              padding: "4vh 0",
            }}
          >
            Dành cho bạn
          </span>
          {items.map((item, index) => (
            <Col key={index} md={6} sm={10} xs={24} className="cot-ben-trong">
              <HinhTron
                src={item.src}
                txtP={item.txtP}
                redirectChuyenKhoa={item.navigate}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className="danh-cho-ban">
        <Row className="ben-trong">
          <span
            style={{
              fontWeight: "500",
              fontSize: "4vh",
              width: "100%",
              padding: "4vh 0",
            }}
          >
            Dịch vụ toàn diện
          </span>
          {items_toandien.map((item, index) => (
            <Col
              key={index}
              md={12}
              sm={24}
              xs={24}
              style={{ marginBottom: "5vh" }}
            >
              <HinhChuNhat src={item.src} txtP={item.txtP} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="danh-cho-ban">
        <Row className="ben-trong">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize: "4vh", padding: "4vh 0" }}
            >
              Đặt lịch khám theo chuyên khoa
            </span>
            <span
              style={{
                fontWeight: "500",
                fontSize: "3vh",
                backgroundColor: "blue",
                height: "50px",
                lineHeight: "45px",
                borderRadius: "15px",
                textAlign: "center",
                backgroundColor: "#d0edf7",
                color: "rgb(45 145 179)",
                marginTop: "30px",
                cursor: "pointer",
                padding: "3px 10px",
              }}
              onClick={() => navigate("/user/chuyen-khoa-kham")}
            >
              Xem thêm
            </span>
          </div>
          <HinhVuong
            items={items_ChuyenKhoa}
            width={200}
            height={200}
            loadingCard={loadingCard}
            urlDoctor={handleRedirectChuyenKhoa}
          />
        </Row>
      </div>

      <div className="danh-cho-ban" style={{ margin: "30px 0" }}>
        <Row className="ben-trong">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize: "4vh", padding: "4vh 0" }}
            >
              Cơ sở y tế
            </span>
            <span
              style={{
                fontWeight: "500",
                fontSize: "3vh",
                backgroundColor: "blue",
                height: "50px",
                lineHeight: "45px",
                borderRadius: "15px",
                textAlign: "center",
                backgroundColor: "#d0edf7",
                color: "rgb(45 145 179)",
                marginTop: "30px",
                padding: "3px 10px",
              }}
              onClick={() => navigate("/user/phong-kham")}
            >
              Xem thêm
            </span>
          </div>
          <HinhVuong
            items={items_PhongKham}
            width={300}
            height={200}
            loadingCard={loadingCard}
          />
        </Row>
      </div>

      <Row
        className="ben-trong"
        style={{
          backgroundImage:
            "url('https://cdn.bookingcare.vn/fo/2023/11/01/140311-background5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{ fontWeight: "500", fontSize: "4vh", padding: "4vh 22vh" }}
          >
            Bác sĩ nổi bật
          </span>
          <span
            style={{
              fontWeight: "500",
              fontSize: "3vh",
              backgroundColor: "blue",
              height: "50px",
              lineHeight: "45px",
              borderRadius: "15px",
              textAlign: "center",
              backgroundColor: "#d0edf7",
              color: "rgb(45 145 179)",
              margin: "3vh 22vh",
              cursor: "pointer",
              padding: "3px 10px",
            }}
            onClick={() => navigate("/user/bac-si-noi-bat")}
          >
            Xem thêm
          </span>
        </div>
        <div
          style={{
            backgroundColor: "transparent",
            width: "77%",
            height: "100%",
            position: "relative",
            left: "24vh",
          }}
        >
          <HinhTronSlider
            items={items_BacSiNoiBat}
            urlDoctor={handleRedirectDoctor}
          />
        </div>
      </Row>

      <div className="danh-cho-ban" style={{ margin: "30px 0" }}>
        <Row className="ben-trong">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{ fontWeight: "500", fontSize: "4vh", padding: "4vh 0" }}
            >
              Khám từ xa
            </span>
            <span
              style={{
                fontWeight: "500",
                fontSize: "3vh",
                backgroundColor: "blue",
                height: "50px",
                lineHeight: "45px",
                borderRadius: "15px",
                textAlign: "center",
                backgroundColor: "#d0edf7",
                color: "rgb(45 145 179)",
                marginTop: "30px",
                padding: "3px 10px",
              }}
            >
              Xem thêm
            </span>
          </div>
          <HinhVuong
            items={items_PhongKham}
            width={300}
            height={200}
            loadingCard={loadingCard}
          />
        </Row>
      </div>

      <div className="danh-cho-ban">
        <Row className="ben-trong">
          <span
            style={{
              fontWeight: "500",
              fontSize: "4vh",
              width: "100%",
              padding: "4vh 0",
            }}
          >
            Gợi ý của Lifeline Medical
          </span>
          {items_goi_y.map((item, index) => (
            <Col key={index} md={6} sm={10} xs={24} className="cot-ben-trong">
              <HinhTron src={item.src} txtP={item.txtP} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default BodyHomePage;
