import DanhSachHinhAnh from './DanhSachHinhAnh';
import DanhSachKhoaHoc from './DanhSachkhoaHoc';
import DanhSachHocVien from './DanhSachHocVien';
import {ServiceKhoaHoc} from './ServiceKhoaHoc';


var dsha = new DanhSachHinhAnh();
var dskh = new DanhSachKhoaHoc();
var detailCourse = [];
var dsgd = [];
var thongtinUser = [];
var dshv = new DanhSachHocVien();
var serviceKhoaHoc = new ServiceKhoaHoc();

getStorageCourse();
loadCourseDetails();
// loadMore();
DanhSachDaGhiDanh();
checkView();



function loadCourseDetails() {
    getDSKH();
    getAnh();
    
    for(let i=0; i < dsha.mangHinhAnh.length; i++)
    {
        if(detailCourse.MaKhoaHoc == dsha.mangHinhAnh[i].ten)
        {
            $(".imgCourse").attr('src', dsha.mangHinhAnh[i].src);
            $(".imgCourse").css('width', '100%');
        }
    }


    $(".nameTeacher").html(detailCourse.NguoiTao);
    $(".nameCourse").html(detailCourse.TenKhoaHoc);

    var NoiDung = $("#linkCourse");
    var iframe = $(detailCourse.MoTa);
    NoiDung.append(iframe);
    $("iframe").attr("width","100%");
    
}

function GhiDanhKhoaHoc() {
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser != null)
    {
        var list = JSON.parse(jsonUser);
        dshv.mangHocVien = list;
        serviceKhoaHoc.GhiDanhKhoaHoc(detailCourse.MaKhoaHoc,dshv.mangHocVien[0].TaiKhoan);
    }
   
}


function getAnh()
{
    var jsonAnh = localStorage.getItem("HinhAnh");
    var listAnh = JSON.parse(jsonAnh);
    dsha.mangHinhAnh = listAnh;
}


function getDSKH()
{
    var jsonKH = localStorage.getItem("DanhSachKhoaHoc");
    var listKH = JSON.parse(jsonKH);
    dskh.mangKhoaHoc = listKH;
}


function DanhSachDaGhiDanh()
{
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    
    if(jsonUser != null)
    {
        var list = JSON.parse(jsonUser);
        thongtinUser = list;

        serviceKhoaHoc.LayThongTinGhiDanhKhoaHoc(thongtinUser[0].TaiKhoan);
        var jsonGhiDanh = localStorage.getItem("ThongTinGhiDanhKhoaHoc");
        if(jsonGhiDanh != null)
        {
            var listGD = JSON.parse(jsonGhiDanh);
            dsgd = listGD;

            for(let i = 0; i < dsgd.length; i++)
            {
                if(dsgd[i].MaKhoaHoc == detailCourse.MaKhoaHoc)
                {
                    $(".btnEnroll").css("display","none");
                }
            }

        }
    }

    
    
}


function getStorageCourse() {
    var jsonCourseDetails = localStorage.getItem('ChiTietKhoaHoc');
    if (jsonCourseDetails == null) {
        location.href = "./Course.html";
    }
    var list = JSON.parse(jsonCourseDetails);
    detailCourse = list;
}



function checkView() {

    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser == null){
        $("#viewCourse").attr("data-target","");
    }
    else
    {

        for(let i = 0; i < dsgd.length; i++)
        {
            if(detailCourse.MaKhoaHoc == dsgd[i].MaKhoaHoc)
            {
                 $("#viewCourse").attr("data-target","#myModal");
                 break;
            }
            else
            {
                $("#viewCourse").attr("data-target","");
            }
            
        }
      
    }
   
}


// function loadMore() {
//     size_li = $("#myList li").size();
//     x = 3;
//     if (size_li > 3) {
//         $("#loadMore").show();
//     }
//     $('#myList li:lt(' + x + ')').show();
//     $('#loadMore').click(function () {
//         x = (x + 3 <= size_li) ? x + 3 : size_li;
//         $('#myList li:lt(' + x + ')').show();
//         if (x == size_li) {
//             $("#loadMore").hide();
//         }

//     });
// }


$(".btnEnroll").click(function () {

    
    var jsonUser = localStorage.getItem('ThongTinDangNhap');
    if(jsonUser == null)
    {
        location.href = "/login";
    }
    else
    {
        swal({
            text: "Bạn chắc chắn muốn ghi danh khóa học này?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    GhiDanhKhoaHoc(); 
                }
            });
    }

});