import HocVien from '../Models/HocVien'
import DanhSachHocVien from './DanhSachHocVien';
import {ServiceHocVien} from './ServiceHocVien';

let dshv = new DanhSachHocVien();
let serviceHocVien = new ServiceHocVien();


$.validator.methods.email = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}
jQuery.validator.addMethod("username", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Không được có kí tự đặc biệt!');

jQuery.validator.addMethod("fullname", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#AdRegisterForm").validate({
    rules: {
        username: {
            required: true,
        },
        password: {
            required: true,
            minlength: 8
        },
        fullname: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        username: {
            required: "Vui lòng nhập tài khoản!",
            minlength: "Chỉ được nhập 5 - 10 kí tự!",
        },
        password: {
            required: "Vui lòng nhập mật khẩu!",
            minlength: "Tối thiểu 8 kí tự",
        },
     
        fullname: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        phone: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (form) {
        themHocVien();
    }
});


//Tao HocVien
function themHocVien() {
    
    var user = $("#username").val();
    var pass = $("#password").val();
    var fullname = $("#fullname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var maLoai =  $(".selectLoai1").val();
    var tenLoai =  $(".tenLoai1").val();

    var hocvien = new HocVien(user,pass,fullname,email,phone,maLoai,tenLoai);
    dshv.ThemHocVien(hocvien);
    serviceHocVien.ThemHocVien(hocvien);
}