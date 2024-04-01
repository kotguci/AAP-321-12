let subjectUrl = 'http://localhost:5161/api/accounts'


function handleOnLoad(){
    createAccount();
}

function createAccount(){
    let html= `
    <form id="signup-form" action="home.html" style="border:1px solid #ccc">
    <div class="container">
      <h1>Adopt a Pet Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
        
      <label for="firstName"><b>First Name</b></label>
      <input type="text" id="firstName" placeholder="Enter First Name" name="fName" required>
      
      <label for="lastName"><b>Last Name</b></label>
      <input type="text" id="lastName" placeholder="Enter Last Name" name="lName" required>
      
      <label for="email"><b>Email</b></label>
      <input type="text" id="email" placeholder="Enter Email" name="email" required>
      
      <label for="password"><b>Password</b></label>
      <input type="password" id="password" placeholder="Enter Password" name="psw" required>
      
      <label for="passwordRepeat"><b>Repeat Password</b></label>
      <input type="password" id="passwordRepeat" placeholder="Repeat Password" name="psw-repeat" required>
      
    
      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>
  
      <p>By creating an account you agree to our <a href="terms.html" target="_blank" style="color: black">Terms & Privacy</a>.</p>

  
      <div class="clearfix">
        <button type="button" class="btn btn-dark" onclick="cancelSignup()">Cancel</button>
        <button type="submit" class="btn btn-danger" onclick="handleNewSignup()">Sign Up</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('app').innerHTML = html;
}

function cancelSignup() {
    window.location.href = "signin.html";
}

async function handleNewSignup(){
  alert("test")
  let signup = {
    id: crypto.randomUUID(),
    firstName : document.getElementById("firstName").value,
    lastName : document.getElementById("lastName").value,
    email : document.getElementById("email").value,
    password : document.getElementById("password").value,
      
  }
  await saveSignup(signup)
  //createTable()
  }

async function saveSignup(signup){
  await fetch(subjectUrl, {
          method: "POST",
          body: JSON.stringify(signup),
          headers: {"Content-type": "application/json; charset=UTF-8"}
  })

}
