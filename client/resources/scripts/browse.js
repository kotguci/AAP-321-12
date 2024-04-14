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

    let html = '<div class="locationCardContainer">'
    myShelters.forEach(function(shelters){
        html += `
            <div class="locationCard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${shelters.name}</h5>
                    <p class="card-text">
                        City: ${shelters.shelterCity}<br>
                        State: ${shelters.shelterState}<br>
                        Address: ${shelters.shelterAddress}<br>
                    </p>
                    <a href="#" class="btn btn-danger">View ${shelters.name}</a>
                </div>
            </div>`
    })
    html += '</div>'
    console.log(html)
    document.getElementById('app').innerHTML = html;
}