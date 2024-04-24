let applicationUrl = "http://localhost:5161/api/Application"
myApplications = []
let petUrl = "http://localhost:5161/api/Pets"
myPets = []
let shelterUrl = "http://localhost:5161/api/Shelters"
myShelters = []
let accountUrl = "http://localhost:5161/api/Accounts"
myUsers = []

async function handleOnLoad()
{
    await getAllApplications();  // Assume this fetches your applications data
    await getAllPets();
    await getAllShelters();
    await getAllUsers();
    await dashboard()
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

async function getAllShelters(){
    let response = await fetch(shelterUrl);
    myShelters= await response.json();
    console.log(myShelters);
}

async function getAllUsers(){
    let response = await fetch(accountUrl);
    myUsers= await response.json();
    console.log(myUsers);
}

function handleSignOut(){
    localStorage.removeItem('accountId')
    localStorage.removeItem('shelterId')

    window.location.href = 'home.html'
  
  }

  async function dashboard(){
    let accountId = JSON.parse(localStorage.getItem('accountId'));
    const user = myUsers.find(user => user.id ===accountId)
    
    let html = `
    <section style="background-color: white;">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="avatar"
                                class="rounded-circle img-fluid" style="width: 150px;">
                            <h5 class="my-3">${user.firstName} ${user.lastName}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Full Name</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">${user.firstName} ${user.lastName}</p>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">Email</p>
                                </div>
                                <div class="col-sm-9">
                                    <p class="text-muted mb-0">${user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`

    document.getElementById('dash').innerHTML = html
}

async function populateApplications() {
    url = JSON.parse(localStorage.getItem('accountId'));
    
    let html = '';

    myApplications.forEach(function(app) {
        
    if(app.userId == url && app.approved == 0){

      const pet = myPets.find(pet => pet.petId === app.petId);

      html += `

      <div class="applicationCard" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Pending application for ${app.firstName} ${app.lastName}</h5>
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

        else if (app.userId == url && app.approved == 2){
            const pet = myPets.find(pet => pet.petId === app.petId);
            const shelter = myShelters.find(shelter => pet.shetlerId === app.shetlerId)
        html += `
        <div class="applicationCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Approved application for ${app.firstName} ${app.lastName}!</h5>
            <p class="card-text">
                Congratulations! Your application for ${pet ? pet.name : 'Unknown'} has been approved!
                Please come to ${shelter.shelterAddress} ${shelter.shelterCity}, ${shelter.shelterState}  anytime from 9-5 to pick up your new pet!
                Thank you for adopting with Adopt-A-Pet, and we hope to see you soon!
                Address: ${app.address}<br>
                Pet Name: ${pet ? pet.name : 'Unknown'}<br>
                Pet Age: ${pet ? pet.age : 'Unknown'}<br>
                Pet Breed: ${pet ? pet.breed : 'Unknown'}<br>
                ${pet ? `<img src="${pet.image}" alt="Pet Image" style="max-width: 100%;">` : ''}
                </p>
            </div>
        </div>`;

        }
        
            else if (app.userId == url && app.approved == 1){
                    const pet = myPets.find(pet => pet.petId === app.petId);
                    const shelter = myShelters.find(pet => pet.shetlerId === app.shetlerId)
            html += `
            <div class="applicationCard" style="width: 50rem;">
            <div class="card-body">
                <h5 class="card-title">Declined application for ${app.firstName} ${app.lastName}!</h5>
                <p class="card-text">
                    We are sorry to inform you that your application for ${pet ? pet.name : 'Unknown'} has been declined. This is 
                    likely due to improper experience or housing. We appreciate your time and hope to see
                    you apply again soon.
                    </p>
            </div>
            </div>`;
            }
        });

    html += '</div>';
    document.getElementById('app').innerHTML = html;
}