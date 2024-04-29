namespace api.Controllers.ApiFunctions
{
    public class Database
    {
        private string connectionString = "server=dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;user=exbb0kz3slfdopzr;password=faj7g9vux8h7bsbw;database=benwg2khb6mxhdhd;port=3306;password=faj7g9vux8h7bsbw";
    
        public string getConnectionString(){
            return connectionString;
        }
    }

}