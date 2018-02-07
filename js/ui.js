//tab changer

function openTab(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].style.color = "white";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    document.getElementById(name).style.color = "black";
    document.getElementById(evt).className += " active";
}

$("#home").on("swipeleft",function(){
 openTab('projectsButton', 'projects');
});

$("#projects").on("swipeleft",function(){
 openTab('docsButton', 'docs');
});

$("#docs").on("swiperight",function(){
 openTab('projectsButton', 'projects');
});

$("#projects").on("swiperight",function(){
 openTab('homeButton', 'home');
});

$("#openControls").click(function(){
    $("#controller").animate({
        top: '0px',
        opacity: '1'
    },"slow");
}); 

$("#controllerDown").click(function(){
    $("#controller").animate({
        top: '100vh',
        opacity: '1'
    },"slow");
}); 