let subjectUrl = "http://localhost:5161/api/Shelters"
let subjectUrl2 = "http://localhost:5161/api/ManagerAccount"
let applicationUrl = "http://localhost:5161/api/Application"
let petsUrl = "http://localhost:5161/api/Pets"
let myApplications = []
let selectedManager = []
let myPets = []
let managerBool = false

async function handleOnLoad() {
    await getApplications();
    await getShelters();
    await getAllPets()
    createAccount()
    populateManagerDetails()
    handleApplications()
    getDashboard()
    

}

async function createAccount() {
    let html = `
    <form class="container" style="border: 1px solid #ccc">
        <p>Please fill in this form to add a new shelter.</p>
      
        <label for="name"><b>Name Of Shelter</b></label>
        <input type="text" id="name" placeholder="Enter Name" name="name" required><br><br>

        <label for="shelterCity"><b>Shelter City</b></label>
        <input type="text" id="shelterCity" placeholder="Enter Shelter City" name="shelter" required><br><br>

        <label for="shelterState"><b>Shelter State</b></label>
        <input type="text" id="shelterState" placeholder="Enter Shelter State" name="shelterState" required><br><br>
        
        <label for="shelterAddress"><b>Shelter Address</b></label>
        <input type="text" id="shelterAddress" placeholder="Enter Shelter Address" name="shelterAddress" required><br><br>

        <label for="existingManager"><b>Choose Existing Manager:</b></label>
        <select id="existingManager" onchange="populateOtherFields()">
            <option value="">Select Manager</option>
        </select>

        <label for="managerUsername"><b>Manager Username</b></label>
        <input type="text" id="managerUsername" placeholder="Enter Manager Username" name="managerUsername" required><br>
       
        <label for="managerPassword"><b>Manager Password</b></label>
        <input type="text" id="managerPassword" placeholder="Enter Manager Password" name="managerPassword" required><br>

        <label for="managerName"><b>Manager Name</b></label>
        <input type="text" id="managerName" placeholder="Enter Manager Name" name="managerName" required><br>

        <label for="managerAccountId"><b>Manager Account ID</b></label>
        <input type="text" id="managerAccountId" placeholder="Enter Manager Account ID" name="managerAccountId" required><br>

        <button type="button" class="btn btn-danger" onclick="handleNewShelter()">Submit</button>
        <button class="btn btn-danger" onclick="openPopup()">Add New Manager</button>
    </form>
    `
    document.getElementById('addPet').innerHTML = html
}

function openPopup() {
    document.getElementById("popupForm").style.display = "block"
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none"
}

async function handleNewManager() {
    let manager = {
        loggedIn: false,
        managerUsername: document.getElementById("newManagerUsername").value,
        managerPassword: document.getElementById("newManagerPassword").value,
        managerName: document.getElementById("newManagerName").value,
        managerAccountId: crypto.randomUUID()
    }
    console.log(manager)
    await saveManager(manager)
    closePopup()
}

async function handleNewShelter() {
    let shelter = {
        shelterId: crypto.randomUUID(),
        shelterCity: document.getElementById("shelterCity").value,
        shelterState: document.getElementById("shelterState").value,
        shelterAddress: document.getElementById("shelterAddress").value,
        managerAccountId: document.getElementById("managerAccountId").value,
        name: document.getElementById("name").value
    }
    console.log(shelter)
    await saveShelter(shelter)
}

