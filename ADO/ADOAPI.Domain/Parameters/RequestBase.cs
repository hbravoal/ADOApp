namespace ADOAPI.Domain.Parameters
{
    public class RequestBase<T>
    {
        public string Provider { get; set; }
        public T Data{ get; set; }
    }
}
