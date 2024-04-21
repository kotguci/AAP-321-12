let petUrl = "http://localhost:5161/api/Pets"
let shelterUrl = "http://localhost:5161/api/Shelters"
let applicationUrl = "http://localhost:5161/api/Application"
let userAccountUrl = "http://localhost:5161/api/Accounts"
let myApplications = []
let myShelters = []
let myPets = []
let myAccounts = []


async function handleOnLoad(){
  createAccount()
  handleApplications();
  GetTheRestEverything();
  createDashboard()

}

<<<<<<< HEAD











async function GetTheRestEverything(){
    await getPets()
    await getAccounts()
}



async function getPets(){
    let response = await fetch(petUrl);
    myPets = await response.json();
    console.log(myPets);
  }

  async function getAccounts(){
    let response = await fetch(userAccountUrl);
    myAccounts = await response.json();
    console.log(myAccounts);
  }



async function createAccount(){
    let html= `
    <form   style="border:1px solid #ccc">
    <div class="container">
      <p>Please fill in this form to add an animal.</p>
      <hr>
        
      <label for="animalType"><b>Animal Type</b></label>
            <select id="animalType" name="animalType" required>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            </select>
=======
function createAccount(){
  let html= `
  <form   style="border:1px solid #ccc">
  <div class="container">
    <p>Please fill in this form to add an animal.</p>
    <hr>
      
    <label for="animalType"><b>Animal Type</b></label><br>
    <select id="animalType" name="animalType" required>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
    </select><br><br>
>>>>>>> refs/remotes/origin/main

    <label for="image"><b>Image (Paste Image URL)</b></label><br>
    <input type="text" id="image" placeholder="Paste Image URL" name="image" required><br><br>

    <label for="name"><b>Name</b></label><br>
    <input type="text" id="name" placeholder="Enter Name" name="name" required><br><br>

    <label for="sex"><b>Sex</b></label><br>
    <select id="sex" name="sex">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select><br><br>

    <label for="dateToShelter"><b>Date to Shelter</b></label><br>
    <input type="date" id="dateToShelter" name="dateToShelter"><br><br>

    <label for="summary"><b>Summary</b></label><br>
    <textarea id="summary" name="summary" placeholder="Enter Summary" rows="4" cols="50"></textarea><br><br>

    <label for="breed"><b>Breed</b></label><br>
    <input type="text" id="breed" placeholder="Enter Breed" name="breed" required><br><br>

    <label for="age"><b>Age</b></label><br>
    <input type="number" id="age" placeholder="Enter Age" name="age" required><br><br>

    <label for="size"><b>Size</b></label><br>
    <select id="size" name="size">
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select><br><br>

    <label for="hypoallergenic"><b>Hypoallergenic:   </b></label>
    <input type="checkbox" id="hypoallergenic" name="hypoallergenic"><br><br>

    <label for="aggressive"><b>Aggressive:   </b></label>
    <input type="checkbox" id="aggressive" name="aggressive"><br><br>

    <label for="neuteredSpayed"><b>Neutered/Spayed:   </b></label>
    <input type="checkbox" id="neuteredSpayed" name="neuteredSpayed"><br><br>

    <label for="shelterId"><b>Choose Shelter:</b></label><br>
    <select id="shelterId">
      <option value="">Select Shelter</option>
    </select><br><br>

    <p>By creating an account you agree to our <a href="terms.html" target="_blank" style="color: black">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="btn btn-danger" onclick="handleNewPet()">Submit</button>
    </div>
<<<<<<< HEAD
  </form>
    `;
    document.getElementById('addPet').innerHTML = html;
    await populateshelterDetails()
=======
  </div>
</form>
  `
  document.getElementById('addPet').innerHTML = html
>>>>>>> refs/remotes/origin/main
}

