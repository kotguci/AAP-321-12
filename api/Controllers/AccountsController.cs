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
    public class AccountsController : ControllerBase
    {
        // GET: api/Accounts
        [HttpGet]
        public List<Signups> Get()
        {
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT firstName, lastName, email, userPassword, userId FROM UserAccount", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<Signups> mySignups = new List<Signups>();

            while (rdr.Read()){
                mySignups.Add(new Signups()
                {
                firstName = rdr["firstName"].ToString(),
                lastName = rdr["lastName"].ToString(),
                email = rdr["email"].ToString(),
                password = rdr["userPassword"].ToString(),
                id= rdr["userId"].ToString(),

                
                });
            }
            con.Close();
            
            return mySignups;
        }

        // GET: api/Accounts/5
        [HttpGet("{id}", Name = "Get")]
        

        // POST: api/Accounts
        [HttpPost]
        public void Post([FromBody] Signups signup)
            {
                string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO UserAccount (userId, firstName, lastName, email, userPassword) VALUES (@Id, @FirstName, @LastName, @Email, @Password)";
                
                using MySqlCommand cmd = new MySqlCommand(query, con);
                
                // Add parameters to the command
                cmd.Parameters.AddWithValue("@Id", signup.id);
                cmd.Parameters.AddWithValue("@FirstName", signup.firstName);
                cmd.Parameters.AddWithValue("@LastName", signup.lastName);
                cmd.Parameters.AddWithValue("@Email", signup.email);
                cmd.Parameters.AddWithValue("@Password", signup.password);
                
                // Execute the command
                cmd.ExecuteNonQuery();
                con.Close();

            }

        // PUT: api/Accounts/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Accounts/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
