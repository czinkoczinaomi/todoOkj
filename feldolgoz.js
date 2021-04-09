$(document).ready(function()
{
    $("#add").on("click", adatBeir);
    $('section').delegate('img','click', torles);
});
var todok=[];
var torlesId=0;
var keszId=0;
function torles(){
    
    console.log("törlés");
}
function listabaIr(){
    console.log("valami");
   var listaElem = $("#todo").val()+" "+$("#datum").val();
   $("section").append("<li>"+listaElem +"<img src='kepek/delete.ico' id='t"+torlesId+"'><img src='kepek/pipa.png' id='k"+keszId+"'></li>");
   torlesId++;
   keszId++;
}
function adatBeir(){
     var todo={
     todo: $("#todo").val(),
     datum: $("#datum").val()
};
   //elküldjük a phpnek az adatokat
   $.ajax({
        type: "POST",
        url: "beir.php",
        data: todo,
        success: function(ujTodo){
            console.log(ujTodo);
            todok.push(JSON.parse(ujTodo));
            console.log(todok);
            listabaIr();
        },
        error: function(){
            alert("Hiba az adatok metésekor!");
        }
    });
    
}

