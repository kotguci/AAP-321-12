let applicationUrl = "http://localhost:5161/api/Application"
myApplications = []
let petUrl = "http://localhost:5161/api/Pets"
myPets = []

function handleOnLoad()
{
    populateApplications();
}
async function getAllApplications(){
    let response = await fetch(applicationUrl);
    myApplications = await response.json();
    console.log(myApplications);
}
async function getAllPets(){
    let response = await fetch(petUrl);
    myPets = await response.json();
    console.log(myPets);
}


function handleSignOut(){
    localStorage.removeItem('accountId')
}

async function populateApplications() {
    url = JSON.parse(localStorage.getItem('accountId'));
    await getAllApplications();  // Assume this fetches your applications data
    await getAllPets();
    let html = '';
    myApplications.forEach(function(app) {
    if(app.userId == url){
      const pet = myPets.find(pet => pet.petId === app.petId);
      html += `
      <div class="applicationCard" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${app.firstName} ${app.lastName}</h5>
          <p class="card-text">
              Address: ${app.address}<br>
              City: ${app.city}<br>
              State: ${app.state}<br>
              Zip Code: ${app.zipCode}<br>
              Phone: ${app.phone}<br>
              Email: ${app.email}<br>
              House: ${app.house ? 'Yes' : 'No'}<br>
              Rent: ${app.rent ? 'Yes' : 'No'}<br>
              Past Pets: ${app.pastPets}<br>
              Approved: ${app.approved ? 'Yes' : 'No'}<br>
              Pet Name: ${pet ? pet.name : 'Unknown'}<br>
              Pet Age: ${pet ? pet.age : 'Unknown'}<br>
              Pet Breed: ${pet ? pet.breed : 'Unknown'}<br>
              ${pet ? `<img src="${pet.image}" alt="Pet Image" style="max-width: 100%;">` : ''}
              </p>
      </div>
  </div>`;
        }
    });

    html += '</div>';
    document.getElementById('app').innerHTML = html;
  }