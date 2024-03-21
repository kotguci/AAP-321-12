let subjectUrl = 'http://localhost:5161/api/Pets'
let myPets= []

async function getData(){

    let response = await fetch(subjectUrl)
    let data = await response.json()
    myMovies = data
    console.log(myMovies)

}

async function handleOnLoad(){
    await getData()
}