var UserLogin = [];
checkLogin(); 

//CheckLogin
function checkLogin()
{
    var sessionLogin = localStorage.getItem("ThongTinDangNhap");
    var list = JSON.parse(sessionLogin);
    UserLogin = list;
    

    if(sessionLogin == null)
    {
        $('#logout').css('display','inline-block');
        $('#login').css('display','none');
    }
    else
    {
        

        $('#logout').css('display','none');
        $('#login').css('display','inline-block');

        var parent = document.getElementById('name');
        var name = document.createElement('span');
        name.innerHTML = UserLogin[0].TaiKhoan;
        
        var logout2 = document.getElementById('logout2');
        var nameLogout = document.createElement('span')
        nameLogout.innerHTML = "Đăng xuất";
        
        logout2.appendChild(nameLogout);
        parent.appendChild(name);
    }
}


$("#logout2").click(function(){
    localStorage.removeItem('ThongTinNguoiDung');
    localStorage.removeItem('ThongTinDangNhap');
    localStorage.removeItem('Pass');
    localStorage.removeItem('ThongTinGhiDanhKhoaHoc');
    window.location.reload();
});