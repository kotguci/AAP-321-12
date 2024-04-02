using System.Collections.Generic;
using MySql.Data.MySqlClient;
using api.Models;

namespace api.Services
{
    public class GetPet
    {

        public List<Pets> Get()
        {
            string cs = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
            MySqlConnection con = new MySqlConnection(cs);
            con.Open();
            
            using var cmd = new MySqlCommand("SELECT animalType, image, sex, petId, dateToShelter, summary, breed, age, size, hypoallergenic, aggressive, neuteredSpayed, shelterId, reserved, adopted FROM Pet", con);
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
                });
            }
            return myPets;
        }


    } 
}
