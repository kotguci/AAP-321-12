function handleOnLoad(){
    createAccount();
}
//W3 schools
function createAccount(){
    let html= `
    <form id="signup-form" action="action_page.php" style="border:1px solid #ccc">
    <div class="container">
      <h1>Adopt a Pet Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
        
        <label for="fName"><b>First Name</b></label>
        <input type="text" placeholder="Enter First Name" name="fName" required
        
        <label for="lName"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last Name" name="lName" required>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
    
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    
      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>
  
      <p>By creating an account you agree to our <a href="terms.html" target="_blank" style="color: black">Terms & Privacy</a>.</p>

  
      <div class="clearfix">
        <button type="button" class="btn btn-dark cancel-btn" onclick="cancelSignup()">Cancel</button>
        <button type="submit" class="btn btn-danger signup-btn">Sign Up</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('app').innerHTML = html;
}

function cancelSignup() {
    window.location.href = "signin.html";
}
