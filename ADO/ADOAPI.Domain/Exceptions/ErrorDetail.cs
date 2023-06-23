namespace ADOAPI.Domain.Exceptions
{
    public class ErrorDetail
    {
        public Enums.ErrorCode ErrorCode { get; set; }
        public string ErrorMessage{ get; set; }
    }
}