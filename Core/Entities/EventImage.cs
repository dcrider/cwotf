namespace Core.Entities
{
    public class EventImage : BaseEntity
    {

        public int EventId { get; set; }
        public string Url { get; set; }

        public Product Event { get; set; }
    
    }
}