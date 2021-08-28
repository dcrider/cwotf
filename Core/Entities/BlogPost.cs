using System;

namespace Core.Entities
{
    public class BlogPost : BaseEntity
    {
        public string Title { get; set; }
        public int TopicId { get; set; }
        public string UserId { get; set; }
        public string Content { get; set; }
        public DateTime DatePosted { get; set; }
        public DateTime LastModified { get; set; }

        public BlogTopic BlogTopic { get; set; }
    }
}