let petUrl = 'http://localhost:5161api/Pets';
let myPets = []


function handleOnLoad(){
     getAllPets()
     populateCards()
}

async function getAllPets(){
    let response = await fetch(petUrl);
    movie = await response.json();
    console.log(pets);
}

async function populateCards(){
    await getAllPets()

    let html = `
        <div class="petCard" style="width: 18rem;">
        <img class="card-img-top" src=">${pets.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">>${pets.petName}</h5>
            <p class="card-text">Type: ${pets.animalType}\nAge: ${pets.age}     Sex:Breed: ${pets.sex}\nBreed: ${pets.breed}\Size: ${pets.size}\nEntered Shelter: ${pets.dateToShelter}</p>

            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
    
    document.getElementById('app').innerHTML = html;
}