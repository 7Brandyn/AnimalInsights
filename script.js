$('.navbar-toggle').on('click', function() {
    $('.navbar-links').slideToggle();
});

$(function(){
    $("#nav-placeholder").load("components/nav.html");
    $("#footer-placeholder").load("components/footer.html"); 
});