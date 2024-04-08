let subjectUrl = "http://localhost:5161/api/Shelters"
let subjectUrl2 = "http://localhost:5161/api/ManagerAccount"
let selectedManager = []
let managerBool = false


 function handleOnLoad(){
    createAccount()
    populateManagerDetails()
}

async function createAccount(){
    let html= `
    <form   style="border:1px solid #ccc">
    <div class="container">
      <p>Please fill in this form to add a new shelter.</p>
      
        <label for="name"><b>Name Of Shelter</b></label>
        <input type="text" id="name" placeholder="Enter Name" name="name" required><br><br>

        <label for="shelterCity"><b>Shelter City</b></label>
        <input type="text" id="shelterCity" placeholder="Enter Shelter City" name="shelter" required><br><br>

        <label for="shelterState"><b>Shelter State</b></label>
        <input type="text" id="shelterState" placeholder="Enter Shelter State" name="shelterState" required><br><br>
        
        <label for="shelterAddress"><b>Shelter Address</b></label>
        <input type="text" id="shelterAddress" placeholder="Enter Shelter Address" name="shelterAddress" required><br><br
        
        <label for="existingManager"><b>Choose Existing Manager:</b></label>
        <select id="existingManager" onchange="populateOtherFields()">
          <option value="">Select Manager</option>
        </select>

        <label for="managerUsername"><b>Manager Username</b></label>
        <input type="text" id="managerUsername" placeholder="Enter Manager Username" name="managerUsername" required><br>
       
        <label for="managerPassword"><b>Manager Password</b></label>
        <input type="password" id="managerPassword" placeholder="Enter Manager Password" name="managerPassword" required><br>

        <label for="managerName"><b>Manager Name</b></label>
        <input type="text" id="managerName" placeholder="Enter Manager Name" name="managerName" required><br>

        <label for="managerAccountId"><b>Manager Account ID</b></label>
        <input type="text" id="managerAccountId" placeholder="Enter Manager Account ID" name="managerAccountId" required><br>

        <button type="button" class="btn btn-danger" onclick="handleNewShelter()">Submit</button>

        <button onclick="openPopup()">Add New Manager</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('addPet').innerHTML = html;
}

function openPopup() {
  document.getElementById("popupForm").style.display = "block";
}

// Function to close the pop-up form
function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Function to save the manager details
async function handleNewManager() {
  let manager = {
    loggedIn : false,
    managerUsername: document.getElementById("newManagerUsername").value,
    managerPassword: document.getElementById("newManagerPassword").value,
    managerName: document.getElementById("newManagerName").value,
    managerAccountId: document.getElementById("newManagerAccountId").value, 
  }
  console.log(manager)
  await saveManager(manager)
  closePopup();
}

async function handleNewShelter(){
    alert("test")
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
  
  
    
      async function saveManager(manager){
    
        await fetch(subjectUrl2, {
                method: "POST",
                body: JSON.stringify(manager),
                headers: {"Content-type": "application/json; charset=UTF-8"}
        })
      
      }

  async function getMainManagers(){
    let response = await fetch(subjectUrl2);
    myMainManagers = await response.json();
    console.log(myMainManagers);
  }
  
  async function saveShelter(shelter){
    
    await fetch(subjectUrl, {
            method: "POST",
            body: JSON.stringify(shelter),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  
  }

  async function populateManagerDetails() {
    managerBool = true
    await getMainManagers()
    var existingManagerSelect = document.getElementById('existingManager');

    // Clear existing options except the default one
    existingManagerSelect.innerHTML = '<option value="">Select Manager</option>';

    // Populate dropdown with existing managers
    myMainManagers.forEach(function(manager) {
        var option = document.createElement('option');
        option.value = manager.managerAccountId; // Assuming managerAccountId is the unique ID for each manager
        option.textContent = manager.managerName;
        existingManagerSelect.appendChild(option);
    });
}

function populateOtherFields() {
  const selectedId = document.getElementById("existingManager").value;
  console.log(selectedId)
    myMainManagers.forEach((manager)=>{
        if(manager.managerAccountId == selectedId){
            selectedManager = manager 
        }
    });
  document.getElementById('managerUsername').value = selectedManager.managerUsername;
  document.getElementById('managerPassword').value = selectedManager.managerPassword;
  document.getElementById('managerName').value = selectedManager.managerName;
  document.getElementById('managerAccountId').value = selectedManager.managerAccountId;
}
