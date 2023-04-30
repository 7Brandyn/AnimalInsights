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
    document.querySelector("#subtitle").innerHTML = "UI Developer";
    document.querySelector("#title-swap").innerHTML = "Brandyn Evans";
    document.querySelector("#para-swap").innerHTML = "Hi, I’m Brandyn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let socialIcons = document.querySelector("#social-icons").innerHTML = "<a href='https://www.linkedin.com/in/brandyn-evans/'><img src='/icons/LinkedIn_icon.svg' alt='LinkedIn' style='width: 48px'></a>";

    var image = document.querySelector("#team-image");
    let teamViewer = document.querySelector("#team-viewer");

    if (image.src.endsWith("teaam.png")) {
        image.src = "img/team/brandyn.png";
        backBtn.style.display = "block"; 
        teamViewer.style.display = "none";
    } else {
        image.src = "/img/teaam.png";
        backBtn.style.display = "none";
    }
}
