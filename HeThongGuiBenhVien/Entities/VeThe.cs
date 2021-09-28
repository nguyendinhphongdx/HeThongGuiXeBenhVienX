using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class VeThe
    {
        int mathe;
        string bienso;
        DateTime thoigianbatdau;
        DateTime thoigianketthuc;
        int magia;
        int manv;
        string mauxe;
        string loaixe;

        public VeThe()
        {
        }

        public VeThe(int mathe, string bienso, DateTime thoigianbatdau, DateTime thoigianketthuc, int magia, int manv, string mauxe, string loaixe)
        {
            this.Mathe = mathe;
            this.Bienso = bienso;
            this.Thoigianbatdau = thoigianbatdau;
            this.Thoigianketthuc = thoigianketthuc;
            this.Magia = magia;
            this.Manv = manv;
            this.Mauxe = mauxe;
            this.Loaixe = loaixe;
        }

        public int Mathe { get => mathe; set => mathe = value; }
        public string Bienso { get => bienso; set => bienso = value; }
        public DateTime Thoigianbatdau { get => thoigianbatdau; set => thoigianbatdau = value; }
        public DateTime Thoigianketthuc { get => thoigianketthuc; set => thoigianketthuc = value; }
        public int Magia { get => magia; set => magia = value; }
        public int Manv { get => manv; set => manv = value; }
        public string Mauxe { get => mauxe; set => mauxe = value; }
        public string Loaixe { get => loaixe; set => loaixe = value; }
    } 
}
