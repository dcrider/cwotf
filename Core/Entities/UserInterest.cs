using Core.Entities.Identity;

namespace Core.Entities
{
    public class UserInterest : BaseEntity
    {
        public string UserId { get; set; }
        public int InterestId { get; set; }

        // public AppUser UserProfile { get; set; }
        public Interest Interest { get; set; }
    }
}