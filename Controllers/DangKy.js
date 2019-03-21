import DanhSachHinhAnh from './DanhSachHinhAnh';


var dsha = new DanhSachHinhAnh();
$("footer").hide();


function getAnh()
{
        var jsonAnh = localStorage.getItem("HinhAnh");
        var listAnh = JSON.parse(jsonAnh);
        dsha.mangHinhAnh = listAnh;
}

// $("#register").click(function(){
//     DangKy();
// });