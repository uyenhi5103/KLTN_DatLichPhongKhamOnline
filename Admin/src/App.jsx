import { Route, Routes } from "react-router-dom";
import QuanLyKhachHang from "./components/Admin/BenhNhan/QuanLyKhachHang";
import QuanLyChucVu from "./components/Admin/ChucVu/QuanLyChucVu";
import QuanLyChuyenKhoa from "./components/Admin/ChuyenKhoa/QuanLyChuyenKhoa";
import QuanLyDoctor from "./components/Admin/Doctor/QuanLyDoctor";
import KeHoachKhamBenh from "./components/Admin/KeHoachKhamBenh/KeHoachKhamBenh";
import QuanLyLichHen from "./components/Admin/LichHen/QuanLyLichHen";
import QuanLyPhongKham from "./components/Admin/PhongKham/QuanLyPhongKham";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import Register from "./pages/Admin/Register";
import BacSiNoiBat from "./pages/TrangChu/BacSiNoiBat/bacSiNoiBat";
import CauHoiReply from "./pages/TrangChu/CauHoi/CauHoiReply";
import ChuyenKhoa from "./pages/TrangChu/ChuyenKhoa/chuyenKhoa";
import ViewChuyenKhoaVaKhamBenh from "./pages/TrangChu/ChuyenKhoa/viewChuyenKhoaVaKhamBenh";
import PageDatLichKham from "./pages/TrangChu/DatLich/datLichKhamDoctor";
import Home from "./pages/TrangChu/Home";
import LichHen from "./pages/TrangChu/LichHen/lichHen";
import LoginPage from "./pages/TrangChu/Login/Login";
import RegisterPage from "./pages/TrangChu/Login/Register";
import PhongKham from "./pages/TrangChu/PhongKham/PhongKham";
import ViewPhongKhamVaKhamBenh from "./pages/TrangChu/PhongKham/viewPhongKhamVaKhamBenh";
import PageViewDoctor from "./pages/TrangChu/ViewDoctor/pageViewDoctor";

const App = () => {
  const routeConfig = [
    { path: "/", element: <Home /> }, // trang chu
    { path: "/view-doctor", element: <PageViewDoctor /> }, // xem chi tiet bac si
    { path: "/page-dat-lich-kham", element: <PageDatLichKham /> }, // page dat lich kham
    { path: "/user/login-benh-nhan", element: <LoginPage /> }, // login benh-nhan
    { path: "/user/register-benh-nhan", element: <RegisterPage /> }, // Register benh-nhan
    { path: "/user/lich-hen", element: <LichHen /> }, // lich hen kham benh
    { path: "/user/bac-si-noi-bat", element: <BacSiNoiBat /> }, // bac si noi bat
    { path: "/user/cau-hoi-dap", element: <CauHoiReply /> }, // bac si noi bat
    { path: "/user/chuyen-khoa-kham", element: <ChuyenKhoa /> },
    {
      path: "/user/view-chuyen-khoa-kham",
      element: <ViewChuyenKhoaVaKhamBenh />,
    },
    { path: "/user/phong-kham", element: <PhongKham /> }, // phong kham
    { path: "/user/view-phong-kham", element: <ViewPhongKhamVaKhamBenh /> },

    // { path: "/admin/login-admin", element: <LoginPage /> },
    { path: "/admin/home-page-admin", element: <HomeAdmin /> }, // home page admin
    // { path: "/admin/login-admin", element: <Login /> },   // Login admin
    { path: "/admin/register-admin", element: <Register /> }, // Register admin
    { path: "/admin/quan-ly-doctor", element: <QuanLyDoctor /> }, // quan ly doctor
    { path: "/admin/quan-ly-chuc-vu", element: <QuanLyChucVu /> }, // quan ly chuc vu
    { path: "/admin/quan-ly-phong-kham", element: <QuanLyPhongKham /> }, // quan ly phong kham
    { path: "/admin/quan-ly-chuyen-khoa", element: <QuanLyChuyenKhoa /> }, // quan ly chuyen khoa
    { path: "/admin/ke-hoach-doctor", element: <KeHoachKhamBenh /> }, // ke hoach kham benh
    { path: "/admin/quan-ly-lich-hen", element: <QuanLyLichHen /> }, // ke hoach kham benh
    { path: "/admin/quan-ly-kh", element: <QuanLyKhachHang /> }, // ke hoach kham benh
  ];
  return (
    <>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default App;
