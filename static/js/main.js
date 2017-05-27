$("document").ready(function(){
    var name ;
    if( name = window.location.search.split("name=")[1] ){
        window.location = "/aboutme.html?name=" + name;
    }
});