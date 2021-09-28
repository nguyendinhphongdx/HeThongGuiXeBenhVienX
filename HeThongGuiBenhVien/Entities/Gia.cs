using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class Gia
    {
        int magia;
        int loaiGui;
        int giaTien;

        public Gia()
        {
        }

        public Gia(int magia, int loaiGui, int giaTien)
        {
            this.Magia = magia;
            this.LoaiGui = loaiGui;
            this.GiaTien = giaTien;
        }

        public int Magia { get => magia; set => magia = value; }
        public int LoaiGui { get => loaiGui; set => loaiGui = value; }
        public int GiaTien { get => giaTien; set => giaTien = value; }
    }
}
