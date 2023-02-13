

//menu drag down
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarCollapse");

navbarToggler.addEventListener("click", function() {
  navbarCollapse.classList.toggle("show");
});






//navigation drop menu

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".nav-item.dropdown");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    dropdown.addEventListener("click", function(e) {
      e.preventDefault();
      dropdownMenu.classList.toggle("show");
    });
  
    // add click event listener to the dropdown menu items
    const dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        // redirect to the page when the item is clicked
        window.location.href = this.getAttribute("href");
      });
    });
  });

  //appointment button

  
  const showDetailsButton = document.querySelector('#show-details-button');
  const details = document.querySelector('#details');

  showDetailsButton.addEventListener('click', function() {
    if (details.style.display === 'none') {
      details.style.display = 'block';
      showDetailsButton.textContent = 'Hide Details';
    } else {
      details.style.display = 'none';
      showDetailsButton.textContent = 'Show Details';
    }
  });



  
 



//accordion

const accordion = document.getElementById("accordion");
const cards = accordion.querySelectorAll(".card");

for (const card of cards) {
  const header = card.querySelector(".card-header");
  const collapse = card.querySelector(".collapse");
  
  header.addEventListener("click", function() {
    const expanded = this.getAttribute("aria-expanded") === "true";
    for (const otherCard of cards) {
      const otherCollapse = otherCard.querySelector(".collapse");
      otherCollapse.classList.remove("show");
      otherCard.querySelector(".card-header").setAttribute("aria-expanded", "false");
    }
    collapse.classList[expanded ? "remove" : "add"]("show");
    this.setAttribute("aria-expanded", !expanded);
  });
}
 //sending appointment

   document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    // sending email
    window.open("mailto:simonmulu7@gmail.com?subject=" + subject + "&body=" + message + "%0D%0A%0D%0AName: " + name + "%0D%0AEmail: " + email);
  });
  

  


  