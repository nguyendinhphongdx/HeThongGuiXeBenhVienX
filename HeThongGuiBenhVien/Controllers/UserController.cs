using HeThongGuiBenhVien.Entities;
using HeThongGuiBenhVien.Entities.BodyAPI;
using HeThongGuiBenhVien.IServices;
using HeThongGuiBenhVien.ultis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        IUserService userService = new IUserService();
        [Route("login")] // api/user/login
        [HttpPost]
        public object login([FromBody] BodyLogin account)
        {
            try
            {
                string taikhoan = account.Taikhoan;
                string matkhau = account.Matkhau;
                //create proc sp_dangnhap @taikhoan varchar(255),@matkhau varchar(255)
                //as
                //begin
                //    select* from tblTaiKhoan
                //   where taiKhoan = @taikhoan and matKhau = @taikhoan
                //end
                string[] nameParams = new string[] { "@taikhoan", "@matkhau" };
                object[] parames = new object[] { taikhoan, matkhau };
                DataTable result = provider.ExecuteProc("sp_dangnhap", nameParams, parames);
                if (result.Rows.Count > 0)
                {
                    return responseUlti.dataObejct(userService.GetNhanVienInRow(result.Rows[0]), "success", 200);
                }
                else throw new Exception("Tai khoản khonng tồn tại");
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 401);
            }
           
        }
        [Route("queryAll")] // api/user/queryAll
        [HttpGet]
        public object queryAll()
        {
            try
            {
                string queryString = "select * from tblNhanVien";
                DataTable result = provider.ExecuteQuery(queryString);
                return responseUlti.dataArray(userService.GetNhanVienInTable(result), "success", 200);
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 401);
            }

        }
        [Route("addUser")] // api/account/addUser
        [HttpPost]
        public object addUser([FromBody] NhanVien nhanvien)
        {
            //create proc sp_them_nhanvien @ten nvarchar(255),@tuoi int,@sdt nvarchar(255),@mavaitro int
            //as
            // begin
            //        insert into tblNhanVien values(@ten, @tuoi, @sdt, @mavaitro)
            //end
            try
            {
                string[] nameParams = new string[] { "@ten", "@tuoi", "@sdt", "@mavaitro" };
                object[] parames = new object[] { nhanvien.Tennv, nhanvien.Tuoi, nhanvien.Sodienthoai, nhanvien.Mavaitro };
                if (provider.ExecuteNonProc("sp_them_nhanvien", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblNhanVien";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(userService.GetNhanVienInTable(result), "thêm mới thành công!", 200);
                }
                else
                {
                    throw new Exception("thêm không thành công!");
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("updateUser")] // api/account/addUser
        [HttpPost]
        public object updateUser([FromBody] NhanVien nhanvien)
        {
            //create proc sp_them_nhanvien @ten nvarchar(255),@tuoi int,@sdt nvarchar(255),@mavaitro int
            //as
            // begin
            //        insert into tblNhanVien values(@ten, @tuoi, @sdt, @mavaitro)
            //end
            try
            {
                string[] nameParams = new string[] { "@ten", "@tuoi", "@sdt", "@mavaitro", "@manv" };
                object[] parames = new object[] { nhanvien.Tennv, nhanvien.Tuoi, nhanvien.Sodienthoai, nhanvien.Mavaitro, nhanvien.Manv};
                if (provider.ExecuteNonProc("sp_capnhat_nhanvien", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblNhanVien WHERE  1=1 AND maNhanVien=" + parames[4];
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(userService.GetNhanVienInTable(result), "Cập nhật thông tin thành công!", 200);
                }
                else
                {
                    throw new Exception("Cập nhật không thành công!");
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("deleteUser")] // api/account/addUser
        [HttpPost]
        public object deleteUser([FromBody] NhanVien nhanvien)
        {
            //create proc sp_them_nhanvien @ten nvarchar(255),@tuoi int,@sdt nvarchar(255),@mavaitro int
            //as
            // begin
            //        insert into tblNhanVien values(@ten, @tuoi, @sdt, @mavaitro)
            //end
            try
            {
                string[] nameParams = new string[] {"@manv" };
                object[] parames = new object[] {  nhanvien.Manv };
                if (provider.ExecuteNonProc("sp_xoa_nhanvien", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblNhanVien WHERE 1=1";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(userService.GetNhanVienInTable(result), "Xóa thông tin thành công!", 200);
                }
                else
                {
                    throw new Exception("Xóa không thành công!");
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
    }
}