async function handleNewPet(){
    alert("test")
    let pet = {
        petId: crypto.randomUUID(),
        animalType: document.getElementById("animalType").value,
        image: document.getElementById("image").value,
        sex: document.getElementById("sex").value,
        dateToShelter: document.getElementById("dateToShelter").value,
        summary: document.getElementById("summary").value,
        breed: document.getElementById("breed").value,
        age: document.getElementById("age").value,
        size: document.getElementById("size").value,
        hypoallergenic: document.getElementById("hypoallergenic").checked ? true : false,
        aggressive: document.getElementById("aggressive").checked ? true : false,
        neuteredSpayed: document.getElementById("neuteredSpayed").checked ? true : false,
        shelterId: document.getElementById("shelterId").value,
        reserved: false,
        adopted: false,
        name: document.getElementById("name").value
    }
    await savePet(pet)
    //createTable()
    }
  
  async function savePet(pet){
    
    await fetch(petUrl, {
            method: "POST",
            body: JSON.stringify(pet),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  
  }
  async function getShelters(){
    let response = await fetch(shelterUrl);
    myShelters = await response.json();
  }

  async function populateshelterDetails(selectId = 'shelterId') {
    url = JSON.parse(localStorage.getItem('accountId'));
    await getShelters();
    var existingManagerSelect = document.getElementById(selectId);

    // Clear existing options except the default one
    existingManagerSelect.innerHTML = '<option value="">Select Shelter</option>';

    // Populate dropdown with existing managers
    myShelters.forEach(function(shelter) {
      if(url === shelter.managerAccountId){
        var option = document.createElement('option');
        option.value = shelter.shelterId; // Assuming managerAccountId is the unique ID for each manager
        option.textContent = shelter.name;
        existingManagerSelect.appendChild(option);
      }
    });
}


function handleSignOut(){
  localStorage.removeItem('accountId')
  window.location.href = 'home.html'

}

async function getApplications(){
  let response = await fetch(applicationUrl);
  myApplications = await response.json();
  console.log(myApplications)
}
async function handleApplications() {
  await getApplications();
  let html = '';

  myApplications.forEach(function(application) {
    if(application.approved == 0){
      html += `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">Name: ${application.firstName} ${application.lastName}</h5>
              <p class="card-text">Email: ${application.email}</p>
              <p class="card-text">Phone: ${application.phone}</p>
              <p class="card-text">Address: ${application.address}, ${application.city}, ${application.state}, ${application.zipCode}</p>
              <p class="card-text">House: ${application.house ? 'Yes' : 'No'}</p>
              <p class="card-text">Rent: ${application.rent ? 'Yes' : 'No'}</p>
              <p class="card-text">Past Pets: ${application.pastPets}</p>
              <input type="text" id="inputBox" placeholder="Comments...">
              <button type="button" class="btn btn-danger" onclick="handleDeny('${application.applicationId}','${application.petId}')">Deny</button>
              <button type="button" class="btn btn-success" onclick="handleApprove('${application.applicationId}')">Accept</button>
              

          </div>
      </div>`;
    }
  });

  document.getElementById('app2').innerHTML = html;
}


async function handleDeny(applicationId, petId) {
 
  await fetch(applicationUrl + "/" + applicationId, {
      method: "PUT",
      headers: { 
          "Content-type": "application/json; charset=UTF-8" 
      },
      body: 2
  });

  await fetch(petUrl + "/" + petId, {
    method: "PUT",
    headers: { 
        "Content-type": "application/json; charset=UTF-8" 
    },
});


}

async function handleApprove(applicationId) {
 

  await fetch(applicationUrl + "/" + applicationId, {
      method: "PUT",
      headers: { 
          "Content-type": "application/json; charset=UTF-8" 
      },
      body: 1
  });
  handleApplications();
}

async function createDashboard(){
  let petsCount = await currentAvailablePets()
  let liveApplications = await countLiveApplications()
  let html = `
  <label for="shelterIdDashboard"><b>Choose Shelter:</b></label>
  <select id="shelterIdDashboard">
    <option value="">Select Shelter</option>
  </select>
  <table>
    <tr>
      <th>Current Available Pets</th>
      <td>${petsCount}</td>
    </tr>
    <tr>
      <th>Number of Open Applications</th>
      <td>${liveApplications}</td>
    </tr>
    <tr>
      <th>Number of Rejected Applications</th>
      <td></td>
    </tr>
    <tr>
      <th>Total Adopted Pets</th>
      <td></td>
    </tr>
    <tr>
      <th>Number of Active Reservations</th>
      <td></td>
    </tr>
    <tr>
      <th>Number of Accounts</th>
      <td></td>
    </tr>
  </table>`;

document.getElementById('performance').innerHTML = html;
await populateshelterDetails('shelterIdDashboard')
}

async function currentAvailablePets(){
  return new Promise((resolve, reject) => {
    let shelterId = localStorage.getItem('shelterId')
    // Simulate loading data from the database
    setTimeout(() => {
      // Assuming myPets is loaded globally
      let fileteredPets = myPets.filter(myPets => myPets.shelterId == shelterId)
      let currentPetsCount = fileteredPets.length;
      resolve(currentPetsCount);
    }, 3000); // Adjust the timeout as needed
  });
}

async function countLiveApplications(){
  return new Promise((resolve, reject) => {
    let shelterId = localStorage.getItem('shelterId')
    setTimeout(() => {
      // Assuming applications is loaded globally
      let liveApplications = myApplications.filter(myApplications => myApplications.approved == 0 && myApplications.shelterId == shelterId);
      let liveApplicationsCount = liveApplications.length;
      resolve(liveApplicationsCount);
    }, 3000); // Adjust the delay as needed
  });
}