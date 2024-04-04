let subjectUrl = "http://localhost:5161/api/Shelters"
function handleOnLoad(){
    createAccount()
}

function createAccount(){
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
        
        <label for="managerAccountId"><b>Manager Account ID</b></label>
        <input type="text" id="managerAccountId" placeholder="Enter Manager Account ID" name="managerAccountId" required><br>

        <button type="button" class="btn btn-danger" onclick="handleNewShelter()">Submit</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('addPet').innerHTML = html;
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
    //createTable()
    }
  
  async function saveShelter(shelter){
    
    await fetch(subjectUrl, {
            method: "POST",
            body: JSON.stringify(shelter),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  
  }