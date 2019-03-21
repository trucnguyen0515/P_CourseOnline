import DanhSachHocVien from './DanhSachHocVien'
var dshv = new DanhSachHocVien();

const ServiceHocVien = function () {

    this.LayDanhSachHocVien = function () {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung`;
        return $.ajax({
            type: "GET",
            url: urlAPI,
            async: false,
            xhrFields: {
                withCredentials: false
            },
        });
    }

    this.ThongTinNguoiDung = function (taikhoan) {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/ThongTinNguoiDung?taikhoan=${taikhoan}`;
        $.ajax({
            type: "GET",
            url: urlAPI,
            async: false,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                //load();
                var jsonHocVien = JSON.stringify(ketqua);
                localStorage.setItem('ThongTinNguoiDung', jsonHocVien);
            },
            error: function (error) {
            }

        });
    }

    this.TaiKhoan = function (taikhoan, matkhau) {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam?taikhoan=${taikhoan}&matkhau=${matkhau}`;
        $.ajax({
            type: "GET",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
            },
            error: function (error) {
            }

        });
    }

    this.ThemHocVien = function (hocvien) {
        showloader();
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung`;
        $.ajax({
            type: "POST",
            url: urlAPI,
            dataType: "json",
            async: false,
            data: hocvien,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Thêm học viên thành công!",
                        icon: "success",
                        button: "OK",
                    }).then((value) => {
                        window.location.reload();
                    });
                    return true;
                }, 500);
            },
            error: function (error) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Tài khoản đã được đăng ký!",
                        icon: "error",
                        button: "OK",
                    }).then((value) => {

                    });
                }, 500);

            }

        });
    }

    this.DangKy = function (hocvien) {
        showloader();

        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/DangKy`;
        $.ajax({
            type: "POST",
            url: urlAPI,
            dataType: "json",
            data: hocvien,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                if (ketqua) {
                    setTimeout(function () {
                        hideloader();
                        swal({
                            text: "Đăng ký thành công!",
                            icon: "success",
                            button: "OK",
                        }).then((value) => {
                            location.href = "/login"
                        });
                        return true;
                    }, 500);
                } else {
                    setTimeout(function () {
                        hideloader();
                        swal({
                            text: "Tài khoản đã được sử dụng",
                            icon: "error",
                            button: "OK",
                        }).then((value) => {

                        });
                        return false;
                    }, 500);
                }


            },
            error: function (ketqua) {

            }
        });
    }

    this.XoaHocVien = function (id) {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`;
        $.ajax({
            type: "DELETE",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                swal({
                    text: "Xóa học viên thành công!",
                    icon: "success",
                    button: "OK",
                }).then((value) => {
                    window.location.reload();
                });
                console.log(ketqua);
            },
            error: function (ketqua) {
                alertFail("Học viên đã ghi danh không thể xóa");
            }

        });
    }

    this.CapNhatHocVien = function (hocvien) {
        showloader();
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung`;
        $.ajax({
            type: "put",
            url: urlAPI,
            dataType: "json",
            data: hocvien,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Cập nhật thành công",
                        icon: "success",
                        button: "OK",
                    }).then((value) => {
                        var jsonPass = JSON.stringify(hocvien.MatKhau);
                        localStorage.setItem('Pass',jsonPass);
                        window.location.reload();
                    });
                   
                }, 500);
            },
            error: function (ketqua) {

            }
        });
    }


    this.DangNhap = function (taikhoan, pass) {
        showloader();

        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/DangNhap?taikhoan=${taikhoan}&matkhau=${pass}`;
        $.ajax({
            type: "GET",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function (ketqua) {

                setTimeout(function () {
                    hideloader();

                    var error = false;
                    if (ketqua == "failed to login") {
                        alertFail("Sai tài khoản hoặc mật khẩu!");
                        error = true;
                        return error;
                    }
                    else {
                        dshv.mangHocVien = ketqua;
                        swal({
                            text: "Đăng nhập thành công",
                            icon: "success",
                            button: "OK",
                        }).then((value) => {
                            if (dshv.mangHocVien[0].MaLoaiNguoiDung == "HV") {

                                location.href = "/course";
                            }
                            else {
                                location.href = "/admin";
                            }
                            var jsonUser = JSON.stringify(ketqua);
                            localStorage.setItem('ThongTinDangNhap', jsonUser);

                            var jsonPass = JSON.stringify(pass);
                            localStorage.setItem('Pass', jsonPass);
                            error = false;
                            return error;
                        });

                    }


                }, 500);



            },
        });
    }



}




// Alert 
const alertFail = function (text) {
    swal(text, {
        icon: "error",
    });
}

//Loader 
const showloader = function () {
    $(".preloader").css("display", "inline-block");
}
const hideloader = function () {
    $(".preloader").hide();
}

export {
    ServiceHocVien, alertFail, showloader, hideloader
}



