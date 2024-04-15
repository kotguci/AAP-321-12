namespace api.Models
{
    public class ManagerAccount
    {
        public string managerPassword{get; set;}

        public string managerUsername{get; set;}

        public string managerName{get; set;}
        public string managerAccountId{get; set;}
        public bool loggedIn {get; set;}

        public string shelterId{get;set;}
    }
}