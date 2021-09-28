using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class VaiTro
    {
        int mavaitro;
        string tenvaitro;

        public VaiTro()
        {
        }

        public VaiTro(int mavaitro, string tenvaitro)
        {
            this.Mavaitro = mavaitro;
            this.Tenvaitro = tenvaitro;
        }

        public int Mavaitro { get => mavaitro; set => mavaitro = value; }
        public string Tenvaitro { get => tenvaitro; set => tenvaitro = value; }
    }

}
