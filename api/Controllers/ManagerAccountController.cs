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
    public class ManagerAccountController : ControllerBase
    {
        // GET: api/ManagerAccount
        [HttpGet]
        public List<ManagerAccount> Get()
        {
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT managerPassword, managerUsername, managerName, managerAccountId, loggedIn FROM ManagerAccount", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<ManagerAccount> myManagerAccounts = new List<ManagerAccount>();

            while (rdr.Read()){
                myManagerAccounts.Add(new ManagerAccount()
                {
                managerPassword = rdr["managerPassword"].ToString(),
                managerUsername = rdr["managerUsername"].ToString(),
                managerName = rdr["managerName"].ToString(),
                managerAccountId = rdr["managerAccountId"].ToString(),
                loggedIn = rdr.GetBoolean(rdr.GetOrdinal("loggedIn")), 

                
                });
            }
                con.Close();

            return myManagerAccounts;
        }

        // GET: api/ManagerAccount/5
       

        // POST: api/ManagerAccount
        [HttpPost]
        public void Post([FromBody] ManagerAccount managerAccounts)
            {
                string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO ManagerAccount (managerPassword, managerUsername, managerName, managerAccountId, loggedIn) VALUES (@ManagerPassword, @ManagerUsername, @ManagerName, @ManagerAccountId, @LoggedIn)";
                
                using MySqlCommand cmd = new MySqlCommand(query, con);
                
                // Add parameters to the command
                cmd.Parameters.AddWithValue("@ManagerPassword", managerAccounts.managerPassword);
                cmd.Parameters.AddWithValue("@ManagerUsername", managerAccounts.managerUsername);
                cmd.Parameters.AddWithValue("@ManagerName", managerAccounts.managerName);
                cmd.Parameters.AddWithValue("@ManagerAccountId", managerAccounts.managerAccountId);
                cmd.Parameters.AddWithValue("@LoggedIn", managerAccounts.loggedIn);

                // Execute the command
                cmd.ExecuteNonQuery();
                con.Close();

            }

        // PUT: api/ManagerAccount/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ManagerAccount/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
