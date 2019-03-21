import {ServiceHocVien} from './ServiceHocVien'
var service = new ServiceHocVien();

// Login user
function loginUser() 
{
    var taikhoan = $("#taikhoan").val();;
    var pass = $("#password").val();
    return service.DangNhap(taikhoan,pass);
}



$("#loginform").validate({
    rule: {
        taikhoan: {
            required: true,
        },
        password:{
            required: true,
        },
    },
    messages: {
        taikhoan: {
            required: "Vui lòng nhập tài khoản!",
        },
        password:{
            required: "Vui lòng nhập mật khẩu!",
        },
    },

    submitHandler: function(form) {
        loginUser()
    }
});