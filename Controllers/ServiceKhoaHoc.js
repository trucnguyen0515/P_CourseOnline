const load = function()
{
    (function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

}

const load2 = function()
{
    window.onload = function() {
        //considering there aren't any hashes in the urls already
        if(!window.location.hash) {
            //setting window location
            window.location = window.location + '#loaded';
            //using reload() method to reload web page
            window.location.reload();
        }
    }
}

const ServiceKhoaHoc = function()
{
    this.LayDanhSachKhoaHoc = function()
    {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc`;
        $.ajax({
            type:"GET",
            url: urlAPI,
            async: false,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
                //load();
                var jsonKhoaHoc = JSON.stringify(ketqua);
                localStorage.setItem('DanhSachKhoaHoc',jsonKhoaHoc);
                console.log(ketqua);
            },
            error:function(error)
            {
               
            }
        
        });
    }

    this.LayThongTinGhiDanhKhoaHoc = function(taikhoan)
    {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/LayThongtinKhoaHoc?taikhoan=${taikhoan}`;
        $.ajax({
            type:"GET",
            url: urlAPI,
            async: false,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
                var jsonGhiDanh = JSON.stringify(ketqua);
                localStorage.setItem("ThongTinGhiDanhKhoaHoc",jsonGhiDanh);
                console.log(ketqua);
            },
            error:function(error)
            {
                console.log();
            }
        
        });
    }

    this.XoaKhoaHoc = function(id)
    {
        var mangKQXoa = [];
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`;
        $.ajax({
            type: "DELETE",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
          
                swal({
                    text: "Xóa khóa học thành công!",
                    icon: "success",
                    button: "OK",
                  }).then((value) =>{
                    window.location.reload();
                });
                console.log(ketqua);
                
            },
            error:function(ketqua)
            {
                alertFail("Khóa học đã ghi danh không thể xóa");
            }
        
        });
    }

    this.ChiTietKhoaHoc = function(id)
    {
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/ChiTietKhoaHoc/${id}`;
        $.ajax({
            type:"GET",
            url: urlAPI,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
                var jsonCourseDetails = JSON.stringify(ketqua);
                localStorage.setItem('ChiTietKhoaHoc',jsonCourseDetails);
                location.href = "/detailcourse";
            },
            error:function(ketqua)
            {
                
            }
        
        });
    }

    this.ThemKhoaHoc = function(khoahoc)
    {
        showloader();
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc`;
        $.ajax({
            type: "POST",
            url: urlAPI,
            dataType: "json",
            data: khoahoc,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
                setTimeout(function(){
                    hideloader();
                    swal({
                        text: "Thêm khóa học thành công!",
                        icon: "success",
                        button: "OK",
                      }).then((value) =>{
                        window.location.reload();
                    });
                    console.log(ketqua);
                    return true;
                },500);
                
            },
            error:function(ketqua)
            {
                setTimeout(function(){
                    hideloader();
                    swal({
                        text: "Trùng mã khóa học!",
                        icon: "error",
                        button: "OK",
                      }).then((value) =>{
                       
                    });
                },500);
                
            }
        
        });
    }

    this.GhiDanhKhoaHoc = function(makh,tk)
    {
        showloader();
        var model = JSON.stringify({MaKhoaHoc:makh, TaiKhoan:tk});
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/GhiDanhKhoaHoc`;
        $.ajax({
            type: "POST",
            url: urlAPI,
            contentType: "application/json",
            dataType: "json",
            data: model,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {   
                setTimeout(function () {
                    hideloader();
                    swal({
                        text: "Ghi danh khóa học thành công!",
                        icon: "success",
                        button: "OK",
                      }).then((value) =>{
                        load();
                        window.location.reload();
                    });
                    console.log(ketqua);
                }, 1000);
                
            },
            error:function(ketqua)
            {
                
            }
        
        });
    }

    this.CapNhatThongTinKhoaHoc = function(id,name,des,luotxem,creater)
    {
        showloader();
        var ngd = JSON.stringify({MaKhoaHoc:id,TenKhoaHoc:name,MoTa:des,LuotXem:luotxem,NguoiTao:creater});
        let urlAPI = `http://svcy.myclass.vn/api/QuanLyTrungTam/capnhatkhoahoc`;
        $.ajax({
            type: "PUT",
            url: urlAPI,
            contentType: "application/json",
            dataType: "json",
            data: ngd,
            xhrFields: {
                withCredentials: false
            },
            success: function(ketqua)
            {
                setTimeout(function(){
                    hideloader();
                swal({
                    text: "Cập nhật khóa học thành công!",
                    icon: "success",
                    button: "OK",
                  }).then((value) =>{
                    window.location.reload();
                });
                console.log(ketqua);
                return true;
                },500);
                
            },
            error:function(ketqua)
            {
                setTimeout(function(){
                    swal({
                        text: "Cập nhật khóa học thành công!",
                        icon: "success",
                        button: "OK",
                      }).then((value) =>{
                        window.location.reload();
                    });
                },500);
                
            }
        });
    }

}

//Loader 
const showloader = function () {
    $(".preloader").css("display", "inline-block");
}
const hideloader = function () {
    $(".preloader").hide();
}

export {
    load,load2,ServiceKhoaHoc
}