using HeThongGuiBenhVien.Entities.responsEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.ultis
{
    public class ResponseUlti
    {
        
        public object dataArray(List<object> data,string message,int status)
        {
            return new ResponseArray(message, status,data);
        }
        public object dataObejct(object data, string message, int status)
        {
            return new ResponseObejct(message, status, data);
        }
        public object Error(string message,int status)
        {
            return new ResponseError(message, status);
        }
    }
}
