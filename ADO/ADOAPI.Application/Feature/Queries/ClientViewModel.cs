using ADOAPI.Application.Feature.DocumentType.Queries;
using ADOAPI.Application.Feature.Gender.Queries;

namespace ADOAPI.Application.Feature.Queries
{
    public class ClientViewModel
    {
        public string Identification { get; set; }
        public virtual DocumentTypeViewModel DocumentType{ get; set; }
        public string Name { get; set; }
        public string LastName{ get; set; }
        public  GenderViewModel Gender{ get; set; }
    }
}