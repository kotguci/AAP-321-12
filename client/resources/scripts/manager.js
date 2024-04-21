let subjectUrl = "http://localhost:5161/api/Pets"
let shelterUrl = "http://localhost:5161/api/Shelters"
let applicationUrl = "http://localhost:5161/api/Application"
let myApplications = []
function handleOnLoad(){
    createAccount()
    populateshelterDetails()
    handleApplications();
}

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
  </div>
</form>
  `
  document.getElementById('addPet').innerHTML = html
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
    
    await fetch(subjectUrl, {
            method: "POST",
            body: JSON.stringify(pet),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  
  }
  async function getShelters(){
    let response = await fetch(shelterUrl);
    myShelters = await response.json();
    console.log(myShelters);
  }

  async function populateshelterDetails() {
    url = JSON.parse(localStorage.getItem('accountId'));
    console.log(url)
    await getShelters()
    var existingManagerSelect = document.getElementById('shelterId');

    // Clear existing options except the default one
    existingManagerSelect.innerHTML = '<option value="">Select Shelter</option>';

    // Populate dropdown with existing managers
    myShelters.forEach(function(shelter) {
      if(url === shelter.managerAccountId){
        var option = document.createElement('option');
        option.value = shelter.shelterId; // Assuming managerAccountId is the unique ID for each manager
        option.textContent = shelter.name;
        existingManagerSelect.appendChild(option);
        console.log(shelter.shelterId)
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
              <button type="button" class="btn btn-danger" onclick="handleDeny('${application.applicationId}','${application.petId}')">Deny</button>
              <button type="button" class="btn btn-success" onclick="handleApprove('${application.applicationId}')">Accept</button>
              <input type="text" id="inputBox" placeholder="Comments...">

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

  await fetch(subjectUrl + "/" + petId, {
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