//linkedIn XD

function contactStetson() {
    let html = `
        <div id="popup-window" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid black;">
            <h1>Contact Stetson:</h1>
            <p>
            Email: stetson.dubberly@valentpartners.com<br>
            Phone: <br>
            LinkedIn: <a href=https://www.linkedin.com/in/stetsondubberly/">Click Here</a><br>
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
        Email: arcastellanos@crimson.ua.edu<br>
        Phone: <br>
        LinkedIn: <a href="https://www.linkedin.com/in/rebecacastellanos/">Click Here</a><br>
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
        Email: lsbollinger@crimson.ua.edu<br>
        Phone: <br>
        LinkedIn: <a href="https://www.linkedin.com/in/logan-bollinger/">Click Here</a><br>
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
        Email: kbgucius@crimson.ua.edu<br>
        Phone: (630) 891-1595<br>
        LinkedIn: <a href="https://www.linkedin.com/in/kotrynagucius/">Click Here</a><br>
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
        Email: ammcclinton@crimson.ua.edu<br>
        Phone: <br>
        LinkedIn: <a href="https://www.linkedin.com/in/abby-mcclinton/">Click Here</a><br>
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
        Email: sdshaw1@crimson.ua.edu<br>
        Phone: <br>
        LinkedIn: <a href="https://www.linkedin.com/in/savanna-shaw-b9026b232/">Click Here</a><br>
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


