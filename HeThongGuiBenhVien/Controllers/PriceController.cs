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
    public class PriceController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        IPriceService PriceService = new IPriceService();


        [Route("queryAll")] // api/price/queryAll
        [HttpGet]
        public object queryAlll()
        {
            string queryString = "select * from tblGia";
            DataTable result = provider.ExecuteQuery(queryString);
            return responseUlti.dataArray(PriceService.GetGiaInTable(result), "success", 200);
        }
    }
}
