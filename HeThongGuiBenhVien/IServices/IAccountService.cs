using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class IAccountService
    {
        public TaiKhoan GetTaiKhoanInRow(DataRow dataRow)
        {
            TaiKhoan x = new TaiKhoan();
            x.Matk = Convert.ToInt32(dataRow[0]);
            x.Manv = Convert.ToInt32(dataRow[1]);
            x.Tendangnhap = dataRow[2]+"";
            x.Matkhau = dataRow[3] + "";
            return x;
        }

        internal List<object> GetTaiKhoanInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i = 0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetTaiKhoanInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
