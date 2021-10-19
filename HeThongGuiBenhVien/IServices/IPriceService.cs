using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class IPriceService
    {
        public Gia GetGiaInRow(DataRow dataRow)
        {
            Gia x = new Gia();
            x.Magia = Convert.ToInt32(dataRow[0]);
            x.LoaiGui = Convert.ToInt32(dataRow[1]);
            x.GiaTien = Convert.ToInt32(dataRow[2]);
            return x;
        }

        internal List<object> GetGiaInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetGiaInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
