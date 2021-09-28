using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class The
    {
        int mathe;
        int makhuvuc;
        bool tinhtrang;

        public The()
        {
        }

        public The(int mathe, int makhuvuc, bool tinhtrang)
        {
            this.Mathe = mathe;
            this.Makhuvuc = makhuvuc;
            this.Tinhtrang = tinhtrang;
        }

        public int Mathe { get => mathe; set => mathe = value; }
        public int Makhuvuc { get => makhuvuc; set => makhuvuc = value; }
        public bool Tinhtrang { get => tinhtrang; set => tinhtrang = value; }
    }
}
