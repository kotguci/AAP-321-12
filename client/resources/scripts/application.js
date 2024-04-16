let subjectUrl = "http://localhost:5161/api/Application"
function handleOnLoad(){
  url3 = JSON.parse(localStorage.getItem('accountId'))
  if (url3 != null){
      createApplication()
  }else{
    window.location.href = 'signin.html'
  }
}

function createApplication(){
    let html= `
    <br><br><br><br><br><br>
    <form style="border: 1px solid #ccc">
    <div class="container">
        <label for="firstName"><b>First Name</b></label>
        <input type="text" id="firstName" placeholder="Enter First Name" name="firstName" required><br><br>

        <label for="lastName"><b>Last Name</b></label>
        <input type="text" id="lastName" placeholder="Enter Last Name" name="lastName" required><br><br>

        <label for="address"><b>Address</b></label>
        <input type="text" id="address" placeholder="Enter Address" name="address" required><br><br>

        <label for="city"><b>City</b></label>
        <input type="text" id="city" placeholder="Enter City" name="city" required><br><br>

        <label for="state"><b>State</b></label>
        <input type="text" id="state" placeholder="Enter State" name="state" required><br><br>

        <label for="zipCode"><b>Zip Code</b></label>
        <input type="text" id="zipCode" placeholder="Enter Zip Code" name="zipCode" required><br><br>

        <label for="phone"><b>Phone</b></label>
        <input type="text" id="phone" placeholder="Enter Phone" name="phone" required><br><br>

        <label for="email"><b>Email</b></label>
        <input type="text" id="email" placeholder="Enter Email" name="email" required><br><br>

        <label><input type="checkbox" id="rent" name="rent"> Rent</label><br><br>

        <label><input type="checkbox" id="house" name="house"> House</label><br><br>

        <label for="pastPets"><b>Past Pets</b></label>
        <input type="text" id="pastPets" placeholder="Enter Past Pets" name="pastPets" required><br><br>
  
      <p>By creating an account you agree to our <a href="terms.html" target="_blank" style="color: black">Terms & Privacy</a>.</p>

  
      <div class="clearfix">
        <button type="button" class="btn btn-danger" onclick="handleNewApplication()">Submit</button>
      </div>
    </div>
  </form>
    `;
    document.getElementById('app').innerHTML = html;
}

// local storage for userId to keep track

async function handleNewApplication(){
    url = JSON.parse(localStorage.getItem('petId'));
    url2 = JSON.parse(localStorage.getItem('shelterId'))
    url3 = JSON.parse(localStorage.getItem('accountId'))
    console.log(url)

    let application = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipCode: document.getElementById("zipCode").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        house: document.getElementById("house").checked ? true : false,
        applicationId: crypto.randomUUID(),
        rent: document.getElementById("rent").checked ? true : false,
        pastPets: document.getElementById("pastPets").value,
        userId: url3,
        shelterId: url2,
        approved : false,
        petId : url

    }
    await saveApplication(application)
    //createTable()
    window.location.href = 'myAccount.html'

    }
  
  async function saveApplication(application){
      console.log(application)
    await fetch(subjectUrl, {
            method: "POST",
            body: JSON.stringify(application),
            headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  
  }