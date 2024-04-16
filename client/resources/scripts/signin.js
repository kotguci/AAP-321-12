let subjectUrl2 = "http://localhost:5161/api/Accounts"
let myAccounts = [] 

function handleOnLoad() {
    signInDisplay();
    getMainManagers();

}

function signInDisplay() {
    let html = `
    <div class="wrapper">
       
            <h1>Adopt a Pet Login</h1>
            <div class="input-box">
                <input type="text" id="username" placeholder="Email" required>
                <box-icon type='solid' name='user'></box-icon>
            </div>
            <div class="input-box">
                <input type="password" id="password"placeholder="Password" required>
                <box-icon name='lock-alt' type='solid'></box-icon>
            </div>
         

            <button type="submit" class="btn btn-danger"onclick="handleNewPage()">Login</button>

            <div class="register-link">
             <p>Don't Have An Account? <a href="signup.html">Register</a></p>
            </div>
      
        <div class="worker-signin">
                <p>Worker Login: <a href="workerlogin.html">Click Here</a></p>
        </div>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}

function handleNewPage()
  {
       
        let tempId = {
          
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }
        console.log(tempId)
        
        myAccounts.forEach(function(accounts){
            if(tempId.username === accounts.email){
                if(tempId.password === accounts.password){
                    localStorage.setItem('accountId', JSON.stringify(accounts.id))
                    window.location.href = 'home.html'
                }
            }
        })
}

async function getMainManagers(){
    let response = await fetch(subjectUrl2);
    myAccounts = await response.json();
    console.log(myAccounts);
  }
