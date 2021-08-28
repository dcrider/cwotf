using System.Collections.Generic;
using Core.Entities;

namespace API.DTOs
{
    public class UserDTO
    {
        public string Email { get; set; }
        public string DisplayName { get; set; }
        public string Token { get; set; }

        public IList<string> Roles { get; set; }

        public string FoodAllergies { get; set; }
        public string AgeRange { get; set; }
        public string CovidVaccinated { get; set; }
        public int OutdoorExperience { get; set; }
        public int Mobility { get; set; }
        public bool CprCertified { get; set; }

        public List<UserInterest> Interests { get; set; }
        public List<Booking> Bookings { get; set; }
    }
}