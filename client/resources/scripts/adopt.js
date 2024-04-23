let petUrl = 'http://localhost:5161/api/Pets';
let myPets = []


function handleOnLoad(){
     
     populateCards()
}

async function getAllPets(){
    let response = await fetch(petUrl);
    myPets = await response.json();
    console.log(myPets);
}

async function populateCards(sortCriterion){
    await getAllPets()
    url = JSON.parse(localStorage.getItem('shelterId'));
    managerUrl = JSON.parse(localStorage.getItem('managerId'));
    console.log(url)
    let html = ''

    if (sortCriterion === 'breed') {
        myPets.sort((a, b) => a.breed.localeCompare(b.breed));
    } else if (sortCriterion === 'size') {
        myPets.sort((a, b) => a.size.localeCompare(b.size));
    } else if (sortCriterion === 'age') {
        myPets.sort((a, b) => parseInt(a.age) - parseInt(b.age));
    } else if (sortCriterion === 'aggressive') {
        myPets.sort((a, b) => a.aggressive === b.aggressive ? 0 : a.aggressive ? -1 : 1);
    } else if (sortCriterion === 'neuteredSpayed') {
        myPets.sort((a, b) => a.neuteredSpayed === b.neuteredSpayed ? 0 : a.neuteredSpayed ? -1 : 1);
    } else if (sortCriterion === 'hypoallergenic') {
        myPets.sort((a, b) => a.hypoallergenic === b.hypoallergenic ? 0 : a.hypoallergenic ? -1 : 1);
    }
    
    myPets.forEach(function(pets){
        if(managerUrl != null){
            html += `
            <div class="petCardContainer"> 
            <div class="petCard" style="width: 18rem;">
            <img class="card-img-top" src="${pets.image}" ">
            <div class="card-body">
                <h5 class="card-title">${pets.name}</h5>
                <p class="card-text">
                    Type: ${pets.animalType}<br>
                    Age: ${pets.age}<br>
                    Sex: ${pets.sex}<br>
                    Breed: ${pets.breed}<br>
                    Size: ${pets.size}<br>
                    Aggresive: ${pets.aggresive ? 'Yes' : 'No'}<br>
                    Hypoallergenic: ${pets.hypoallergenic ? 'Yes' : 'No'}<br>
                    Neutered / Spayed: ${pets.neuteredSpayed? 'Yes' : 'No'}<br>
                    Entered Shelter: ${pets.dateToShelter}
                </p>
                <button onclick="showPopup('${pets.petId}')" class="btn btn-danger">More About ${pets.name}</button>
                <button onclick="editPet('${pets.petId}')" class="btn btn-success">Edit ${pets.name}</button>

                </div>
                </div>
                </div>`
        }
        else if(url == pets.shelterId && pets.adopted == 0){
            html += `
            <div class="petCardContainer"> 
            <div class="petCard" style="width: 18rem;">
            <img class="card-img-top" src="${pets.image}">
            <div class="card-body">
                <h5 class="card-title">${pets.name}</h5>
                <p class="card-text">
                    Type: ${pets.animalType}<br>
                    Age: ${pets.age}<br>
                    Sex: ${pets.sex}<br>
                    Breed: ${pets.breed}<br>
                    Size: ${pets.size}<br>
                    Aggresive: ${pets.aggresive ? 'Yes' : 'No'}<br>
                    Hypoallergenic: ${pets.hypoallergenic ? 'Yes' : 'No'}<br>
                    Neutered / Spayed: ${pets.neuteredSpayed? 'Yes' : 'No'}<br>
                    Entered Shelter: ${pets.dateToShelter}
                </p>
                <button onclick="showPopup('${pets.petId}')" class="btn btn-danger">More About ${pets.name}</button>
                <button onclick="adoptPet('${pets.petId}')" class="btn btn-success">Adopt ${pets.name}</button>

                </div>
                </div>
                </div>`
            
        }else if (url == null && pets.adopted == 0){
            html += `
            <div class="petCardContainer"> 
            <div class="petCard" style="width: 18rem;">
            <img class="card-img-top" src="${pets.image}" ">
            <div class="card-body">
                <h5 class="card-title">${pets.name}</h5>
                <p class="card-text">
                    Type: ${pets.animalType}<br>
                    Age: ${pets.age}<br>
                    Sex: ${pets.sex}<br>
                    Breed: ${pets.breed}<br>
                    Size: ${pets.size}<br>
                    Aggresive: ${pets.aggresive ? 'Yes' : 'No'}<br>
                    Hypoallergenic: ${pets.hypoallergenic ? 'Yes' : 'No'}<br>
                    Neutered / Spayed: ${pets.neuteredSpayed? 'Yes' : 'No'}<br>
                    Entered Shelter: ${pets.dateToShelter}
                </p>
                <button onclick="showPopup('${pets}')" class="btn btn-danger">More About ${pets.name}</button>
                </div>
                </div>
                </div>`
        }
        
    })
    document.getElementById('app').innerHTML = html
}

