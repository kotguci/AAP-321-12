using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
using api.Models;
using MySql.Data.MySqlClient.Authentication;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        // GET: api/Pets
        [HttpGet]
        public List<Pets> Get()
        {
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT test FROM test", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<Pets> myPets = new List<Pets>();

            while (rdr.Read()){
                myPets.Add(new Pets()
                {
                name= rdr["test"].ToString(), 
                });
            }
            return myPets;
        }

        // GET: api/Pets/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pets
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Pets/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Pets/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
