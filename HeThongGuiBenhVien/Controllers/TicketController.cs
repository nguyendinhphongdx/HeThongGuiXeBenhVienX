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
    public class TicketController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        ITicketService TicketService = new ITicketService();


        [Route("queryAll")] // api/ticket/queryAll
        [HttpGet]
        public object queryAlll()
        {
            string queryString = "select * from tblVeThe";
            DataTable result = provider.ExecuteQuery(queryString);
            return responseUlti.dataArray(TicketService.GetTheInTable(result), "success", 200);
        }
        [Route("addTicket")] // api/ticket/addTicket
        [HttpPost]
        public object addTicket([FromBody] VeThe x)
        {
            //create proc sp_them_vethe @mathe int, @bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255),@thoigianbatdau datetime, @thoigianketthuc datetime,@manhanvien int, @magia int
            //as
            //    begin
            //        declare @trangthai bit
            //        set @trangthai = (select tinhTrang from tblThe where maThe = @mathe)
		          //  if @trangthai = 0
            //            begin
            //                insert into tblVeThe values(@mathe, @bienso, @mauxe, @loaixe, @thoigianbatdau, @thoigianketthuc, @manhanvien, @magia)
            //                update tblThe
            //                set tinhTrang = 1
            //                where maThe = @mathe
            //            end
            //        else
            //                print 'the da duoc su dung'
            //end
            try
            {
                string[] nameParams = new string[] { "@mathe", "@bienso", "@mauxe", "@loaixe", "@thoigianbatdau", "@thoigianketthuc", "@manhanvien", "@magia" };
                object[] parames = new object[] { x.Mathe, x.Bienso, x.Mauxe, x.Loaixe, x.Thoigianbatdau, x.Thoigianketthuc, x.Manv, x.Magia };
                if (provider.ExecuteNonProc("sp_them_vethe", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblVeThe WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(TicketService.GetTheInTable(result), "thêm mới thành công!", 200);
                }
                else
                {
                    return responseUlti.Error("thêm không thành công!", 400);
                }
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("updateTicket")] // api/ticket/updateTicket
        [HttpPost]
        public object updateTicket([FromBody] VeThe x)
        {
            //create proc sp_sua_vethe @mathe int, @bienso nvarchar(255),@mauxe nvarchar(255),@loaixe nvarchar(255),@manhanvien int, @magia int
            //as
            //    begin
            //        update tblVeThe
            //        set bienSo = @bienso, mauXe = @mauxe, loaiXe = @loaixe, maNhanVien = @manhanvien, maGia = @magia
            //        where maThe = @mathe
            //end
            try
            {
                string[] nameParams = new string[] { "@mathe", "@bienso", "@mauxe", "@loaixe", "@manhanvien", "@magia" };
                object[] parames = new object[] { x.Mathe, x.Bienso, x.Mauxe, x.Loaixe, x.Manv, x.Magia };
                if (provider.ExecuteNonProc("sp_sua_vethe", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblVeThe WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(TicketService.GetTheInTable(result), "Cập nhật thông tin thành công!", 200);
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
        [Route("deleteCard")] // api/ticket/deleteCard
        [HttpPost]
        public object deleteCard([FromBody] The the)
        {
            //create proc sp_xoa_the @mathe int
            //as
            //    begin
            //        delete tblVeThe where maThe = @mathe
            //end
            try
            {
                string[] nameParams = new string[] { "@mathe" };
                object[] parames = new object[] { the.Mathe };
                if (provider.ExecuteNonProc("sp_xoa_the", nameParams, parames) > 0)
                {
                    string queryString = "SELECT * from tblVeThe WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(TicketService.GetTheInTable(result), "Xóa thông tin thành công!", 200);
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
