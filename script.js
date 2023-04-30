$('.navbar-toggle').on('click', function() {
    $('.navbar-links').slideToggle();
});

$(function(){
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html"); 
});

var backBtn = document.getElementById("back-btn");
backBtn.style.display === "none";

function brandyn() {
    document.querySelector("#title-swap").innerHTML = "Brandyn Evans";
    document.querySelector("#para-swap").innerHTML = "This is a test";
    document.querySelector("#social-icons").innerHTML = "<a href='google.com'>https://google.com</a>";

    var image = document.querySelector("#team-image");
    let teamViewer = document.querySelector("#team-viewer");

    if (image.src.endsWith("teaam.png")) { // replace "original-image.png" with the current source of your image
        image.src = "img/team/brandyn.png"; // replace "new-image.png" with the path to the image you want to replace it with
        backBtn.style.display = "block"; 
        teamViewer.style.display = "none";

    } else {
        image.src = "teaam.png";
        backBtn.style.display = "none";
    }
}