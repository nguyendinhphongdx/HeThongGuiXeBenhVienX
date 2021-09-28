using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities.responsEntities
{
    public class ResponseArray
    {
        string message;
        int status;
        List<object> data;

        public ResponseArray()
        {
        }

        public ResponseArray(string message, int status, List<object> data)
        {
            this.Message = message;
            this.Status = status;
            this.Data = data;
        }

        public string Message { get => message; set => message = value; }
        public int Status { get => status; set => status = value; }
        public List<object> Data { get => data; set => data = value; }
    }
}
