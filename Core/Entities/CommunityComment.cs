namespace Core.Entities
{
    public class CommunityComment : BaseEntity
    {   
        public int CommunityPostId { get; set; }
        public string CommentText { get; set; }

        public CommunityPost Post { get; set; }

    }
}