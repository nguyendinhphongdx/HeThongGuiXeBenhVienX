using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class ICardService
    {
        public The GetTheInRow(DataRow dataRow)
        {
            The x = new The();
            x.Makhuvuc = Convert.ToInt32(dataRow[1]);
            x.Mathe = Convert.ToInt32(dataRow[0]);
            x.Tinhtrang = (bool)dataRow[2];
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
    }
}
