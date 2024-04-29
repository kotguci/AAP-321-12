namespace api.DataAccess
{
    public class db
    {
        public string host {get;set;}
        public string database {get;set;}
        public string username {get;set;}
        public string port {get;set;}
        public string password {get;set;}
        public string cs {get;set;}
        public db(){
            host = "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            database = "benwg2khb6mxhdhd";
            username = "exbb0kz3slfdopzr";
            port = "3306";
            password = "faj7g9vux8h7bsbw";
            cs = $"server={host};user={username};database={database};port={port};password={password}";
        }
    }
}
