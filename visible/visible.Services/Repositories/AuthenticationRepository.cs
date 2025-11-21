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
        public async Task<int> SignInAsync(SignInRequest signInRequest)
        {
            string loginQuery =
                "SELECT user_id FROM users WHERE email = @username AND password = @password;";
            var query = builder.CreateQuery(loginQuery);
            query.AddParameter("@username", signInRequest.Username);
            query.AddParameter("@password", signInRequest.Password);
            int id = 0;
            await foreach (var row in query.ExecuteAsync())
            {
                id = Convert.ToInt32(row.GetColumn("user_id"));
            }

            return id;
        }

        /// <summary>
        /// Looks for a user with the provided email
        /// </summary>
        /// <param name="signupRequest"> The user's username and password information received from the sign-up form. </param>
        /// <returns> If the email matches a record in the User table. </returns>
        public async Task<bool> SearchForUserAsync(SignupRequest signupRequest)
        {
            string searchQuery = "SELECT COUNT(*) as c from users where email = @username;";
            var query = builder.CreateQuery(searchQuery);
            query.AddParameter("@username", signupRequest.Username);
            int count = 0;

            await foreach (var row in query.ExecuteAsync())
            {
                count = Convert.ToInt32(row.GetColumn("c"));
            }

            return count == 1;
        }

        /// <summary>
        /// Creates a new user when provided with a unique email.
        /// </summary>
        /// <param name="signupRequest"> The user's username and password information received from form submission. </param>
        /// <returns> If the user was successfully created. </returns>
        public async Task<bool> CreateNewUserAsync(SignupRequest signupRequest)
        {
            string createStatement =
                "INSERT INTO users (email, password, first_name, last_name)"
                + "VALUES (@username, @password, @firstName, @lastName)";

            var query = builder.CreateQuery(createStatement);
            query.AddParameter("@username", signupRequest.Username);
            query.AddParameter("@password", signupRequest.Password);
            query.AddParameter("@firstName", signupRequest.FirstName);
            query.AddParameter("@lastName", signupRequest.LastName);

            int rowsAffected = await query.ExecuteNonQueryAsync();

            return rowsAffected == 1;
        }
    }
}
