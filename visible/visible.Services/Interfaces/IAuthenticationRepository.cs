using visible.Services.Models;

namespace visible.Services.Interfaces
{
    /// <summary>
    /// This class serves as the storage and access provider for user authentication.
    /// </summary>
    public interface IAuthenticationRepository
    {
        Task<bool> SignInAsync(SignInRequest signInRequest);
    }
}
