// Create a 3DModels folder in your project root
// Copy your GLB files there
// Call the /api/ModelSeed/seed endpoint

// Ensure Azure storage connection is configured in appsettings.json.


using LilWud.API.Data;
using LilWud.API.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ModelSeedController : ControllerBase
{
    private readonly LilWudDbContext _context;
    private readonly IBlobStorageService _blobStorage;
    private readonly IWebHostEnvironment _environment;

    public ModelSeedController(
        LilWudDbContext context, 
        IBlobStorageService blobStorage,
        IWebHostEnvironment environment)
    {
        _context = context;
        _blobStorage = blobStorage;
        _environment = environment;
    }

    [HttpPost("seed")]
    public async Task<IActionResult> SeedModels()
    {
        var modelsPath = Path.Combine(_environment.ContentRootPath, "3DModels");
        var modelFiles = Directory.GetFiles(modelsPath, "*.glb");

        foreach (var modelPath in modelFiles)
        {
            var fileName = Path.GetFileName(modelPath);
            
            // Upload to blob storage
            using var fileStream = System.IO.File.OpenRead(modelPath);
            var blobPath = await _blobStorage.UploadAsync(
                fileStream, 
                "furniture-models", 
                fileName
            );

            // Create model entry
            var furnitureModel = new FurnitureModel
            {
                Name = Path.GetFileNameWithoutExtension(fileName),
                ModelPath = fileName,
                Thumbnail = "", // You could generate thumbnails later
                Price = 99.99m // Default price
            };

            _context.FurnitureModels.Add(furnitureModel);
        }

        await _context.SaveChangesAsync();
        return Ok($"Seeded {modelFiles.Length} models");
    }
}