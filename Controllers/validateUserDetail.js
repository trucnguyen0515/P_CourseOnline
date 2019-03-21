
import HocVien from '../Models/HocVien'
import DanhSachHocVien from './DanhSachHocVien';
var dshv = new DanhSachHocVien();
import {ServiceHocVien} from './ServiceHocVien';
var serviceHocVien = new ServiceHocVien();

let pass;
let idUser;

$.validator.methods.email = function (value, element) {
    return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

jQuery.validator.addMethod("hoten", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(value);
}, "Không đúng định dạng!");



$("#userform").validate({
    rules: {
        hoten: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
    },
    messages: {
        hoten: {
            required: "Vui lòng nhập họ tên",
            minlength: "Tối thiểu 4 kí tự",
        },
        email: {
            required: "Vui lòng nhập Email!",
            email: "Không đúng định vd: example@abc.com",
        },
        sdt: {
            minlength: "Chỉ được nhập 10 - 11 số",
            maxlength: "Chỉ được nhập 10 - 11 số"
        }
    },
    submitHandler: function (form) {
        UpdateThongTin();
    }
});


$("#changePassForm").validate({
    rules: {
        oldPass: {
            required: true,
        },
        newPass: {
            required: true,
            minlength: 8,
        },
        reNewPass: {
            required: true,
            minlength: 8,
            equalTo: "#newPass",
        },
    },
    messages: {
        oldPass: {
            required: "Vui lòng nhập mật khẩu cũ!",
        },
        newPass: {
            required: "Vui lòng nhập mật khẩu mới!",
            minlength: "Tối thiểu 8 kí tự",
        },
        reNewPass: {
            required: "Vui lòng nhập lại mật khẩu mới",
            minlength: "Tối thiểu 8 kí tự",
            equalTo: "Nhập lại mật khẩu không chính xác!",
        },
      
    },
    submitHandler: function (form) {
        if(checkpassold() != true)
        {
            UpdatePass()
        }
    }
});



function checkpassold()
{
    getStoragePass();
    var error = false;
    var passcu = $("#oldPass").val();
    var inputcu = $("#oldPass");
    if(passcu != pass)
    {
        var theDiv = $("#checkOldPass");
        var theSpan = `
            <label id="errorOldPass">Mật khẩu cũ không chính xác!</label>
        `;
        theDiv.html(theSpan);
        inputcu.addClass("error");
        error = true;
        return error;
    }
    else
    {
        inputcu.removeClass("error");
        error = false;
        return error;
    }
}

function UpdateThongTin()
{  
    getStoragePass();
    var user = idUser[0].TaiKhoan;
    var name = $("#hoten").val();
    var email = $("#email").val();
    var sdt = $("#sdt").val();
    var maLoai = idUser[0].MaLoaiNguoiDung;
    var tenLoai = idUser[0].TenLoaiNguoiDung;

    var hocvien = new HocVien(user,pass,name,email,sdt,maLoai,tenLoai);
    
    //dshv.CapNhatThongTinHocVien(hocvien);
    serviceHocVien.CapNhatHocVien(hocvien);
}

function DoiMatKhau()
{
    var user = dshv.mangHocVien[0].TaiKhoan;
    var pass = $("#newPass").val();
    var name = $("#hoten").val();
    var email = $("#email").val();
    var sdt = $("#sdt").val();
    var maLoai = dshv.mangHocVien[0].MaLoaiNguoiDung;
    var tenLoai = dshv.mangHocVien[0].TenLoaiNguoiDung;

    var hocvien = new HocVien(user,pass,name,email,sdt,maLoai,tenLoai);
    
    serviceHocVien.CapNhatHocVien(hocvien);
}



function UpdatePass()
{  
    getStoragePass();
    var user = idUser[0].TaiKhoan;
    var mk = $("#newPass").val();
    var name = $("#hoten").val();
    var email = $("#email").val();
    var sdt = $("#sdt").val();
    var maLoai = idUser[0].MaLoaiNguoiDung;
    var tenLoai = idUser[0].TenLoaiNguoiDung;

    var hocvien = new HocVien(user,mk,name,email,sdt,maLoai,tenLoai);
    
    

    dshv.CapNhatThongTinHocVien(hocvien);
    serviceHocVien.CapNhatHocVien(hocvien);
    
}


function getStoragePass()
{
    var jsonPass = localStorage.getItem("Pass");
    var list = JSON.parse(jsonPass);
    pass = list;

    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    idUser = JSON.parse(jsonUser);  
}
