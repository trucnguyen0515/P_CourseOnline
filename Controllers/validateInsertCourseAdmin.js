import DanhSachKhoaHoc from './DanhSachkhoaHoc';
import {ServiceKhoaHoc} from './ServiceKhoaHoc';
import KhoaHoc from '../Models/KhoaHoc';

let dskh = new DanhSachKhoaHoc();
let service = new ServiceKhoaHoc();

let nguoiDangNhap = []
checkLogin();

$("#formInsertCourse").validate({
    rules: {
        idCourse: {
            required: true,
        },
        nameCourse: {
            required: true,
            maxlength: 30
        },
        desCourse: {
            required: true,
            maxlength: 400
        },
    },
    messages: {
        idCourse: {
            required: "Vui lòng nhập mã khóa học!",
        },
        nameCourse: {
            required: "Vui lòng nhập tên khóa học!",
            maxlength: "Tối đa 30 kí tự",
        },
     
        desCourse: {
            required: "Vui lòng nhập mô tả khóa học",
            minlength: "Tối đa 400 kí tự",
        },
    },
    submitHandler: function (form) {
        ThemKhoaHoc()
    }
});

//Tao KhoaHoc
function ThemKhoaHoc() {
    var id = $("#idCourse").val();
    var name = $("#nameCourse").val();
    var des = $("#desCourse").val();
    var hinhanh = $("#imgCourse").val();
    var view = 0;
    var creater = nguoiDangNhap[0].TaiKhoan;
   
    var khoahoc = new KhoaHoc(id,name,des,hinhanh,view,creater);
    dskh.ThemKhoaHoc(khoahoc);
    service.ThemKhoaHoc(khoahoc);
}

// check Login lay thong tin
function checkLogin()
{
    var json = localStorage.getItem('ThongTinDangNhap');
    var list = JSON.parse(json);
    if(list != null)
    {
        nguoiDangNhap = list;
        if(nguoiDangNhap[0].MaLoaiNguoiDung == "HV")
        {
            location.href = "/course"
        }
       
        $("#nameAdmin").html(nguoiDangNhap[0].TaiKhoan);
    }
}