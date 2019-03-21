import DanhSachHocVien from './DanhSachHocVien';
import {ServiceHocVien} from './ServiceHocVien';
import HocVien from '../Models/HocVien';

var dshv = new DanhSachHocVien();
var serviceHocVien = new ServiceHocVien();
var pass = [];

//load CSDL
serviceHocVien.LayDanhSachHocVien().done(function(ketqua){
    dshv.mangHocVien = ketqua;
    loadHocVien(dshv);
})





//Xoa HocVien
function xoaHocVien()
{
    var mangXoa = [];
    var checkHV = document.getElementsByClassName("checkHocVien");
    for(let i = 0; i < checkHV.length; i++)
    {
        if(checkHV[i].checked)
        {
            var value = checkHV[i].value;
            mangXoa.push(value);
            serviceHocVien.XoaHocVien(checkHV[i].value);
        }
    }
    dshv.XoaHocVien(mangXoa);
}


// Lay gia tri HocVien de Upadate
function layThongTinHocVien(name) {
    var list = dshv.layThongTinHocVien(name);
    if (list != null) {
        $("#username2").val(list.TaiKhoan);
        $("#password2").val(list.MatKhau);
        $("#fullname2").val(list.HoTen);
        $("#email2").val(list.Email);
        $("#phone2").val(list.SoDT);
        $(".selectLoai").val(list.MaLoaiNguoiDung);
        $(".tenLoai").val(list.TenLoaiNguoiDung);
    }
}


//Search Hocvien
function TimKiemHocVien()
{
    var name = $("#searchUser .search").val();
    var list = dshv.TimKiemHocVien(name);
    loadHocVien(list);
}



// Load TABLE HocVien sau khi thay doi du lieu
function loadHocVien(dshv) {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < dshv.mangHocVien.length; i++) {

        let hocvien = dshv.mangHocVien[i];

        var tr = document.createElement('tr');

        var tdCheck = document.createElement('td');

        var check = document.createElement('input');
        check.value = hocvien.TaiKhoan;
        check.className = "checkHocVien";
        check.setAttribute('type', 'checkbox')

        tdCheck.appendChild(check);
        tr.appendChild(tdCheck);

        var tdTaiKhoan = document.createElement('td');
        tdTaiKhoan.innerHTML = hocvien.TaiKhoan;
        // tdTaiKhoan.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdTaiKhoan.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })

        tdTaiKhoan.setAttribute('data-toggle', 'modal');
        tdTaiKhoan.setAttribute('data-target', '#updateUser');

        var tdHoTen = document.createElement('td');
        tdHoTen.innerHTML = hocvien.HoTen;
        // tdHoTen.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdHoTen.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })
        tdHoTen.setAttribute('data-toggle', 'modal');
        tdHoTen.setAttribute('data-target', '#updateUser');

        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = hocvien.Email;
        // tdEmail.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdEmail.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })
        tdEmail.setAttribute('data-toggle', 'modal');
        tdEmail.setAttribute('data-target', '#updateUser');

        var tdPhone = document.createElement('td');
        tdPhone.innerHTML = hocvien.SoDT;
        // tdPhone.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdPhone.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })
        tdPhone.setAttribute('data-toggle', 'modal');
        tdPhone.setAttribute('data-target', '#updateUser');

        var tdLoai = document.createElement('td');
        tdLoai.innerHTML = hocvien.MaLoaiNguoiDung;
        // tdLoai.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdLoai.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })
        tdLoai.setAttribute('data-toggle', 'modal');
        tdLoai.setAttribute('data-target', '#updateUser');

        var tdTenLoai = document.createElement('td');
        tdTenLoai.innerHTML = hocvien.TenLoaiNguoiDung;
        // tdTenLoai.setAttribute('onclick', 'layThongTinHocVien("' + hocvien.TaiKhoan + '")');
        tdTenLoai.addEventListener('click', function(){
            console.log(hocvien.TaiKhoan);
            layThongTinHocVien(hocvien.TaiKhoan);
        })
        tdTenLoai.setAttribute('data-toggle', 'modal');
        tdTenLoai.setAttribute('data-target', '#updateUser');

        tr.appendChild(tdTaiKhoan);
        tr.appendChild(tdHoTen);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);
        tr.appendChild(tdLoai);
        tr.appendChild(tdTenLoai);

        tbody.appendChild(tr);
    }
}






// $("#insert").click(function(){
//     themHocVien();
// });

// $("#update2").click(function(){
//     CapNhatThongTinHocVien();
// });



$("#delete").click(function(){
    var check = $(".checkHocVien");
    if(check.is(":checked"))
    {
        alertDelete();
    }
});


$("#searchUser .search").keyup(function(){
    TimKiemHocVien();
});


$(".tenLoai1").val("Học viên");
$(".selectLoai1").change(function(){
    var select = $(".selectLoai1");
    if(select.val() == "GV")
    {
      
        $(".tenLoai1").val("Giáo vụ");
    }
    else
    {
        $(".tenLoai1").val("Học viên");
    }
});

$(".selectLoai").change(function(){
    var select = $(".selectLoai");
    if(select.val() == "GV")
    {
      
        $(".tenLoai").val("Giáo vụ");
    }
    else
    {
        $(".tenLoai").val("Học viên");
    }
});

function alertDelete() {
    swal({
        title: "Bạn chắc chắn muốn xóa?",
        text: "Khi đã xóa không thể khôi phục!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                xoaHocVien();
            }
        });
}

// Check all checkbox
$("#checkAllHV").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});