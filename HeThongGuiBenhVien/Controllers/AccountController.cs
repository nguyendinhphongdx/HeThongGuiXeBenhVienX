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
                    string queryString = "select * from tblTaiKhoan WHERE 1=1 ";
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
        [Route("updateAccount")] // api/account/updateAccount
        [HttpPost]
        public object updateAccount([FromBody] TaiKhoan taiKhoan)
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
                string[] nameParams = new string[] { "@taikhoan", "@matkhau", "@manhanvien", "@matk" };
                object[] parames = new object[] { taiKhoan.Tendangnhap, taiKhoan.Matkhau, taiKhoan.Manv , taiKhoan.Matk};
                if (provider.ExecuteNonProc("sp_capnhat_taikhoan", nameParams, parames) > 0)
                {
                    string queryString = "SELECT * from tblTaiKhoan WHERE 1=1 AND maTaiKhoan="+ parames[3];
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(accountService.GetTaiKhoanInTable(result), "Cập nhật thông tin thành công!", 200);
                }
                else
                {
                    return responseUlti.Error("Cập nhật thông tin không thành công!", 400);
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("changePassword")] // api/account/updateAccount
        [HttpPost]
        public object changePassword([FromBody] ChangePassword changePassword)
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
                string[] nameParams = new string[] {  "@matkhau", "@matkhaumoi", "@matkhaumoi_nhaplai", "@matk" };
                object[] parames = new object[] { changePassword.Matkhau, changePassword.Matkhaumoi, changePassword.Matkhaumoi_nhaplai, changePassword.Matk };
                if (!changePassword.Matkhaumoi.Equals(changePassword.Matkhaumoi_nhaplai))
                {
                    return responseUlti.Error("Nhập lại Mật khẩu mới không khớp!", 400);
                }
                if (provider.ExecuteNonProc("sp_capnhat_matkhau", nameParams, parames) > 0)
                {
                    string queryString = "SELECT * from tblTaiKhoan WHERE 1=1 AND maTaiKhoan=" + parames[3];
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(accountService.GetTaiKhoanInTable(result), "Cập nhật thông tin thành công!", 200);
                }
                else
                {
                    return responseUlti.Error("Cập nhật thông tin không thành công!", 400);
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("deleteAccount")] // api/account/updateAccount
        [HttpPost]
        public object deleteAccount([FromBody] TaiKhoan taiKhoan)
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
                string[] nameParams = new string[] { "@taikhoan", "@matkhau" };
                object[] parames = new object[] { taiKhoan.Tendangnhap, taiKhoan.Matkhau};
                if (provider.ExecuteNonProc("sp_xoa_taikhoan", nameParams, parames) > 0)
                {
                    string queryString = "SELECT * from tblTaiKhoan WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(accountService.GetTaiKhoanInTable(result), "Xóa thông tin thành công!", 200);
                }
                else
                {
                    return responseUlti.Error("Xóa thông tin không thành công!", 400);
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
    }
}
