//linkedIn XD

function contactStetson() {
    let html = `
        <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
            <h1>Contact Stetson:</h1>
            <p>
            Email: <br>
            Phone: <br>
            LinkedIn: <br>
            </p>
            <button id="close-button" class="btn btn-danger">Close</button>
    </div>  
    `
    document.body.insertAdjacentHTML('beforeend', html)
    document.getElementById('close-button').addEventListener('click', hidePopup)
}

function contactRebeca() {
    let html = `
    <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
        <h1>Contact Rebeca:</h1>
        <p>
        Email: <br>
        Phone: <br>
        LinkedIn: <br>
        </p>
        <button id="close-button" class="btn btn-danger">Close</button>
        </div>  
        `
        document.body.insertAdjacentHTML('beforeend', html)
        document.getElementById('close-button').addEventListener('click', hidePopup)
}

function contactLogan() {
    let html = `
    <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
        <h1>Contact Logan:</h1>
        <p>
        Email: <br>
        Phone: <br>
        LinkedIn: <br>
        </p>
        <button id="close-button" class="btn btn-danger">Close</button>
    </div>  
    `
    document.body.insertAdjacentHTML('beforeend', html)
    document.getElementById('close-button').addEventListener('click', hidePopup)
}

function contactKotryna() {
    let html = `
    <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
        <h1>Contact Kotryna:</h1>
        <p>
        Email: <br>
        Phone: <br>
        LinkedIn: <br>
        </p>
        <button id="close-button" class="btn btn-danger">Close</button>
        </div>  
        `
        document.body.insertAdjacentHTML('beforeend', html)
        document.getElementById('close-button').addEventListener('click', hidePopup)
}

function contactAbby() {
    let html = `
    <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
        <h1>Contact Abby:</h1>
        <p>
        Email: <br>
        Phone: <br>
        LinkedIn: <br>
        </p>
        <button id="close-button" class="btn btn-danger">Close</button>
    </div>  
    `
    document.body.insertAdjacentHTML('beforeend', html)
    document.getElementById('close-button').addEventListener('click', hidePopup)
}

function contactSavanna() {
    let html = `
    <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
        <h1>Contact Savanna:</h1>
        <p>
        Email: <br>
        Phone: <br>
        LinkedIn: <br>
        </p>
        <button id="close-button" class="btn btn-danger">Close</button>
    </div>  
    `
    document.body.insertAdjacentHTML('beforeend', html)
    document.getElementById('close-button').addEventListener('click', hidePopup)
}


function hidePopup() {
    document.getElementById('popup-window').style.display = 'none';
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('close-button').addEventListener('click', hidePopup);
    });
}


