using HeThongGuiBenhVien.Entities;
using HeThongGuiBenhVien.IServices;
using HeThongGuiBenhVien.ultis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        IAccountService accountService = new IAccountService();


        [Route("queryAll")] // api/account/queryAll
        [HttpGet]
        public object queryAlll()
        {
            string queryString = "select * from tblTaiKhoan";
            DataTable result = provider.ExecuteQuery(queryString);
            return responseUlti.dataArray(accountService.GetTaiKhoanInTable(result), "success", 200);
        }
        [Route("addAccount")] // api/account/addAccount
        [HttpPost]
        public object addAccount([FromBody] TaiKhoan taiKhoan)
        {
            //create proc sp_them_taikhoan @taikhoan varchar(255),@matkhau varchar(255),@manhanvien int
            //as
            //begin
            //    declare @tontai int
            //    set @tontai = (select count(maTaiKhoan) from tblTaiKhoan where taiKhoan = @taikhoan)
            // if @tontai = 0
            //        begin
            //            insert into tblTaiKhoan values(@manhanvien, @taikhoan, @matkhau)
            //        end
            //    else
            //                print N'Tên tài khoản đã được sử dụng'
            //end
            try
            {
                string[] nameParams = new string[] { "@taikhoan", "@matkhau", "@manhanvien" };
                object[] parames = new object[] { taiKhoan.Tendangnhap, taiKhoan.Matkhau, taiKhoan.Manv };
                if (provider.ExecuteNonProc("sp_them_taikhoan", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblTaiKhoan";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(accountService.GetTaiKhoanInTable(result), "thêm mới thành công!", 200);
                }
                else
                {
                    return responseUlti.Error("thêm không thành công!", 400);
                }
            }
            catch(Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
    }
}
