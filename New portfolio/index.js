$(".smallscreen").click(function() {
    $(".dropdiv").toggleClass("mymenu")
    console.log("clicked")
});
$(".dropdiv button").click(function(){
    $(".search").toggleClass("searchbox")
    console.log("i was clicked")
})
