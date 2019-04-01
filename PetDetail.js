$(document).ready(function(){


    let AvilablePets = [$("#steve"), $("#simon"), $("#katty")];


 let Pet1=AvilablePets[0];
 let Pet2=AvilablePets[1];
 let Pet3=AvilablePets[2];
let Clicked=false;

  Pet1.click(function () {
      CheckPicked(AvilablePets.indexOf(Pet1));
  });

    Pet2.click(function () {
        CheckPicked(AvilablePets.indexOf(Pet2));
    });


    Pet3.click(function () {
        CheckPicked(AvilablePets.indexOf(Pet3));
    });


    function HideAndShow() {
        if(Clicked===false){
            $("#PetId").hide();

        }
        else {
            $("#PetId").show();
        }
    }
    function CheckPicked(number) {
        Clicked = true;
        HideAndShow();
        if(Info=true){
            $("#AdoptainProc").hide();
            $("#PetId").show();
            Info=false;
        }
        if (number == 0) {
            $("#name").html("<h3>Name: Steve</h3>");
            $("#age").html("<h3>Age:2years</h3>");
            $("#food").html("<h3>Favorite food : Caviar</h3>");

            $("#Adress").html("<h3>Adress:dest st kfar qara</h3>");
        }

        if (number == 1) {

                $("#name").html("<h3>Name: Simon</h3>");
                $("#age").html("<h3>Age:2years</h3>");
                $("#food").html("<h3>Favorite food : Fish </h3>");

                $("#Adress").html("<h3>Adress:tel Aviv</h3>");


        }


        if (number == 2) {

            $("#name").html("<h3>Name: Katty</h3>");
            $("#age").html("<h3>Age:1years</h3>");
            $("#food").html("<h3>Favorite food : Meat Balls </h3>");

            $("#Adress").html("<h3>Adress:Nazareth</h3>");


        }

    }

    var Info=false;


    $("#AdoptainProc").hide();
$("#btn").click(function () {
    if(Info===false){
        $("#AdoptainProc").show();
        Info=true;
    }
    $("#PetId").hide();

});

$("#PetId").hide();




});