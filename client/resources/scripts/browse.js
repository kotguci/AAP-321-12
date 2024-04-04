let shelterUrl = 'http://localhost:5161/api/Shelters';
let myShelters = []


function handleOnLoad(){
     
     populateCards()
}

async function getAllShelters(){
    let response = await fetch(shelterUrl);
    myShelters = await response.json();
    console.log(myShelters);
}

async function populateCards(){
    await getAllShelters()

    let html = ''
     myShelters.forEach(function(shelters){

    html += `
        <div class="petCard" style="width: 18rem;">
                <div class="card-body">
                 <h5 class="card-title">${shelters.name}</h5>
                <p class="card-text">City: ${shelters.shelterCity}\nState: ${shelters.shelterState}     Address: ${shelters.shelterAddress}\n</p>

            <a href="#" class="btn btn-primary">Go somewhere</a>
            
        </div>`
    })
    console.log(html)
    document.getElementById('app').innerHTML = html;
}