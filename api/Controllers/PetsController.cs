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
using Org.BouncyCastle.Utilities.IO;

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
            
            using var cmd = new MySqlCommand("SELECT animalType, image, sex, petId, dateToShelter, summary, breed, age, size, hypoallergenic, aggressive, neuteredSpayed, shelterId, reserved, adopted, name FROM Pet", con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            List<Pets> myPets = new List<Pets>();

            while (rdr.Read()){
                myPets.Add(new Pets()
                {
                animalType = rdr["animalType"].ToString(),
                image = rdr["image"].ToString(), 
                sex = rdr["sex"].ToString(), 
                petId = rdr["petId"].ToString(), 
                dateToShelter = rdr["dateToShelter"].ToString(), 
                summary = rdr["summary"].ToString(), 
                breed = rdr["breed"].ToString(), 
                age = rdr["age"].ToString(), 
                size = rdr["size"].ToString(), 
                hypoallergenic = rdr.GetBoolean(rdr.GetOrdinal("hypoallergenic")), 
                aggressive = rdr.GetBoolean(rdr.GetOrdinal("aggressive")),
                neuteredSpayed = rdr.GetBoolean(rdr.GetOrdinal("neuteredSpayed")),
                shelterId = rdr["shelterId"].ToString(), 
                reserved = rdr.GetBoolean(rdr.GetOrdinal("reserved")),  
                adopted = rdr.GetBoolean(rdr.GetOrdinal("adopted")), 
                name = rdr["name"].ToString(), 
                });
            }
            con.Close();

            return myPets;
        }

        // GET: api/Pets/5
      

        // POST: api/Pets
        [HttpPost]
        public void Post([FromBody] Pets pet)
            {
                string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
                using MySqlConnection con = new MySqlConnection(cs);
                con.Open();
                
                string query = "INSERT INTO Pet (animalType, image, sex, petId, dateToShelter, summary, breed, age, size, hypoallergenic, aggressive, neuteredSpayed, shelterId, reserved, adopted, name) VALUES (@AnimalType, @Image, @Sex, @PetId, @DateToShelter, @Summary, @Breed, @Age, @Size, @Hypoallergenic, @Aggressive, @NeuteredSpayed, @ShelterId, @Reserved, @Adopted, @Name)";
                
                using MySqlCommand cmd = new MySqlCommand(query, con);
                
                cmd.Parameters.AddWithValue("@AnimalType", pet.animalType);
                cmd.Parameters.AddWithValue("@Image", pet.image);
                cmd.Parameters.AddWithValue("@Sex", pet.sex);
                cmd.Parameters.AddWithValue("@PetId", pet.petId);
                cmd.Parameters.AddWithValue("@DateToShelter", pet.dateToShelter);
                cmd.Parameters.AddWithValue("@Summary", pet.summary);
                cmd.Parameters.AddWithValue("@Breed", pet.breed);
                cmd.Parameters.AddWithValue("@Age", pet.age);
                cmd.Parameters.AddWithValue("@Size", pet.size);
                cmd.Parameters.AddWithValue("@Hypoallergenic", pet.hypoallergenic);
                cmd.Parameters.AddWithValue("@Aggressive", pet.aggressive);
                cmd.Parameters.AddWithValue("@NeuteredSpayed", pet.neuteredSpayed);
                cmd.Parameters.AddWithValue("@ShelterId", pet.shelterId);
                cmd.Parameters.AddWithValue("@Reserved", pet.reserved);
                cmd.Parameters.AddWithValue("@Adopted", pet.adopted);
                cmd.Parameters.AddWithValue("@Name", pet.name);




                
                // Execute the command
                cmd.ExecuteNonQuery();
                con.Close();

            }

        // PUT: api/Pets/5
        [HttpPut("{petId}")]
        public void Put(string petId)
        {
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
            using MySqlConnection con = new MySqlConnection(cs);
            con.Open();

            string query = "UPDATE Pet SET adopted = NOT adopted WHERE petId = @PetId";
            using MySqlCommand cmd = new MySqlCommand(query, con);

            cmd.Parameters.AddWithValue("@PetId", petId);

            cmd.ExecuteNonQuery();
            con.Close();


        }

        // DELETE: api/Pets/5
        [HttpDelete("{petId}")]
        public void Delete(string petId, [FromBody] Pets updatedPet)
        {
            
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
                
            using MySqlConnection con = new MySqlConnection(cs);
            con.Open();

             string query = @"UPDATE Pet 
                         SET animalType = @AnimalType,
                             age = @Age,
                             sex = @Sex,
                             breed = @Breed,
                             dateToShelter = @DateToShelter,
                             hypoallergenic = @Hypoallergenic,
                             aggressive = @Aggressive,
                             neuteredSpayed = @NeuteredSpayed,
                             image = @Image,
                             name = @Name,
                             reserved = @Reserved,
                             shelterId = @ShelterId,
                             size = @Size,
                             summary = @Summary,
                             adopted = @Adopted
                         WHERE petId = @PetId";

                        using (MySqlCommand command = new MySqlCommand(query, con))
                        {
                            command.Parameters.AddWithValue("@AnimalType", updatedPet.animalType);
                            command.Parameters.AddWithValue("@Age", updatedPet.age);
                            command.Parameters.AddWithValue("@Sex", updatedPet.sex);
                            command.Parameters.AddWithValue("@Breed", updatedPet.breed);
                            command.Parameters.AddWithValue("@DateToShelter", updatedPet.dateToShelter);
                            command.Parameters.AddWithValue("@Hypoallergenic", updatedPet.hypoallergenic);
                            command.Parameters.AddWithValue("@Aggressive", updatedPet.aggressive);
                            command.Parameters.AddWithValue("@NeuteredSpayed", updatedPet.neuteredSpayed);
                            command.Parameters.AddWithValue("@Image", updatedPet.image);
                            command.Parameters.AddWithValue("@Name", updatedPet.name);
                            command.Parameters.AddWithValue("@Reserved", updatedPet.reserved);
                            command.Parameters.AddWithValue("@ShelterId", updatedPet.shelterId);
                            command.Parameters.AddWithValue("@Size", updatedPet.size);
                            command.Parameters.AddWithValue("@Summary", updatedPet.summary);
                            command.Parameters.AddWithValue("@Adopted", updatedPet.adopted);
                            command.Parameters.AddWithValue("@PetId", petId);

                            command.ExecuteNonQuery();
                        }
            con.Close();

        }
    }
}
