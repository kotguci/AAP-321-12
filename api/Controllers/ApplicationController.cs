using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.DataAccess;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using api.Controllers.ApiFunctions;



namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        // GET: api/Application
        [HttpGet]


        public List<Application> Get()
        {
            Database c = new Database();
            string cs = c.getConnectionString();

            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT firstName, lastName, address, city, state, zipCode, phone, email, house, applicationId, rent, pastPets, userId, shelterId, approved, petId FROM Application", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<Application> myApplications = new List<Application>();

            while (rdr.Read()){
                myApplications.Add(new Application()
                {
                    firstName = rdr["firstName"].ToString(),
                    lastName = rdr["lastName"].ToString(),
                    address = rdr["address"].ToString(),
                    city = rdr["city"].ToString(),
                    state = rdr["state"].ToString(),
                    zipCode = rdr["zipCode"].ToString(),
                    phone = rdr["phone"].ToString(),
                    email = rdr["email"].ToString(),
                    house = Convert.ToBoolean(rdr["house"]),
                    applicationId = rdr["applicationId"].ToString(),
                    rent = Convert.ToBoolean(rdr["rent"]),
                    pastPets = rdr["pastPets"].ToString(),
                    userId = rdr["userId"].ToString(),
                    shelterId = rdr["shelterId"].ToString(),
                    approved = Convert.ToInt32(rdr["approved"]),
                    petId = rdr["petId"].ToString()

                
                });
            }
            con.Close();

            return myApplications;
        }

        // GET: api/Application/5
        

        // POST: api/Application
        [HttpPost]
        public void Post([FromBody] Application application)
            {
                Database c = new Database();
                string cs = c.getConnectionString();

                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO Application (firstName, lastName, address, city, state, zipCode, phone, email, house, applicationId, rent, pastPets, userId, shelterId, approved, petId) VALUES (@FirstName,@LastName, @Address, @City, @State, @ZipCode, @Phone, @Email, @House, @ApplicationId, @Rent, @PastPets, @UserId, @ShelterId, @Approved, @PetId)";
                
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
                cmd.Parameters.AddWithValue("@Approved", application.approved);
                cmd.Parameters.AddWithValue("@PetId", application.petId);


                
                // Execute the command
                cmd.ExecuteNonQuery();
                con.Close();

            }
        // PUT: api/Application/5
        [HttpPut("{applicationId}")]
        public void Put(string applicationId, [FromBody] int approved)
        {
            Database c = new Database();
            string cs = c.getConnectionString(); 
                           
            using MySqlConnection con = new MySqlConnection(cs);
            con.Open();

            string query = "UPDATE Application SET approved = @Approved WHERE applicationId = @ApplicationId";
            using MySqlCommand cmd = new MySqlCommand(query, con);

            cmd.Parameters.AddWithValue("@ApplicationId", applicationId);
            cmd.Parameters.AddWithValue("@Approved", approved);

            cmd.ExecuteNonQuery();
            con.Close();


        }

        // DELETE: api/Application/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
