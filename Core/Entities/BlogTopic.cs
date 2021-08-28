using System.Collections.Generic;

namespace Core.Entities
{
    public class BlogTopic : BaseEntity
    {
        public string Name { get; set; }

        public List<BlogPost> BlogPosts { get; set; }
    }
}