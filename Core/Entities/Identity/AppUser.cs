using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Core.Entities.Identity
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Address Address { get; set; }

        public string FoodAllergies { get; set; }
        public string AgeRange { get; set; }
        public string CovidVaccinated { get; set; }
        public int OutdoorExperience { get; set; }
        public int Mobility { get; set; }
        public bool CprCertified { get; set; }
        
        // public List<UserInterest> Interests { get; set; }
        // public List<Booking> Bookings { get; set; }
    }
}