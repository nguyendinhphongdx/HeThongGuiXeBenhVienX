using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class TaiKhoan
    {
        int matk;
        string tendangnhap;
        string matkhau;
        int manv;

        public int Matk { get => matk; set => matk = value; }
        public string Tendangnhap { get => tendangnhap; set => tendangnhap = value; }
        public string Matkhau { get => matkhau; set => matkhau = value; }
        public int Manv { get => manv; set => manv = value; }

        public TaiKhoan(int matk, string tendangnhap, string matkhau, int manv)
        {
            this.Matk = matk;
            this.Tendangnhap = tendangnhap;
            this.Matkhau = matkhau;
            this.Manv = manv;
        }

        public TaiKhoan()
        {
        }
    }
    public class ChangePassword
    {
        int matk;
        string matkhau;
        string matkhaumoi;
        string matkhaumoi_nhaplai;

        public int Matk { get => matk; set => matk = value; }
        public string Matkhau { get => matkhau; set => matkhau = value; }
        public string Matkhaumoi { get => matkhaumoi; set => matkhaumoi = value; }
        public string Matkhaumoi_nhaplai { get => matkhaumoi_nhaplai; set => matkhaumoi_nhaplai = value; }

        public ChangePassword(int matk, string matkhau, string matkhaumoi, string matkhaumoi_nhaplai)
        {
            this.Matk = matk;
            this.Matkhau = matkhau;
            this.Matkhaumoi = matkhaumoi;
            this.Matkhaumoi_nhaplai = matkhaumoi_nhaplai;
        }
        public ChangePassword()
        {
        }
    }
}
