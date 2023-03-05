// animate smooth scroll





$('#view_work').click(function(){
    const images = $("#images").position().top;
    $("html, body").animate({ scrollTop: images }, 900);
    return false;
});