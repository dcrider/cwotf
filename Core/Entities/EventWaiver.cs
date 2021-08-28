using System.ComponentModel.DataAnnotations;

namespace Core.Entities
{
    public class EventWaiver
    {
        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int WaiverId { get; set; }
        public Product Event { get; set; }
        public Waiver Waiver { get; set; }
    }
}