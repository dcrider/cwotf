namespace Core.Entities
{
    public class Booking : BaseEntity
    {
        public int EventId { get; set; }
        public int UserId { get; set; }

        public Product Event { get; set; }
        
    }
}