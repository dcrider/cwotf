using System;
using System.Collections.Generic;

namespace Core.Entities
{
    public class CommunityPost : BaseEntity
    {
        public string CommunityThreadId { get; set; }
        public string Title { get; set; }
        public string UserId { get; set; }
        public string Content { get; set; }
        public int UpVotes { get; set; }
        public int DownVotes { get; set; }
        public DateTime DatePosted { get; set; }

        public CommunityThread Thread { get; set; }

        public List<CommunityComment> Comments { get; set; }
    }
}