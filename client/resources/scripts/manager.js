let subjectUrl = "http://localhost:5161/api/Pets"
let shelterUrl = "http://localhost:5161/api/Shelters"
function handleOnLoad(){
    createAccount()
    populateshelterDetails()
}

function createAccount(){
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

        <label for="image"><b>Image (Paste Image URL)</b></label>
        <input type="text" id="image" placeholder="Paste Image URL" name="image" required>

        <label for="name"><b>Name</b></label>
        <input type="text" id="name" placeholder="Enter Name" name="name" required>

        <label for="sex"><b>Sex</b></label>
        <select id="sex" name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>

        <label for="dateToShelter"><b>Date to Shelter</b></label>
        <input type="date" id="dateToShelter" name="dateToShelter">

        <label for="summary"><b>Summary</b></label>
        <textarea id="summary" name="summary" placeholder="Enter Summary" rows="4" cols="50"></textarea>

        <label for="breed"><b>Breed</b></label>
        <input type="text" id="breed" placeholder="Enter Breed" name="breed" required>

        <label for="age"><b>Age</b></label>
        <input type="number" id="age" placeholder="Enter Age" name="age" required>

        <label for="size"><b>Size</b></label>
        <select id="size" name="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>

        <label for="hypoallergenic"><b>Hypoallergenic</b></label>
        <input type="checkbox" id="hypoallergenic" name="hypoallergenic">

        <label for="aggressive"><b>Aggressive</b></label>
        <input type="checkbox" id="aggressive" name="aggressive">

        <label for="neuteredSpayed"><b>Neutered/Spayed</b></label>
        <input type="checkbox" id="neuteredSpayed" name="neuteredSpayed">

        <label for="shelterId"><b>Choose Shelter:</b></label>
        <select id="shelterId">
          <option value="">Select Shelter</option>
        </select>
       

  
      <p>By creating an account you agree to our <a href="terms.html" target="_blank" style="color: black">Terms & Privacy</a>.</p>

  
      <div class="clearfix">
        <button type="button" class="btn btn-danger" onclick="handleNewPet()">Submit</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('addPet').innerHTML = html;
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




