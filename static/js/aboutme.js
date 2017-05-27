$("document").ready(function(){
    var name ;
    if( name = window.location.search.split("name=")[1] ){
        console.log(name);
        $("#name").text(name);
    }
});