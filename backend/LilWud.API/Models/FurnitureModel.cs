using Microsoft.EntityFrameworkCore;

namespace LilWud.API.Models
{
    public class FurnitureModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ModelPath { get; set; }
        public string Thumbnail { get; set; }
        public decimal Price { get; set; }
    }
}