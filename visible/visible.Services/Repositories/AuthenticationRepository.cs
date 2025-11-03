using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories
{
    /// <summary>
    /// The implementation of IAuthenticationRepository interface
    /// </summary>
    /// <param name="builder"> Connection to the Postgresql database </param>
    public class AuthenticationRepository(IQueryBuilder builder) : IAuthenticationRepository
    {
        /// <summary>
        /// Attempts to authenticate a user's credentials.
        /// </summary>
        /// <param name="signInRequest"> The user's username and password information received from form submission. </param>
        /// <returns> If the provided username/password combination exists in the Users table. </returns>
        public async Task<bool> SignInAsync(SignInRequest signInRequest)
        {
            string loginQuery =
                "SELECT COUNT(*) AS c FROM users WHERE email = @username AND password = @password;";
            var query = builder.CreateQuery(loginQuery);
            query.AddParameter("@username", signInRequest.Username);
            query.AddParameter("@password", signInRequest.Password);
            int count = 0;
            await foreach (var row in query.ExecuteAsync())
            {
                count = Convert.ToInt32(row.GetColumn("c"));
            }

            return count.Equals(1);
        }
    }
}
