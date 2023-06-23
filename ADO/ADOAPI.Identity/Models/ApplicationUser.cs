using Microsoft.AspNetCore.Identity;

namespace ADOAPI.Identity.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public string Provider { get; set; }
       
    }
    
}
