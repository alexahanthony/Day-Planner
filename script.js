$(document).ready(function () {
    //for current time display in header
    var currentTime = moment().format('llll')
    //for current time to be compared against the left-hand time display
    var calendarTime = parseInt(moment().format('HH'));
    //for current time display in header
    $(".time-bar").text(currentTime);
    //when "save" button is clicked, value from user in the input box is saved to local storage
    $(".btn").on("click", function () {
        var myValue = $(this).prev().attr('id')
        var myInput = $(this).prev().val();
        localStorage.setItem(myValue, myInput);
    })
    //on page load, check to see if current time is equal to time bar on left or before/after and change color if so
    $(".input-group-text").each(function () {
        if (parseInt($(this).attr('id')) < calendarTime) {
            $(this).next().css("background-color", "#d3d3d3");
            $(this).next().css("border-color", "grey");
        } else if (parseInt($(this).attr('id')) > calendarTime) {
            $(this).next().css("background-color", "#b8d1e5");
            $(this).next().css("border-color", "grey");
        } else if (parseInt($(this).attr('id')) == calendarTime) {
            $(this).next().css("background-color", "#cfbedc");
            $(this).next().css("border-color", "grey");
        }
        //calling values from local storage back into input fields even after refresh page
        $(this).next().val(localStorage.getItem($(this).next().attr('id')))
    });

})
