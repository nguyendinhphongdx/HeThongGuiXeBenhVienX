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
    public class CardController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        ICardService CardService = new ICardService();


        [Route("queryAll")] // api/card/queryAll
        [HttpGet]
        public object queryAlll()
        {
            string queryString = "select * from tblThe";
            DataTable result = provider.ExecuteQuery(queryString);
            return responseUlti.dataArray(CardService.GetTheInTable(result), "success", 200);
        }
        [Route("addCard")] // api/card/addCard
        [HttpPost]
        public object addCard([FromBody] The the)
        {
            //create proc sp_them_the @makhuvuc int
            //as
            //    begin
            //        insert into tblThe values(@makhuvuc,0)
            //end
            try
            {
                string[] nameParams = new string[] { "@makhuvuc" };
                object[] parames = new object[] { the.Makhuvuc };
                if (provider.ExecuteNonProc("sp_them_the", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblThe WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(CardService.GetTheInTable(result), "thêm mới thành công!", 200);
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
        [Route("updateCard")] // api/card/updateCard
        [HttpPost]
        public object updateCard([FromBody] The the)
        {
            try
            {
                return responseUlti.Error("Cập nhật thông tin không thành công!", 400);
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 400);
            }
        }
        [Route("deleteCard")] // api/card/deleteCard
        [HttpPost]
        public object deleteCard([FromBody] The the)
        {
            //create proc sp_xoa_the @mathe int
            //as
            //    begin
            //        delete tblThe where maThe = @mathe
            //end
            try
            {
                string[] nameParams = new string[] { "@mathe" };
                object[] parames = new object[] { the.Mathe };
                if (provider.ExecuteNonProc("sp_xoa_the", nameParams, parames) > 0)
                {
                    string queryString = "SELECT * from tblThe WHERE 1=1 ";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(CardService.GetTheInTable(result), "Xóa thông tin thành công!", 200);
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
