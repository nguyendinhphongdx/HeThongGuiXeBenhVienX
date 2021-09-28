using HeThongGuiBenhVien.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.IServices
{
    public class IUserService
    {
        public NhanVien GetNhanVienInRow(DataRow dataRow)
        {
            NhanVien x = new NhanVien();
            x.Manv = Convert.ToInt32(dataRow[0]);
            x.Tennv = dataRow[1] + "";
            x.Tuoi = Convert.ToInt32(dataRow[2]);
            x.Sodienthoai = dataRow[3] + "";
            x.Mavaitro = Convert.ToInt32(dataRow[4]);
            return x;
        }

        internal List<object> GetNhanVienInTable(DataTable result)
        {
            List<object> ls = new List<object>();
            for (int i=0; i < result.Rows.Count; i++)
            {
                ls.Add(this.GetNhanVienInRow(result.Rows[i]));
            }
            return ls;
        }
    }
}
