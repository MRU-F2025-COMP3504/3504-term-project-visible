using Npgsql;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories
{
    /// <summary>
    /// The implementation of IAuthenticationRepository interface
    /// </summary>
    /// <param name="connection"> Connection to the Postgresql database </param>
    public class AuthenticationRepository(NpgsqlConnection connection) : IAuthenticationRepository
    {
        /// <summary>
        /// Attempts to authenticate a user's credentials.
        /// </summary>
        /// <param name="signInRequest"> The user's username and password information received from form submission. </param>
        /// <returns> If the provided username/password combination exists in the Users table. </returns>
        public async Task<bool> SignInAsync(SignInRequest signInRequest)
        {
            string loginQuery = "SELECT COUNT(*) AS c FROM users WHERE email = @username AND password = @password;";
            using var cmd = connection.CreateCommand();
            cmd.CommandText = loginQuery;
            AddParameters(cmd, signInRequest);
            await connection.OpenAsync();
            await cmd.PrepareAsync();
            using var reader = await cmd.ExecuteReaderAsync();
            int count = 0;
            if (await reader.ReadAsync())
            {
                count = Convert.ToInt32(reader["c"]);
            }
            await connection.CloseAsync();

            return count.Equals(1);
        }

        private static void AddParameters(NpgsqlCommand command, SignInRequest signInRequest)
        {
            var parameters = command.Parameters;
            parameters.AddWithValue("@username", signInRequest.Username);
            parameters.AddWithValue("@password", signInRequest.Password);
        }
   
    }
}