async function saveManager(manager) {
    await fetch(subjectUrl2, {
        method: "POST",
        body: JSON.stringify(manager),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}
async function getAllPets(){
    let response = await fetch(petsUrl);
    myPets = await response.json();
    console.log(myPets);
}
async function getMainManagers() {
    let response = await fetch(subjectUrl2)
    myMainManagers = await response.json()
    console.log(myMainManagers)
}

async function getApplications() {
    let response = await fetch(applicationUrl)
    myApplications = await response.json()
    console.log(myApplications)
}
async function getShelters() {
    let response = await fetch(subjectUrl)
    myShelters = await response.json()
    console.log(myShelters)
}

async function saveShelter(shelter) {
    await fetch(subjectUrl, {
        method: "POST",
        body: JSON.stringify(shelter),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

async function populateManagerDetails() {
    managerBool = true
    await getMainManagers()
    var existingManagerSelect = document.getElementById('existingManager')

    // Clear existing options except the default one
    existingManagerSelect.innerHTML = '<option value="">Select Manager</option>'

    // Populate dropdown with existing managers
    myMainManagers.forEach(function (manager) {
        var option = document.createElement('option')
        option.value = manager.managerAccountId // Assuming managerAccountId is the unique ID for each manager
        option.textContent = manager.managerName
        existingManagerSelect.appendChild(option)
    })
}

function populateOtherFields() {
    const selectedId = document.getElementById("existingManager").value
    console.log(selectedId)
    myMainManagers.forEach((manager) => {
        if (manager.managerAccountId == selectedId) {
            selectedManager = manager
        }
    })
    document.getElementById('managerUsername').value = selectedManager.managerUsername
    document.getElementById('managerPassword').value = selectedManager.managerPassword
    document.getElementById('managerName').value = selectedManager.managerName
    document.getElementById('managerAccountId').value = selectedManager.managerAccountId
}

async function handleApplications() {
    



    let html = '';
    myApplications.forEach(function(application) {
        const pet = myPets.find(pet => pet.shelterId == application.shelterId);
        const shelter = myShelters.find(shelter => shelter.shelterId == application.shelterId)

      if(application.approved == 0 ){
        html += `
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">Shelter name: ${shelter.name}</h5>
                <br>
                <h5 class="card-title">Name: ${application.firstName} ${application.lastName}</h5>
                <p class="card-text">Email: ${application.email}</p>
                <p class="card-text">Phone: ${application.phone}</p>
                <p class="card-text">Address: ${application.address}, ${application.city}, ${application.state}, ${application.zipCode}</p>
                <p class="card-text">House: ${application.house ? 'Yes' : 'No'}</p>
                <p class="card-text">Rent: ${application.rent ? 'Yes' : 'No'}</p>
                <p class="card-text">Past Pets: ${application.pastPets}</p>
                Pet Name: ${pet ? pet.name : 'Unknown'}<br>
                Pet Age: ${pet ? pet.age : 'Unknown'}<br>
                Pet Breed: ${pet ? pet.breed : 'Unknown'}<br>
                ${pet ? `<img src="${pet.image}" alt="Pet Image" style="max-width: 100%;">` : ''}
                <input type="text" id="inputBox" placeholder="Comments...">
                <button type="button" class="btn btn-danger" onclick="handleDeny('${application.applicationId}','${application.petId}')">Deny</button>
                <button type="button" class="btn btn-success" onclick="handleApprove('${application.applicationId}')">Accept</button>
                
  
            </div>
        </div>`;
      }
    });
  
    document.getElementById('applications').innerHTML = html;
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

  async function getDashboard() {
    
    let petsCount = await currentAvailablePets()
    let liveApplications = await countLiveApplications()
    let rejectedApplications = await countRejectedApplications()
    let totalAdoptedPets = await getTotalAdoptedPets()
    let numOfApplications = await getNumOfApplications()
    let html = `
    
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
        <td>${rejectedApplications}</td>
      </tr>
      <tr>
        <th>Total Adopted Pets</th>
        <td>${totalAdoptedPets}</td>
      </tr>
      <tr>
        <th>Total Applications</th>
        <td>${numOfApplications}</td>
      </tr>
    </table>`;
  
  document.getElementById('performance').innerHTML = html;
  
  }
  
  async function currentAvailablePets(){
    return new Promise((resolve, reject) => {
      // Simulate loading data from the database
      setTimeout(() => {
        // Assuming myPets is loaded globally
        let filteredPets = myPets.filter(myPets => myPets.adopted == 0)
        let currentPetsCount = filteredPets.length;
        resolve(currentPetsCount);
      }, 500); // Adjust the timeout as needed
    });
  }
  
  
  async function getNumOfApplications(){
    return new Promise((resolve, reject) => {
      // Simulate loading data from the database
      setTimeout(() => {
        // Assuming myApplications is loaded globally
        let currentApplicationsCount = myApplications.length;
        resolve(currentApplicationsCount);
      }, 500); // Adjust the timeout as needed
    });
  }
  
  async function getTotalAdoptedPets(){
    return new Promise((resolve, reject) => {
      // Simulate loading data from the database
      setTimeout(() => {
        // Assuming myPets is loaded globally
        let fileteredPets = myApplications.filter(myApplications => myApplications.approved == 2)
        let currentPetsCount = fileteredPets.length;
        resolve(currentPetsCount);
      }, 500); // Adjust the timeout as needed
    });
  }
  
  async function countLiveApplications(shelterId){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Assuming applications is loaded globally
        let liveApplications = myApplications.filter(myApplications => myApplications.approved == 0 );
        let liveApplicationsCount = liveApplications.length;
        resolve(liveApplicationsCount);
      }, 500); // Adjust the delay as needed
    });
  }
  
  async function countRejectedApplications(shelterId){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Assuming applications is loaded globally
        let liveApplications = myApplications.filter(myApplications => myApplications.approved == 1);
        let liveApplicationsCount = liveApplications.length;
        resolve(liveApplicationsCount);
      }, 500); // Adjust the delay as needed
    });
  }