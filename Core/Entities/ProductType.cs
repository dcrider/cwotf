namespace Core.Entities
{
    public class ProductType : BaseEntity
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public int Order { get; set; }
    }
}