using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities.responsEntities
{
    public class ResponseObejct
    {
        string message;
        int status;
        object data;

        public ResponseObejct()
        {
        }

        public ResponseObejct(string message, int status, object data)
        {
            this.Message = message;
            this.Status = status;
            this.Data = data;
        }

        public string Message { get => message; set => message = value; }
        public int Status { get => status; set => status = value; }
        public object Data { get => data; set => data = value; }
    }
}
