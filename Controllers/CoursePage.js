import DanhSachKhoaHoc from './DanhSachKhoaHoc';
import DanhSachHinhAnh from './DanhSachHinhAnh';
import {ServiceKhoaHoc} from './ServiceKhoaHoc'
import HinhAnh1 from '../Models/HinhAnh'

var dskh = new DanhSachKhoaHoc();
var dsha = new DanhSachHinhAnh();
var serviceKhoaHoc = new ServiceKhoaHoc();
var MangDSKHdaGD = [];
serviceKhoaHoc.LayDanhSachKhoaHoc();
getStorage();

//Anh Danh Sach da Ghi Danh
ThongTinGhiDanhKhoaHoc();

//Lay thong danh sach khoa hoc da ghi danh
var user = [];
function ThongTinGhiDanhKhoaHoc()
{   
    var jsonUser = localStorage.getItem("ThongTinDangNhap");
    if(jsonUser != null)
    {
        var kq = JSON.parse(jsonUser);
        user = kq;

        serviceKhoaHoc.LayThongTinGhiDanhKhoaHoc(user[0].TaiKhoan);
        var jsonDSKH = localStorage.getItem("ThongTinGhiDanhKhoaHoc");
        var list = JSON.parse(jsonDSKH);
        MangDSKHdaGD = list;
        //AnDanhSachGhiDanh();
    }
    
}

// function AnDanhSachGhiDanh()
// {
//         for(i = 0; i < MangDSKHdaGD.length; i++)
//         {
//             for(j = 0; j < dskh.mangKhoaHoc.length; j++)
//             {
//                 if(MangDSKHdaGD[i].MaKhoaHoc == dskh.mangKhoaHoc[j].MaKhoaHoc)
//                 {
//                     dskh.mangKhoaHoc.splice(j,1);
//                 }
//             }
//         }

//         loadList(dskh);
// }



//Search Khoahoc
function TimKiemKhoaHoc()
{
    var name = $("#searchCourse").val();
    var list = dskh.TimKiemKhoaHoc(name);
    //AnDanhSachGhiDanh();
    loadList(list);
    return list;
}


function loadList(dskh)
{
    var ul = document.getElementById("loadList");
    ul.innerHTML = "";
    for(let i = 0; i < dskh.mangKhoaHoc.length; i++)
    {
        for(let j = 0; j < dsha.mangHinhAnh.length; j++)
        {
            if(dskh.mangKhoaHoc[i].MaKhoaHoc == dsha.mangHinhAnh[j].ten)
            {
                let value = dskh.mangKhoaHoc[i];
                    //col-md-3
                    var divcol = document.createElement('div');
                    divcol.className = "col-md-4";
                    divcol.id = value.MaKhoaHoc;

                    //Li Course
                    var li = document.createElement('li');
                    li.id = "liCourse";
                    
                    //The A linkCourse
                    var theA = document.createElement('a');
                    theA.setAttribute('href','#');
                    theA.className = "linkCourse";
                    // theA.setAttribute('onclick','getCourseDetails("'+value.MaKhoaHoc+'")')
                    theA.onclick = function(){
                        getCourseDetails(value.MaKhoaHoc)
                    }

                    //div .card
                    var divCard = document.createElement('div');
                    divCard.className = "card";

                    // div .imge
                    var divImge = document.createElement('div');
                    divImge.className = "imge";

                    var overlay = document.createElement('div');
                    overlay.id = "overlay";
                    divImge.appendChild(overlay);

                    //img
                    var theImg = document.createElement('img');
                    theImg.className = "card-img-top img-fluid";
                    theImg.setAttribute('src',dsha.mangHinhAnh[j].src);
                
                    

                    //card body
                    var divCardBody = document.createElement('div');
                    divCardBody.className = "card-body";

                    //Name Course
                    var theH4 = document.createElement('h4');
                    theH4.className = "card-title";
                    theH4.innerHTML = value.TenKhoaHoc;

                    //DanhGia
                    var theSpan = document.createElement('span');
                    theSpan.className = "fa fa-star checked";
                    var theSpan2 = document.createElement('span');
                    theSpan2.className = "fa fa-star checked";
                    var theSpan3 = document.createElement('span');
                    theSpan3.className = "fa fa-star checked";
                    var theSpan4 = document.createElement('span');
                    theSpan4.className = "fa fa-star checked";
                    var theSpan5 = document.createElement('span');
                    theSpan5.className = "fa fa-star checked";

                    //Gioi thieu
                    var theGioiThieu = document.createElement('p');
                    theGioiThieu.className = "card-text";
                    theGioiThieu.innerHTML = "Hướng dẫn "+value.TenKhoaHoc+" cơ bản đến nâng cao.";

                    //The Info
                    var theInfo = document.createElement('div');
                    theInfo.className = "info";

                    //the Info chi tiet
                    var theP1 = document.createElement('p');
                    var theI = document.createElement('i');
                    theI.className = "fa fa-user mr-1";
                    var spanName = document.createElement('span');
                    spanName.innerHTML = value.NguoiTao;

                    var theP2 = document.createElement('p');
                    var theI2 = document.createElement('i');
                    theI2.className = "fa fa-group mr-1";
                    var spanName2 = document.createElement('span');
                    spanName2.innerHTML = "30 member";

                    var theP3 = document.createElement('p');
                    var theI3 = document.createElement('i');
                    theI3.className = "fa fa-clock-o mr-1";
                    var spanName3 = document.createElement('span');
                    spanName3.innerHTML = "10 tiếng";

                    //Append
                    theP1.appendChild(theI);
                    theP1.appendChild(spanName);

                    theP2.appendChild(theI2);
                    theP2.appendChild(spanName2);

                    theP3.appendChild(theI3);
                    theP3.appendChild(spanName3);

                    theInfo.appendChild(theP1);
                    theInfo.appendChild(theP2);
                    theInfo.appendChild(theP3);

                    divCardBody.appendChild(theH4);
                    divCardBody.appendChild(theSpan);
                    divCardBody.appendChild(theSpan2);
                    divCardBody.appendChild(theSpan3);
                    divCardBody.appendChild(theSpan4);
                    divCardBody.appendChild(theSpan5);
                    divCardBody.appendChild(theGioiThieu);
                    divCardBody.appendChild(theInfo);

                    divImge.appendChild(theImg);

                    divCard.appendChild(divImge);
                    divCard.appendChild(divCardBody);

                    theA.appendChild(divCard);
                    li.appendChild(theA);
                    divcol.appendChild(li);

                    ul.appendChild(divcol);
                }
            }
        }
        
}

