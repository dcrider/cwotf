using System;

namespace Core.Entities
{
    public class CommunityPost : BaseEntity
    {
        public string ThreadId { get; set; }
        public string Title { get; set; }
        public string UserId { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; }

        public CommunityThread Thread { get; set; }
    }
}