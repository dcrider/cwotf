using System.Collections.Generic;

namespace Core.Entities
{
    public class CommunityThread : BaseEntity
    {
        public string Title { get; set; }

        public List<CommunityPost> Posts { get; set; }
        
    }
}