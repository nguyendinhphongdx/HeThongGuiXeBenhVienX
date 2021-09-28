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
    public class LocationController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        ILocationService locationService = new ILocationService();

        [Route("queryAll")] // api/location/queryAll
        [HttpGet]
        public object queryAll()
        {
            try
            {
                string queryString = "select * from tblKhuVuc";
                DataTable result = provider.ExecuteQuery(queryString);
                return responseUlti.dataArray(locationService.GetKhuVucInTable(result), "success", 200);
            }
            catch (Exception e)
            {
                return responseUlti.Error(e.Message, 401);
            }

        }
        [Route("addLocation")] // api/location/addLocation
        [HttpPost]
        public object addLocation([FromBody] KhuVuc khuvuc)
        {
            //create proc sp_them_khuvuc @tenkhuvuc nvarchar(255),@soluongtoida int, @soluonghientai int
            //as
            //    begin
            //        insert into tblKhuVuc values(@tenkhuvuc, @soluongtoida, @soluonghientai)
            //end
            try
            {
                string[] nameParams = new string[] { "@tenkhuvuc", "@soluongtoida", "@soluonghientai"};
                object[] parames = new object[] { khuvuc.Tenkhuvuc,khuvuc.Soluongtoida,khuvuc.Soluonghientai };
                if (provider.ExecuteNonProc("sp_them_khuvuc", nameParams, parames) > 0)
                {
                    string queryString = "select * from tblKhuVuc";
                    DataTable result = provider.ExecuteQuery(queryString);
                    return responseUlti.dataArray(locationService.GetKhuVucInTable(result), "thêm mới thành công!", 200);
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
    }
}
