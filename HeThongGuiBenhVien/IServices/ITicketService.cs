using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class ITicketService
    {
        public VeThe GetTheInRow(DataRow dataRow)
        {
            VeThe x = new VeThe();
            x.Mathe = Convert.ToInt32(dataRow[0]);
            x.Bienso = dataRow[1]+"";
            x.Mauxe = dataRow[2] +"";
            x.Loaixe = dataRow[3] + "";
            x.Thoigianbatdau = (DateTime)dataRow[4];
            x.Thoigianketthuc = (DateTime)dataRow[5];
            x.Manv = Convert.ToInt32(dataRow[6]);
            x.Magia = Convert.ToInt32(dataRow[7]);
            return x;
        }

        internal List<object> GetTheInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetTheInRow(result.Rows[i]));
            }
            return ls;
        }
        public AnalysisType GetTypeInRow(DataRow dataRow)
        {
            AnalysisType x = new AnalysisType();
            x.Soluong = Convert.ToInt32(dataRow[1]);
            x.Loaixe = dataRow[0] + "";
            return x;
        }
        internal List<object> GetTypeInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetTypeInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
