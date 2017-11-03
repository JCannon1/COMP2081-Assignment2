// Carousel JavaScript
$('.carousel').carousel({
    interval: 3000
  })
  
// Tabs JavaScript 
function openInfo(e, infoName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Hide all class="tabcontent" elements 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove all class="tablinks" elements active class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab by using an active class 
    document.getElementById(infoName).style.display = "block";
    e.currentTarget.className += " active";
}
