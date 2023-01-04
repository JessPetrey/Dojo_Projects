// jquery! 
$(document).ready(function(){
    $("#pets").on({
        mouseenter: function(){
            $(this).attr({
                "src": "images/Nixon-1.jpeg",
                "alt": "black Great Dane"
            });
        }, 
        mouseleave: function(){
            $(this).attr({
                "src": "images/Hime-1.jpeg",
                "alt": "fluffy white cat"
            });
        }, 
    });
});