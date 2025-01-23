// Controller for handling model requests
[ApiController]
[Route("api/[controller]")]
public class ModelsController : ControllerBase
{
    private readonly IBlobStorageService _blobStorage;
    private readonly FurnitureDbContext _context;

    // GET api/models - Get list of available models
    [HttpGet]
    public async Task<ActionResult<List<FurnitureModel>>> GetModels()
    {
        return await _context.FurnitureModels.ToListAsync();
    }

    // GET api/models/{id} - Get specific model file
    [HttpGet("{id}")]
    public async Task<ActionResult> GetModel(int id)
    {
        var model = await _context.FurnitureModels.FindAsync(id);
        if (model == null) return NotFound();

        var stream = await _blobStorage.GetAsync("furniture-models", model.ModelPath);
        return File(stream, "model/gltf-binary"); // for .glb files
    }
}