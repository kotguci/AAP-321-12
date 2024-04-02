namespace api.Controllers.ApiFunctions;
using MySql.Data.MySqlClient;
using api.Models;


    public class CreatePet
    {
        public void Post(Signups signup)
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
            }
    }
