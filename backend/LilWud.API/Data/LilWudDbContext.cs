using Microsoft.EntityFrameworkCore;
using LilWud.API.Models;


namespace LilWud.API.Data
{
    public class LilWudDbContext : DbContext
    {
        public LilWudDbContext(DbContextOptions<LilWudDbContext> options) 
            : base(options)
        {
        }

        public DbSet<FurnitureModel> FurnitureModels { get; set; }

    // Configure table mapping
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FurnitureModel>(entity =>
        {
            entity.ToTable("furniture_models");
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.ModelPath).HasMaxLength(512);
            entity.Property(e => e.Thumbnail).HasMaxLength(512);
        });
    }
    }
}