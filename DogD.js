$(document).ready(function(){

 let Pets =[$("#simon"),$("#steve"),$("#ketty")];

    let Pet1=Pets[0];
    let Pet2=Pets[1];
    let Pet3=Pets[2];
    let Clicked=false;


    Pet1.click(function () {

        CheckPicked(Pets.indexOf(Pet1));
    });

    Pet2.click(function () {
        CheckPicked(Pets.indexOf(Pet2));
    });


    Pet3.click(function () {
        CheckPicked( Pets.indexOf(Pet3));

    });


function HideAndShow() {

    if (Clicked === false) {
        $("#PetId").hide();

    }
    else {
        $("#PetId").show();
    }

    Clicked = true;
}
HideAndShow();

function  CheckPicked(number) {
HideAndShow();
$("#AdoptainProc").hide();

    if (number == 0) {
        $("#nameD").html("<h3>Name: Steve</h3>");
        $("#ageD").html("<h3>Age:2years</h3>");
        $("#foodD").html("<h3>Favorite food : Caviar</h3>");

        $("#AdressD").html("<h3>Adress:dest st kfar qara</h3>");
    }

    if (number == 1) {

        $("#nameD").html("<h3>Name: Simon</h3>");
        $("#ageD").html("<h3>Age:2years</h3>");
        $("#foodD").html("<h3>Favorite food : Fish </h3>");

        $("#AdressD").html("<h3>Adress:tel Aviv</h3>");


    }



    if (number == 2) {

        $("#nameD").html("<h3>Name: Katty</h3>");
        $("#ageD").html("<h3>Age:1years</h3>");
        $("#foodD").html("<h3>Favorite food : Meat Balls </h3>");

        $("#AdressD").html("<h3>Adress:Nazareth</h3>");


    }
}

let info=false;
$("#AdoptainProc").hide();
$("#btn").click(function () {
   if(info===false){
      $("#AdoptainProc").show();
      $("#PetId").hide();
   }
});


});