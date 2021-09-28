using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class KhuVuc
    {
        int makhuvuc;
        int soluongtoida;
        int soluonghientai;
        string tenkhuvuc;

        public KhuVuc()
        {
        }

        public KhuVuc(int makhuvuc, int soluongtoida, int soluonghientai, string tenkhuvuc)
        {
            this.Makhuvuc = makhuvuc;
            this.Soluongtoida = soluongtoida;
            this.Soluonghientai = soluonghientai;
            this.Tenkhuvuc = tenkhuvuc;
        }

        public int Makhuvuc { get => makhuvuc; set => makhuvuc = value; }
        public int Soluongtoida { get => soluongtoida; set => soluongtoida = value; }
        public int Soluonghientai { get => soluonghientai; set => soluonghientai = value; }
        public string Tenkhuvuc { get => tenkhuvuc; set => tenkhuvuc = value; }
    }
}
