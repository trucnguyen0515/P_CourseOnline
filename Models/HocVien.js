const HocVien = function(taikhoan,pass,hoten,email,sodt,maLoai,tenLoai)
{
    this.TaiKhoan = taikhoan;
    this.MatKhau = pass;
    this.HoTen = hoten;
    this.Email = email;
    this.SoDT = sodt;
    this.MaLoaiNguoiDung = maLoai;
    this.TenLoaiNguoiDung = tenLoai;
}

export default HocVien;