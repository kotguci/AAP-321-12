
async function handleOnLoad() {
    await slideShow();
    showSlides();
 }
 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n === undefined) {
        n = slideIndex; 
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
 
 function slideShow() {
     let html = `
     <div class="slideshow-container">
 
     <div class="mySlides fade">
         <div class="numbertext">1 / 3</div>
         <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D" style="width: 100%">
     </div>
 
     <div class="mySlides fade">
         <div class="numbertext">2 / 3</div>
         <img src="https://media.istockphoto.com/id/1217408094/photo/stray-beautiful-dog-lean-out-from-cage-and-looking-at-human-dog-abandoned-in-shelter-and.jpg?s=612x612&w=0&k=20&c=TnnfM4WkFORNsK02MKNyji_QJbExT2JhjySXE1ByTyI=" style="width: 100%">
     </div>
 
     <div class="mySlides fade">
         <div class="numbertext">3 / 3</div>
         <img src="https://dogtime.com/wp-content/uploads/sites/12/2012/05/before-adopt-prepare-animal-shelter-dog-1.jpg?w=760" style="width: 100%">
     </div>
 
     <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
     <a class="next" onclick="plusSlides(1)">&#10095;</a>
     </div>
     <br>
 
     <div style="text-align:center">
     <span class="dot" onclick="currentSlide(1)"></span>
     <span class="dot" onclick="currentSlide(2)"></span>
     <span class="dot" onclick="currentSlide(3)"></span>
     </div>
     `;
 
     document.getElementById('app').innerHTML = html;
 }

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
     showSlides(slideIndex = n);
 }
 