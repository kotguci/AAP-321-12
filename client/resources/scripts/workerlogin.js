let subjectUrl2 = "http://localhost:5161/api/ManagerAccount"
let myMainManagers = []
function handleOnLoad() {
    headingBar();
    signInDisplay();
    getMainManagers();
}

function signInDisplay() {
    let html = `
    <div class="wrapper">
        
            <h1>Employee Login</h1>
            <div class="input-box">
                <input type="text"id="username" placeholder="Username" required>
                <box-icon type='solid' name='user'></box-icon>
            </div>
            <div class="input-box">
                <input type="password" id="password" placeholder="Password" required>
                <box-icon name='lock-alt' type='solid'></box-icon>
            </div>
           

            <button class="btn btn-danger"onclick="handleNewPage()">Login</button>
        
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}


function handleNewPage() {
    let tempId = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    myMainManagers.forEach(function(manager) {
        if (tempId.username === manager.managerUsername) {
            if (tempId.password === manager.managerPassword) {
                // Check for specific username and password combinations
                if (tempId.username === 'sdubberly' && tempId.password === 'Rolltide') {
                    // Redirect to a different page for the specific user
                    localStorage.setItem('managerId', JSON.stringify(manager.managerAccountId));
                    window.location.href = 'mainManager.html';

                } else {
                    // Redirect to home page for other users
                    localStorage.setItem('managerId', JSON.stringify(manager.managerAccountId));
                    window.location.href = 'home.html';
                }
            }
        }
    });
}


async function getMainManagers(){
    let response = await fetch(subjectUrl2);
    myMainManagers = await response.json();
  }


function headingBar(){
    let html =`
    <div id="button-header">
        <div id="top-buttons">
            <button class="btn btn-light" onclick="window.location.href='browse.html'">Browse Centers</button>
            <button class="btn btn-light" onclick="window.location.href='adopt.html'">Adopt A Pet</button>
            <button class="btn btn-light" onclick="window.location.href='contact.html'">About Us</button>
        </div>
        <div id="sign-in">
            <button class="btn btn-dark" onclick="window.location.href='home.html'"">Home</button>
        </div>
    </div>`
    document.getElementById('app2').innerHTML = html;
}

