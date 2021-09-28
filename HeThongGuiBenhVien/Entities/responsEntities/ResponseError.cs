using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HeThongGuiBenhVien.Entities.responsEntities
{
    public class ResponseError
    {
        string message;
        int status;

        public ResponseError()
        {
        }

        public ResponseError(string message, int status)
        {
            this.Message = message;
            this.Status = status;
        }

        public string Message { get => message; set => message = value; }
        public int Status { get => status; set => status = value; }
    }
}
