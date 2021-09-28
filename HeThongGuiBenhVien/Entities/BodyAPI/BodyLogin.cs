using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities.BodyAPI
{
    public class BodyLogin
    {
        string taikhoan;
        string matkhau;

        public BodyLogin()
        {
        }

        public BodyLogin(string taikhoan, string matkhau)
        {
            this.taikhoan = taikhoan;
            this.matkhau = matkhau;
        }

        public string Taikhoan { get => taikhoan; set => taikhoan = value; }
        public string Matkhau { get => matkhau; set => matkhau = value; }
    }
}
