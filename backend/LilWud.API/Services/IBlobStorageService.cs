public interface IBlobStorageService
{
    Task<Stream> GetAsync(string containerName, string blobName);
    Task<string> UploadAsync(Stream dataStream, string containerName, string blobName);
}