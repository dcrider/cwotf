using System.Collections.Generic;

namespace Core.Entities
{
    public class CommunityCategory : BaseEntity
    {
        public string Name { get; set; }

        public List<CommunityThread> Threads { get; set; }
    }
}