$(document).ready(function(){
    $("#design").click(function(){
        $("#des1").toggle();
        $("#img1").toggle();
    });
    $("#development").click(function(){
        $("#des2").toggle();
        $("#img2").toggle();
    });
    $("#product").click(function(){
        $("#des3").toggle();
        $("#img3").toggle();
    });
    
    $(".word1").hide();
    $(".img1").animate({
        opacity:1
    });
    $('.img1').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word1").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word1").fadeOut();
    });
    $(".word2").hide();
    $(".img2").animate({
        opacity:1
    });
    $('.img2').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word2").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word2").fadeOut();
    });
    $(".word3").hide();
    $(".img3").animate({
        opacity:1
    });
    $('.img3').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word3").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word3").fadeOut();
    });
    $(".word4").hide();
    $(".img4").animate({
        opacity:1
    });
    $('.img4').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word4").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word4").fadeOut();
    });
    $(".word5").hide();
    $(".img5").animate({
        opacity:1
    });
    $('.img5').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word5").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word5").fadeOut();
    });
    $(".word6").hide();
    $(".img6").animate({
        opacity:1
    });
    $('.img6').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word6").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word6").fadeOut();
    });
    $(".word7").hide();
    $(".img7").animate({
        opacity:1
    });
    $('.img7').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word7").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word7").fadeOut();
    });
    $(".word8").hide();
    $(".img8").animate({
        opacity:1
    });
    $('.img8').hover(function() {
        $(this).stop().animate({opacity:0.5},200);
        $(".word8").fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},200)
        $(".word8").fadeOut();
    });
    $("button").click(function(){
        var name=$("#Name").val();
        alert(name + ", We have received your message. Thank you for reaching out to us.");
    });
});