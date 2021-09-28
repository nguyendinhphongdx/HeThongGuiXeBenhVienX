using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class NhanVien
    {
        int manv;
        string tennv;
        int tuoi;
        string sodienthoai;
        int mavaitro;

        public NhanVien()
        {
        }

        public NhanVien(int manv, string tennv, int tuoi, string sodienthoai, int mavaitro)
        {
            this.Manv = manv;
            this.Tennv = tennv;
            this.Tuoi = tuoi;
            this.Sodienthoai = sodienthoai;
            this.Mavaitro = mavaitro;
        }

        public int Manv { get => manv; set => manv = value; }
        public string Tennv { get => tennv; set => tennv = value; }
        public int Tuoi { get => tuoi; set => tuoi = value; }
        public string Sodienthoai { get => sodienthoai; set => sodienthoai = value; }
        public int Mavaitro { get => mavaitro; set => mavaitro = value; }
    }
}
