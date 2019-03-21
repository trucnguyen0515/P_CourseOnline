import DanhSachKhoaHoc from './DanhSachkhoaHoc';
import {ServiceKhoaHoc} from './ServiceKhoaHoc';
import HocVien from '../Models/HocVien';
import DanhSachHinhAnh from './DanhSachHinhAnh';
import KhoaHoc from '../Models/KhoaHoc';
import HinhAnh1 from '../Models/HinhAnh';


var dskh = new DanhSachKhoaHoc();
var dsha = new DanhSachHinhAnh();
var service = new ServiceKhoaHoc();
var nguoiDangNhap = [];


checkLogin();
service.LayDanhSachKhoaHoc();
getStorage();
editSize();



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




// Lay gia tri KhoaHoc de Upadate
function layThongTinKhoaHoc(id) {
    var list = dskh.layThongTinKhoaHoc(id);
    if (list != null) {
        $("#idCourse2").val(list.MaKhoaHoc);
        $("#nameCourse2").val(list.TenKhoaHoc);
        $("#desCourse2").val(list.MoTa);
        $("#imgCourse2").val(list.HinhAnh);
        $("#viewCourse2").val(list.LuotXem);
        $("#createrCourse2").val(list.NguoiTao);
    }
}

//Xoa KhoaHoc
function xoaKhoaHoc()
{
    var mangXoa = [];
    var checkKH = document.getElementsByClassName("checkKhoaHoc");
    for(let i = 0; i < checkKH.length; i++)
    {
        if(checkKH[i].checked)
        {
            var value = checkKH[i].value;
            mangXoa.push(value);
            service.XoaKhoaHoc(checkKH[i].value);
        }
    }
    dskh.XoaKhoaHoc(mangXoa);
}

//Search Khoahoc
function TimKiemKhoaHoc()
{
    var name = $("#searchCourse .search").val();
    var list = dskh.TimKiemKhoaHoc(name);
    LoadKhoaHoc(list);
}

// Load table Khoa Hoc
function LoadKhoaHoc(dskh)
{
    var tbody = document.getElementById('tbody2');
    tbody.innerHTML = '';

    for (let i = 0; i < dskh.mangKhoaHoc.length; i++) {

        let KhoaHoc = dskh.mangKhoaHoc[i];

        var tr = document.createElement('tr');

        var tdCheck = document.createElement('td');

        var check = document.createElement('input');
        check.value = KhoaHoc.MaKhoaHoc;
        check.className = "checkKhoaHoc";
        check.setAttribute('type', 'checkbox')

        tdCheck.appendChild(check);
        tr.appendChild(tdCheck);

        var tdMaKhoaHoc = document.createElement('td');
        tdMaKhoaHoc.innerHTML = KhoaHoc.MaKhoaHoc;
        // tdMaKhoaHoc.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdMaKhoaHoc.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdMaKhoaHoc.setAttribute('data-toggle', 'modal');
        tdMaKhoaHoc.setAttribute('data-target', '#updateCourse');

        var tdTenKhoaHoc = document.createElement('td');
        tdTenKhoaHoc.innerHTML = KhoaHoc.TenKhoaHoc;
        // tdTenKhoaHoc.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdTenKhoaHoc.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdTenKhoaHoc.setAttribute('data-toggle', 'modal');
        tdTenKhoaHoc.setAttribute('data-target', '#updateCourse');

        var tdMoTa = document.createElement('td');
        tdMoTa.innerHTML = KhoaHoc.MoTa;
     
       
        // tdMoTa.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdMoTa.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdMoTa.setAttribute('data-toggle', 'modal');
        tdMoTa.setAttribute('data-target', '#updateCourse');

        var tdLuotXem = document.createElement('td');
        tdLuotXem.innerHTML = KhoaHoc.LuotXem;
        // tdLuotXem.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdLuotXem.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdLuotXem.setAttribute('data-toggle', 'modal');
        tdLuotXem.setAttribute('data-target', '#updateCourse');

        var tdNguoiTao = document.createElement('td');
        tdNguoiTao.innerHTML = KhoaHoc.NguoiTao;
        // tdNguoiTao.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdNguoiTao.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdNguoiTao.setAttribute('data-toggle', 'modal');
        tdNguoiTao.setAttribute('data-target', '#updateCourse');

        var tdHinhAnh = document.createElement('td');
        var theImg = document.createElement('img');
        theImg.className = "img-fluid imgCourse";
        theImg.setAttribute('src',dsha.mangHinhAnh[i].src);
        
        tdHinhAnh.appendChild(theImg);
        // tdHinhAnh.setAttribute('onclick', 'layThongTinKhoaHoc("' + KhoaHoc.MaKhoaHoc + '")');
        tdHinhAnh.onclick = function(){
            layThongTinKhoaHoc(KhoaHoc.MaKhoaHoc);
        }
        tdHinhAnh.setAttribute('data-toggle', 'modal');
        tdHinhAnh.setAttribute('data-target', '#updateCourse');

        tr.appendChild(tdMaKhoaHoc);
        tr.appendChild(tdTenKhoaHoc);
        tr.appendChild(tdMoTa);
        tr.appendChild(tdLuotXem);
        tr.appendChild(tdNguoiTao);
        tr.appendChild(tdHinhAnh);
        
        tbody.appendChild(tr);
    }
}

