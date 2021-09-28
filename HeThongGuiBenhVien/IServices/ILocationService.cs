using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class ILocationService
    {
        public KhuVuc GetKhuVucInRow(DataRow dataRow)
        {
            KhuVuc x = new KhuVuc();
            x.Makhuvuc = Convert.ToInt32(dataRow[0]);
            x.Tenkhuvuc = dataRow[1] + "";
            x.Soluongtoida = Convert.ToInt32(dataRow[2]);
            x.Soluonghientai = Convert.ToInt32(dataRow[3]);
            return x;
        }

        internal List<object> GetKhuVucInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetKhuVucInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
