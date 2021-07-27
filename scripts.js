var jsonText = '{ "book": [' +
    '{"bookname": "Crimes and Punishment","genre": " Philosophical novel, Psychological fiction","price": "800"  },' +
    '{"bookname": "Adventures of Sherlock Holmes","genre": "Short story, Mystery, Novel, Detective novel, Noir fiction, Crime Fiction","price": "550"},' +
    '{"bookname": "Enough Rope", "genre": "poetry","price": "930"}]}';

var booksObjects = JSON.parse (jsonText);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}
var myModal2 = document.getElementById("myModal2"); 
var books= [];
var items="";

function showCart() {
    items="";
    myModal2.style.display = "block";
    books.forEach(displayItems);
    var resultModal = document.getElementById('myModal2').getElementsByClassName('items')[0];
    resultModal.innerHTML = items;
}

function displayItems(item, index) {
    items += "Book: " + booksObjects.book[Number(item)].bookname +  " Pricess: " + booksObjects.book[Number(item)].price + "<br>"; 
}
var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
    myModal2.style.display = "none";
}

var modal = document.getElementById("myModal");

function addToCart(index) {
    modal.style.display = "block";
    books.push(index);
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

