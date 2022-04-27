function sammichToX(x) {
    x.classList.toggle("change");
};
console.log("run");

var slice = document.getElementById("slices");
var menu = document.getElementById("ddmenu");

$(document).on('click', '.slices', function() {
    slice.classList.toggle("change");

    $('.dd-list').addClass('animate_dd-list');
    console.log("Click");
});