using visible.Services.Data;
using Npgsql;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories
//<summary>
//The businessRepository is responsible for handling all database operations related
//to business profiles. This includes:
//- Getting all business profiles
//- Getting one business by email or ID
// - Creating business profiles linked to users
//</summary>
{
    public class BusinessRepository(IQueryBuilder builder) : IBusinessRepository
    {
        public async Task<IEnumerable<Business>> GetAllBusinesses()
        {
            var query = builder.CreateQuery(@"
                SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
                FROM businesses;
            ");

            var businesses = new List<Business>();

            await foreach (var row in query.ExecuteAsync())
            {
                businesses.Add(new Business
                {
                    BusinessId = row.Get<long>("business_id"),
                    UserId = row.Get<long>("user_id"),
                    BusinessName = row.Get<string>("business_name"),
                    Location = row.Get<string>("location"),
                    Industry = row.Get<string>("industry"),
                    DisplayImage = row.Get<string?>("display_image"),
                    CreatedAt = row.Get<DateTime>("created_at"),
                    UpdatedAt = row.Get<DateTime>("updated_at")
                });
            }

            return businesses;
        }

        //<summary>
        //SQL query to select all business rows deom the businesses table.
        //Mapping the data to the business model and adding it to a list
        //</summary>
        public async Task<Business?> GetBusinessByName(string businessName)
        {
            var query = builder.CreateQuery(@"
                SELECT business_id, user_id, business_name, location, industry, display_image, created_at, updated_at
                FROM businesses
                WHERE business_name = @business_name;
            ");

            query.AddParameter("@business_name", businessName);

            await foreach (var row in query.ExecuteAsync())
            {
                return new Business
                {
                    BusinessId = row.Get<long>("business_id"),
                    UserId = row.Get<long>("user_id"),
                    BusinessName = row.Get<string>("business_name"),
                    Location = row.Get<string>("location"),
                    Industry = row.Get<string>("industry"),
                    DisplayImage = row.Get<string?>("display_image"),
                    CreatedAt = row.Get<DateTime>("created_at"),
                    UpdatedAt = row.Get<DateTime>("updated_at")
                };
            }

            return null;
        }

        //<summary>
        //Takes a business object and inserts it into the business table
        //Returns business ID
        //</summary>

        public async Task<long> CreateBusinessProfile(Business business)
        {
            var query = builder.CreateQuery(@"
                INSERT INTO businesses (user_id, business_name, location, industry, display_image)
                VALUES (@user_id, @business_name, @location, @industry, @display_image)
                RETURNING business_id;
            ");

            query.AddParameter("@user_id", business.UserId);
            query.AddParameter("@business_name", business.BusinessName);
            query.AddParameter("@location", business.Location);
            query.AddParameter("@industry", business.Industry);
            query.AddParameter("@display_image", business.DisplayImage);

            await foreach (var row in query.ExecuteAsync())
            {
                return row.Get<long>("business_id");
            }

            return -1;
        }
    }
}
