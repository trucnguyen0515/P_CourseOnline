

const DanhSachHocVien = function ()
{
    this.mangHocVien = [];

    this.ThemHocVien = function(hocvien)
    {
        this.mangHocVien.push(hocvien);
    }

    this.TimKiemHocVien = function(name)
    {
        
        var mangDSHV = new DanhSachHocVien();
        
        for(let i = 0; i < this.mangHocVien.length; i++)
        {
            var value = this.mangHocVien[i];
    
            if(value.TaiKhoan.toLowerCase().indexOf(name.toLowerCase()) > -1) 
            {
                
                mangDSHV.ThemHocVien(value);
            }
        
           
        }
        
        return mangDSHV;
    }

    this.layThongTinHocVien = function(name)
    {
        for(i = 0; i < this.mangHocVien.length; i++ )
        {
            var value = this.mangHocVien[i];
            if(value.TaiKhoan == name)
            {
                return value;
            }
        }
    }

    this.CapNhatThongTinHocVien = function(mangHocVienUpdate)
    {
        for(let i = 0; i < this.mangHocVien.length; i++)
        {
            var value = this.mangHocVien[i];
            if(mangHocVienUpdate.TaiKhoan == value.TaiKhoan)
            {
                value.TaiKhoan = mangHocVienUpdate.TaiKhoan;
                value.HoTen = mangHocVienUpdate.HoTen;
                value.Email = mangHocVienUpdate.Email;
                value.SoDT = mangHocVienUpdate.SoDT;
                value.MaLoaiNguoiDung = mangHocVienUpdate.MaLoaiNguoiDung;
                value.TenLoaiNguoiDung = mangHocVienUpdate.TenLoaiNguoiDung;
            }
        }
    }

    this.XoaHocVien = function(mangXoaHocVien)
    {
       
        for(let i = 0; i < mangXoaHocVien.length; i++)
        {
            for(let j = 0; j < this.mangHocVien.length; j++)
            {
                var mangXoaHV= mangXoaHocVien[i];
                if(mangXoaHV == this.mangHocVien[j].TaiKhoan)
                {
                    this.mangHocVien.splice(j,1);
                }
            }
        }
     }

}

export default DanhSachHocVien;