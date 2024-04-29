using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using api.Controllers.ApiFunctions;


namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SheltersController : ControllerBase
    {
        // GET: api/Shelters
    
        [HttpGet]


        public List<Shelter> Get()
        {
            Database c = new Database();
            string cs = c.getConnectionString();            

            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT shelterId, shelterCity, shelterState, shelterAddress, managerAccountId, name FROM Shelter", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<Shelter> myShelters = new List<Shelter>();

            while (rdr.Read()){
                myShelters.Add(new Shelter()
                {
                shelterId = rdr["shelterId"].ToString(),
                shelterCity = rdr["shelterCity"].ToString(), 
                shelterState = rdr["shelterState"].ToString(), 
                shelterAddress = rdr["shelterAddress"].ToString(), 
                managerAccountId = rdr["managerAccountId"].ToString(), 
                name = rdr["name"].ToString(), 
                
                });
            }
            con.Close();
            return myShelters;
        }


    
        // GET: api/Shelters/5
        
        // POST: api/Shelters
        [HttpPost]
        public void Post([FromBody] Shelter shelter)
            {
                Database c = new Database();
                string cs = c.getConnectionString();

                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO Shelter (shelterId, shelterCity, shelterState, shelterAddress, managerAccountId, name) VALUES (@ShelterId, @ShelterCity, @ShelterState, @ShelterAddress, @ManagerAccountId, @Name)";
                
                using MySqlCommand cmd = new MySqlCommand(query, con);
                
                cmd.Parameters.AddWithValue("@ShelterId", shelter.shelterId);
                cmd.Parameters.AddWithValue("@ShelterCity", shelter.shelterCity);
                cmd.Parameters.AddWithValue("@ShelterState", shelter.shelterState);
                cmd.Parameters.AddWithValue("@ShelterAddress", shelter.shelterAddress);
                cmd.Parameters.AddWithValue("@ManagerAccountId", shelter.managerAccountId);
                cmd.Parameters.AddWithValue("@Name", shelter.name);
                
                // Execute the command
                cmd.ExecuteNonQuery();

                con.Close();
            }

        // PUT: api/Shelters/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Shelters/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
