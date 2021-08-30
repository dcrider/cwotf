using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class CommunityThread : BaseEntity
    {
        public string Title { get; set; }

        public int CommunityCategoryId { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime LastUpdated { get; set; }


        public List<CommunityPost> Posts { get; set; }

        public CommunityCategory Category { get; set; }
        
    }
}