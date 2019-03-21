import HocVien from '../Models/HocVien'
import DanhSachHocVien from './DanhSachHocVien';
var dshv = new DanhSachHocVien();
import {ServiceHocVien} from './ServiceHocVien';
var service = new ServiceHocVien();




$.validator.methods.email = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}
jQuery.validator.addMethod("taikhoan", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Không được có kí tự đặc biệt!');

jQuery.validator.addMethod("hoten", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#registerform").validate({
    rules: {
        taikhoan: {
            required: true,
        },
        matkhau: {
            required: true,
            minlength: 5
        },
        rematkhau: {
            required: true,
            minlength: 5,
            equalTo: "#matkhau"
        },
        hoten: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        taikhoan: {
            required: "Vui lòng nhập tài khoản!",
            minlength: "Chỉ được nhập 5 - 10 kí tự!",
        },
        matkhau: {
            required: "Vui lòng nhập mật khẩu!",
            minlength: "Tối thiểu 8 kí tự",
        },
        rematkhau: {
            required: "Vui lòng nhập mật khẩu",
            minlength: "Tối thiểu 8 kí tự",
            equalTo: "Nhập lại mật khẩu không chính xác!",
        },
        hoten: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        sodt: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (form) {
       DangKy()
    }
});


function DangKy()
{
    var user = $("#taikhoan").val();
    var pass = $("#matkhau").val();
    var fullname = $("#hoten").val();
    var email = $("#email").val();
    var phone = $("#sodt").val();
    var maLoai = "HV";
    var tenLoai = "Học viên"

    var hocvien = new HocVien(user,pass,fullname,email,phone,maLoai,tenLoai);
    dshv.ThemHocVien(hocvien);
    return service.DangKy(hocvien);
}