function getCourseDetails(id)
{
    serviceKhoaHoc.ChiTietKhoaHoc(id);
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
        var jsonAnh = localStorage.getItem("HinhAnh");
        var listAnh = JSON.parse(jsonAnh);
        dsha.mangHinhAnh = listAnh;
}

function getStorage()
{
    var json = localStorage.getItem('DanhSachKhoaHoc');
    var list = JSON.parse(json);
    dskh.mangKhoaHoc = list;
    setAnh();
    loadList(dskh);
}



//  load more
$("#loadList li").css("display","none");
loadMore();


 // remove margin-top item hidden
function checkRemove(){
 let myDiv = $('#loadList > div'); 
 for(let i = 0; i <= myDiv.length; i++){
     let heightDiv = $(myDiv[i]).height();
     if(heightDiv === 0){
         $(myDiv[i]).css({
             "margin-top":"0"
         })
     } else {
         $(myDiv[i]).css({
             "margin-top":"30px"
         })
     }
 }
}

function loadMore() {

    $(".loader").css("border-top","3px solid #ffff");
    $(".loader").css("border-right","3px solid #ffff");
    $(".loader").css("border-bottom","3px solid #ffff");
    $(".loader").css("border-left","3px solid #ffb606");

    let size_li = $("#loadList li").length;
    let x = 6;
    if (size_li > 6) {
        $("#loadMore").show();
    }
    $('#loadList li:lt(' + x + ')').show();
    checkRemove();
   
    $('#loadMore').click(function () {
        showloader();
        setTimeout(function(){
            hideloader();
            x = (x + 6 <= size_li) ? x + 6 : size_li;
            $('#loadList li:lt(' + x + ')').show();
            if (x == size_li) {
                $("#loadMore").hide();
            }

            checkRemove();

        },500);
        

    });
}


$("#searchCourse").keyup(function(){
    
    if(TimKiemKhoaHoc() != undefined)
    {
        $("#loadList li").css("display","block");
        $("#loadMore").css("display","none");
    }
 
});

//Loader 
function showloader()
{
    $(".preloader").css("display","inline-block");
}
function hideloader()
{
    $(".preloader").hide();
}