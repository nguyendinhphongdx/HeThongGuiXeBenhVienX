using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities
{
    public class AnalysisType
    {
        string loaixe;
        int soluong;

        public AnalysisType()
        {
        }

        public AnalysisType(string loaixe, int soluong)
        {
            this.loaixe = loaixe;
            this.soluong = soluong;
        }

        public string Loaixe { get => loaixe; set => loaixe = value; }
        public int Soluong { get => soluong; set => soluong = value; }
    }
}