function sortPets() {
    const sortCriterion = document.getElementById('sortCriterion').value;
    populateCards(sortCriterion);
}

function showPopup(petId) {
    const pet = myPets.find(p => p.petId === petId)
    const html = `
        <strong>Type:</strong> ${pet.animalType}<br>
        <strong>Age:</strong> ${pet.age}<br>
        <strong>Sex:</strong> ${pet.sex}<br>
        <strong>Breed:</strong> ${pet.breed}<br>
        <strong>Summary:</strong> ${pet.summary}<br>
        <strong>Entered Shelter:</strong> ${pet.dateToShelter}
        <button id="closePopupButton" class="btn btn-danger">Close</button>
    `;
    document.getElementById('petInfoPopup').innerHTML = html
    document.getElementById('petInfoPopup').style.display = 'block'
    document.getElementById('closePopupButton').addEventListener('click', hidePopup)
}

function hidePopup() {
    document.getElementById('petInfoPopup').style.display = 'none'
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('closePopupButton').addEventListener('click', hidePopup)
    })
}

function adoptPet(petId){
    localStorage.setItem('petId', JSON.stringify(petId))
    window.location.href = 'application.html'
}

function editPet(petId) {
    const pet = myPets.find(p => p.petId === petId);
    const html = `
   
        <form id="editPetForm" style="border:1px solid #ccc; padding: 20px; max-width: 400px; margin: 0 auto;">
            <div id="petInfoContent" class="container" >
                <p>Please fill in this form to edit the pet details.</p>
                <hr>
                <label for="animalType"><b>Animal Type</b></label>
                    <select id="animalType" name="animalType" required>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    </select>
                <label for="age"><b>Age</b></label><br>
                <input type="number" id="age" value="${pet.age}" required><br>

                <label for="age"><b>Name</b></label><br>
                <input type="text" id="name" value="${pet.name}" required><br>

                <label for="sex"><b>Sex</b></label><br>
                    <select id="sex" value="${pet.sex}name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select><br><br>

                <label for="breed"><b>Breed</b></label><br>
                <input type="text" id="breed" value="${pet.breed}" required><br>

                <label for="size"><b>Size</b></label><br>
                    <select id="size" name="size" required>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    </select><br><br>

                <label for="summary"><b>Summary</b></label><br>
                <textarea id="summary" rows="4" cols="50" required>${pet.summary}</textarea><br>

                <label for="image"><b>Image (Paste Image URL)</b></label><br>
                <input type="text" id="image" value="${pet.image}" required><br>

                <label for="hypoallergenic"><b>Hypoallergenic</b></label>
                <input type="checkbox" id="hypoallergenic" ${pet.hypoallergenic ? 'checked' : ''}><br>

                <label for="aggressive"><b>Aggressive</b></label>
                <input type="checkbox" id="aggressive" ${pet.aggressive ? 'checked' : ''}><br>

                <label for="neuteredSpayed"><b>Neutered/Spayed</b></label>
                <input type="checkbox" id="neuteredSpayed" ${pet.neuteredSpayed ? 'checked' : ''}><br>

                <div class="clearfix">
                    <button type="button" onclick="updatePet('${petId}')" class="btn btn-primary">Submit</button>
                    <button type="button" id="closePopupButton" class="btn btn-danger">Close</button>
                </div>
            </div>
        </form>
    `;
    document.getElementById('petInfoPopup').innerHTML = html;
    document.getElementById('petInfoPopup').style.display = 'block';
    document.getElementById('closePopupButton').addEventListener('click', hidePopup);
}

function hidePopup() {
    document.getElementById('petInfoPopup').style.display = 'none'
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('closePopupButton').addEventListener('click', hidePopup)
    })
}

function updatePet(petId){
    const pet = myPets.find(p => p.petId === petId);

    const formData = {
        adopted: pet.adopted,
        dateToShelter: pet.dateToShelter,
        image: pet.image,
        name: document.getElementById('name').value,
        petId: pet.petId,
        reserved: pet.reserved,
        shelterId: pet.shelterId,
        size: document.getElementById('size').value,
        animalType: document.getElementById('animalType').value,
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value,
        breed: document.getElementById('breed').value,
        summary: document.getElementById('summary').value,
        dateToShelter: pet.dateToShelter,
        image: document.getElementById('image').value,
        hypoallergenic: document.getElementById('hypoallergenic').checked,
        aggressive: document.getElementById('aggressive').checked,
        neuteredSpayed: document.getElementById('neuteredSpayed').checked,
        // Add more fields as necessary
    };

    console.log(formData)
    // Call function to update the pet details in the database
    updatePetInDatabase(formData);
}

async function updatePetInDatabase(formData) {
    const petId = formData.petId; // Assuming petId is included in the formData

    await fetch(petUrl + "/" + petId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    console.log('Pet updated successfully');
    window.location.href = 'adopt.html'

    // Optionally, you can handle further operations here
}
