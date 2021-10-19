using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class IRoleService
    {
        public VaiTro GetVaiTroInRow(DataRow dataRow)
        {
            VaiTro x = new VaiTro();
            x.Mavaitro = Convert.ToInt32(dataRow[0]);
            x.Tenvaitro =dataRow[1] +"";
            return x;
        }

        internal List<object> GetVaiTroInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetVaiTroInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
