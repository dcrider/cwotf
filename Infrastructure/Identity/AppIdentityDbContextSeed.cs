using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager) 
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "bob@test.com",
                    Address = new Address {
                        FirstName = "Bob",
                        LastName = "Bobberty",
                        Street = "10 The Street",
                        State = "CO",
                        ZipCode = "80403"
                    },
                    FoodAllergies = "Peanuts",        
                    AgeRange = "30-40",
                    CovidVaccinated = "Yes",
                    OutdoorExperience = 3,
                    Mobility = 4,
                    CprCertified = false
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}