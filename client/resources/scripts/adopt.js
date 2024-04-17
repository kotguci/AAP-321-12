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

async function populateCards(){
    await getAllPets()
    url = JSON.parse(localStorage.getItem('shelterId'));
    console.log(url)
    let html = ''
    myPets.forEach(function(pets){
        if(url == pets.shelterId){
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
                    Entered Shelter: ${pets.dateToShelter}
                </p>
                <button onclick="showPopup('${pets.petId}')" class="btn btn-danger">More About ${pets.name}</button>
                <button onclick="adoptPet('${pets.petId}')" class="btn btn-success">Adopt ${pets.name}</button>

                </div>
                </div>
                </div>`
            
        }else if (url == null){
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
                    Entered Shelter: ${pets.dateToShelter}
                </p>
                <button onclick="showPopup('${pets.petId}')" class="btn btn-danger">More About ${pets.name}</button>
                </div>
                </div>
                </div>`
        }
        
    })
    document.getElementById('app').innerHTML = html
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
