using System.Collections.Generic;

namespace Core.Entities
{
    public class Waiver : BaseEntity
    {
        public string Name { get; set; }
        public string FileUrl { get; set; }

        public List<EventWaiver> EventWaivers { get; set; }

    }
}