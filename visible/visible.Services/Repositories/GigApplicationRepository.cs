using visible.Services.Data.Interfaces;
using visible.Services.Interfaces;
using visible.Services.Models;

namespace visible.Services.Repositories;

public class GigApplicationRepository(IQueryBuilder builder) : IGigApplicationRepository
{
    public async Task<bool> CreateNewGigListingApplication(GigApplication application)
    {
        string createApplication =
            "INSERT INTO applications (gig_id, applicant_id, application_text, status) VALUES(@gig_id, @applicant_id, @application_text, @status)";

        var query = builder.CreateQuery(createApplication);
        query.AddParameter("@gig_id", application.GigId);
        query.AddParameter("@applicant_id", application.ApplicantId);
        query.AddParameter("@application_text", application.ApplicationText);
        query.AddParameter("@status", application.Status);
        try
        {
            int rowsAffected = await query.ExecuteNonQueryAsync();
            return rowsAffected == 1;
        }
        catch (Npgsql.PostgresException ex)
        {
            return false;
        }
    }
}
