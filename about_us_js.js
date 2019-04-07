$(document).ready(function(){
    let img_list = ["img_galry/kareem (1).jpg","img_galry/rani3.1.jpg","img_galry/yuval2.0.jpg","img_galry/siwar.jpg"];
    let text_list = ["Kareem","Rani","Yuval","Siwar"];
    let curr_team_member = 0;
    $("#next").click(function(){
        curr_team_member += 1;
        curr_team_member =curr_team_member % 4;
        $("#")
    });


});