import {ServiceHocVien} from './ServiceHocVien';
import HocVien from '../Models/HocVien';

var serviceHocVien = new ServiceHocVien();

$.validator.methods.email2 = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}
jQuery.validator.addMethod("username2", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Không được có kí tự đặc biệt!');

jQuery.validator.addMethod("fullname2", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#formUpdateUserAd").validate({
    rules: {
        username2: {
            required: true,
        },
        password2: {
            required: true,
            minlength: 8
        },
        fullname2: {
            required: true,
        },
        email2: {
            required: true,
            email: true,
        },
        phone2:{
            minlength: 10,
            maxlength: 11
        }
    },
    messages: {
        username2: {
            required: "Vui lòng nhập tài khoản!",
            minlength: "Chỉ được nhập 5 - 10 kí tự!",
        },
        password2: {
            required: "Vui lòng nhập mật khẩu!",
            minlength: "Tối thiểu 8 kí tự",
        },
     
        fullname2: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email2: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        phone2: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (form) {
        CapNhatThongTinHocVien()
    }
});


// Update HocVien
function CapNhatThongTinHocVien()
{   
    var jsonPass = localStorage.getItem("Pass");
    var list = JSON.parse(jsonPass);
    let Pass = list;

    var user =  $("#username2").val();
    var mk = $("#password2").val();
    var fullname = $("#fullname2").val();
    var email = $("#email2").val();
    var phone = $("#phone2").val();
    var maLoai = $(".selectLoai").val();
    var tenLoai = $(".tenLoai").val();

    var hocvien = new HocVien(user,mk,fullname,email,phone,maLoai,tenLoai);
    serviceHocVien.CapNhatHocVien(hocvien);
}