function HinhAnh()
{
    var imgRandom = Math.floor((Math.random() * 11) + 1);
    if(imgRandom == 1)
    {
        var src = "./images/kh1.jpg";
        return src;
    }
    if(imgRandom == 2)
    {
        var src = "./images/kh2.jpg";
        return src;
    }
    if(imgRandom == 3)
    {
        var src = "./images/kh3.jpg";
        return src;
    }
    if(imgRandom == 4)
    {
        var src = "./images/kh4.jpg";
        return src;
    }
    if(imgRandom == 5)
    {
        var src = "./images/kh5.jpg";
        return src;
    }
    if(imgRandom == 6)
    {
        var src = "./images/kh6.jpg";
        return src;
    }
    if(imgRandom == 7)
    {
        var src = "./images/kh7.jpg";
        return src;
    }
    if(imgRandom == 8)
    {
        var src = "./images/kh8.jpg";
        return src;
    }
    if(imgRandom == 9)
    {
        var src = "./images/kh9.jpg";
        return src;
    }
    if(imgRandom == 10)
    {
        var src = "./images/kh10.jpg";
        return src;
    }
    if(imgRandom == 11)
    {
        var src = "./images/kh11.jpg";
        return src;
    }
}

function setAnh()
{
    var json = localStorage.getItem("HinhAnh");
    if(json == null || json == undefined)
    {
        for(let i = 0; i < dskh.mangKhoaHoc.length; i++)
        {       
                var ten = dskh.mangKhoaHoc[i].MaKhoaHoc;
                var src = HinhAnh();
                var img = new HinhAnh1(ten,src);
                dsha.ThemHinhAnh(img);
        }
        var jsonAnh = JSON.stringify(dsha.mangHinhAnh);
        localStorage.setItem("HinhAnh",jsonAnh);
    }
    else
    {
        getAnh();
        var kqdsha = dsha.mangHinhAnh.length;
        var kqdskh = dskh.mangKhoaHoc.length;
        if(kqdsha != kqdskh)
        {
            dsha.mangHinhAnh = [];
            console.log(kqdsha);
            for(let i = 0; i < dskh.mangKhoaHoc.length; i++)
            {       
                    var ten1 = dskh.mangKhoaHoc[i].MaKhoaHoc;
                    var src1 = HinhAnh();
                    var img1 = new HinhAnh1(ten1,src1);
                    dsha.ThemHinhAnh(img1);
            }
            var jsonAnh = JSON.stringify(dsha.mangHinhAnh);
            localStorage.setItem("HinhAnh",jsonAnh);
        }
    }
    
}

function getAnh()
{
    var json = localStorage.getItem("HinhAnh");
    var listAnh = JSON.parse(json);
    dsha.mangHinhAnh = listAnh;
}


// Lấy Storage
function getStorage()
{
    var jsonKhoaHoc = localStorage.getItem('DanhSachKhoaHoc');
    var dsKhoaHoc = JSON.parse(jsonKhoaHoc);
    dskh.mangKhoaHoc = dsKhoaHoc;
    setAnh();
    LoadKhoaHoc(dskh);
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
            location.href = "../User/index.html"
        }
       
        $("#nameAdmin").html(nguoiDangNhap[0].TaiKhoan);
    }
}


function editSize()
{
    $("iframe").attr("width","200");
    $("iframe").attr("height","100");

    $(".imgCourse").css("width","200");
    $(".imgCourse").css("height","100");
}

function DeleteCourse() {
    swal({
        title: "Bạn chắc chắn muốn xóa?",
        text: "Khi đã xóa không thể khôi phục!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if(willDelete)
            {
                xoaKhoaHoc();
            }
        
        });
}


// $("#btnInsertCourse2").click(function(){
//     ThemKhoaHoc();
// });

// $("#updateCourse2").click(function(){
//     CapNhatThongTinKhoaHoc();
// });

$("#deleteCourse").click(function(){
    var check = $(".checkKhoaHoc");
    if(check.is(":checked"))
    {
        DeleteCourse();
    }
});


$("#searchCourse .search").keyup(function(){
    TimKiemKhoaHoc();
    editSize();
});

// Check all checkbox
$("#checkAllKH").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});