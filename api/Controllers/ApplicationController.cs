using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using System.Collections.Generic;
using MySql.Data.MySqlClient;


namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        // GET: api/Application
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Application/5
        

        // POST: api/Application
        [HttpPost]
        public void Post([FromBody] Application application)
            {
                string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO Application (firstName, lastName, address, city, state, zipCode, phone, email, house, applicationId, rent, pastPets, userId, shelterId) VALUES (@FirstName,@LastName, @Address, @City, @State, @ZipCode, @Phone, @Email, @House, @ApplicationId, @Rent, @PastPets, @UserId, @ShelterId)";
                
                using MySqlCommand cmd = new MySqlCommand(query, con);
                
                // Add parameters to the command
                cmd.Parameters.AddWithValue("@FirstName", application.firstName);
                cmd.Parameters.AddWithValue("@LastName", application.lastName);
                cmd.Parameters.AddWithValue("@Address", application.address);
                cmd.Parameters.AddWithValue("@City", application.city);
                cmd.Parameters.AddWithValue("@State", application.state);
                cmd.Parameters.AddWithValue("@ZipCode", application.zipCode);
                cmd.Parameters.AddWithValue("@Phone", application.phone);
                cmd.Parameters.AddWithValue("@Email", application.email);
                cmd.Parameters.AddWithValue("@House", application.house);
                cmd.Parameters.AddWithValue("@ApplicationId", application.applicationId);
                cmd.Parameters.AddWithValue("@Rent", application.rent);
                cmd.Parameters.AddWithValue("@PastPets", application.pastPets);
                cmd.Parameters.AddWithValue("@UserId", application.userId);
                cmd.Parameters.AddWithValue("@ShelterId", application.shelterId);

                
                // Execute the command
                cmd.ExecuteNonQuery();
            }
        // PUT: api/Application/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Application/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}