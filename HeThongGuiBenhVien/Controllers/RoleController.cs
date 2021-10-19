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
    public class RoleController : ControllerBase
    {
        ResponseUlti responseUlti = new ResponseUlti();
        SqlProvider provider = new SqlProvider();
        IRoleService RoleService = new IRoleService();


        [Route("queryAll")] // api/role/queryAll
        [HttpGet]
        public object queryAlll()
        {
            string queryString = "select * from tblVaiTro";
            DataTable result = provider.ExecuteQuery(queryString);
            return responseUlti.dataArray(RoleService.GetVaiTroInTable(result), "success", 200);
        }
    }
}
