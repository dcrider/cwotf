using System;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }

        //public DateTime EventDate { get; set; }


           //public ProductBrand ProductBrand { get; set; }
        //public int ProductBrandId { get; set; }
        // remove brand data, we'll only need type for event types
    }
}