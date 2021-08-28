using System;
using System.Collections.Generic;
using Core.Entities;

namespace API.DTOs
{
    public class ProductToReturnDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public decimal Price { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }

        public DateTime EventDate { get; set; }

        public bool AllInclusive { get; set; }
        public bool DogFriendly { get; set; }

        public List<EventImage> Images { get; set; }

        public List<Booking> Bookings { get; set; }
    }
}