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

    let html = ''
     myPets.forEach(function(pets){

    html += `
        <div class="petCard" style="width: 18rem;">
            <img class="card-img-top" src="${pets.image}" alt="Card image cap">
                <div class="card-body">
                 <h5 class="card-title">${pets.name}</h5>
                <p class="card-text">Type: ${pets.animalType}\nAge: ${pets.age}     Sex:Breed: ${pets.sex}\nBreed: ${pets.breed}\nSize: ${pets.size}\nEntered Shelter: ${pets.dateToShelter}</p>

            <a href="#" class="btn btn-primary">Go somewhere</a>
            
        </div>`
    })
    console.log(html)
    document.getElementById('app').innerHTML = html;
}
