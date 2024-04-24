//linkedIn XD
function handleOnLoad(){
    Faq();
}

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

function Faq(){

    var faqQuesAns = [
        {"ques": "Is Adopt a Pet nonprofit?", "ans": `Yes, Adopt a Pet is indeed a nonprofit organization.`},
        {"ques": "Can I volunteer at Adopt a Pet?", "ans": `Absolutely! Adopt a Pet welcomes volunteers to help with various tasks such as animal care, fundraising events, and administrative duties. Volunteering is a rewarding way to support our mission.`},
        {"ques": "What should I do if I find a stray animal?", "ans": `If you find a stray animal, please contact Adopt a Pet or your local animal control agency. We can assist in reuniting lost pets with their owners or finding them a new home if necessary.`}
    ];
    var fsec = "";
    faqQuesAns.map((f, i) => {
        fsec += `<div id="${i}" style="border-radius: 5px; box-shadow: 0 0 5px #c5c5c5; padding: 0.5rem; cursor: pointer;">
            <div class="ques" onclick="showAns()">
                <p class="ques-text">${f.ques}</p>
                <p style="filter: invert(1);">➕</p>
            </div>
            <div class="ans">${f.ans}</div>
        </div>`;
    });

    document.getElementById("faqQues").innerHTML = fsec;
    var qsec = document.getElementsByClassName("ques");
    for (var i = 0; i < faqQuesAns.length; i++) {
        qsec[i].addEventListener("click", function () {
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }

}
