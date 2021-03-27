/**
 * Function:: Anonymous
 * Use:: To Create New Google Meet
 */
$(document).ready(function(){
    $('#new').click( function(){
        //New Meeting Requested
        window.open("https://meet.google.com/getalink?hs=202&authuser=0","_blank");
    });
});
