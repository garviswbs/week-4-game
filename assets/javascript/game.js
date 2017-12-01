//Good Guy Objects
var lukeMe =  {
    title: "Luke Skywalker",
    hp: 2000,
    ap: 50}
var obiMe = {
    title: "Obi-Wan",
    hp: 3000,
    ap: 50}
var vaderMe = {
    title: "Darth Vader",
    hp: 4000,
    ap: 50}
var empMe = {
    title: "Emperor Palpatine",
    hp: 5000,
    ap: 50}

//Bad Guy Objects
var lukeBad =  {
    title: "Luke Skywalker",
    hp: 2000,
    ap: 50}
var obiBad= {
    title: "Obi-Wan",
    hp: 3000,
    ap: 50}
var vaderBad = {
    title: "Darth Vader",
    hp: 4000,
    ap: 50}
var empBad = {
    title: "Emperor Palpatine",
    hp: 5000,
    ap: 50}

    //Good Guy Selection
function whoAmI(personMe){
    if (personMe === "lukeMe"){
        $('.hitPoints').text(lukeMe.hp);
        $('.chosenMe').text(lukeMe.title);
        //fadeToggle
        $('p.obiMe').fadeToggle("slow");
        $('p.vaderMe').fadeToggle("slow");
        $('p.empMe').fadeToggle("slow");
        $('p.lukeBad').fadeToggle("slow"); 
          }  
    else if (personMe === "obiMe"){
        $('.hitPoints').text(obiMe.hp);
        //console.log("I am " + person);
        $('.chosenMe').text(obiMe.title);
        //fadeToggle
        $('p.lukeMe').fadeToggle("slow");
        $('p.vaderMe').fadeToggle("slow");
        $('p.empMe').fadeToggle("slow");
        $('p.obiBad').fadeToggle("slow");   
    }   
    else if (personMe === "vaderMe"){
        $('.hitPoints').text(vaderMe.hp);
        $('.chosenMe').text(vaderMe.title);
        //console.log("I am " + person);
        //fadeToggle
        $('p.obiMe').fadeToggle("slow");
        $('p.lukeMe').fadeToggle("slow");
        $('p.empMe').fadeToggle("slow");
        $('p.vaderBad').fadeToggle("slow");   
    }
    else if (personMe === "empMe"){
        $('.hitPoints').text(empMe.hp);
        $('.chosenMe').text(empMe.title);
        //console.log("I am " + person);
        //fadeToggle
        $('p.obiMe').fadeToggle("slow");
        $('p.vaderMe').fadeToggle("slow");
        $('p.lukeMe').fadeToggle("slow");
        $('p.empBad').fadeToggle("slow");    
    }
}

/*function whoBad(person){
    if(person === "vaderBad"){
        $('.hitPointsBad').text(vaderBad.hp);
        $('.chosenBad').text(vaderBad.title);
    }
}*/

function whoBad(personBad){
    if (personBad === "lukeBad"){
        $('.hitPointsBad').text(lukeBad.hp);
        $('.chosenBad').text(lukeBad.title);
        //fadeToggle
        $('p.obiBad').fadeToggle("slow");
        $('p.vaderBad').fadeToggle("slow");
        $('p.empBad').fadeToggle("slow");
          }  
    else if (personBad === "obiBad"){
        $('.hitPointsBad').text(obiBad.hp);
        //console.log("I am " + person);
        $('.chosenBad').text(obiBad.title);
        //fadeToggle
        
        $('p.vaderBad').fadeToggle("slow");
        $('p.empBad').fadeToggle("slow");
        $('p.obiBad').fadeToggle("slow");   
    }   
    else if (personBad === "vaderBad"){
        $('.hitPointsBad').text(vaderBad.hp);
        $('.chosenBad').text(vaderBad.title);
        //console.log("I am " + person);
        //fadeToggle
        $('p.obiBad').fadeToggle("slow");
        $('p.lukeBad').fadeToggle("slow");
        $('p.empBad').fadeToggle("slow");
        $('p.vaderBad').fadeToggle("slow");   
    }
    else if (personBad === "empBad"){
        $('.hitPointsBad').text(empBad.hp);
        $('.chosenBad').text(empBad.title);
        //console.log("I am " + person);
        //fadeToggle
        $('p.obiBad').fadeToggle("slow");
        $('p.vaderBad').fadeToggle("slow");
        $('p.lukeBad').fadeToggle("slow");
        $('p.empBad').fadeToggle("slow");
    }
}

function calculateAttack (num){
    console.log(num);
  //  if (luke.hp > )
}

//pass good player info
$('.topRow p').on('click', function(){
    var playerMe = $(this).attr('data-player');
    $('.chosenMe').text(playerMe);
    whoAmI(playerMe);
});

//pass bad player info 
$('.botRow p').on('click', function(){
    var playerBad = $(this).attr('data-player');
    $('.chosenBad').text(playerBad);
    whoBad(playerBad);
});



//$('button').on('click', function(){
    //var randomHP = Math.floor((Math.random() * 100) +1);
   // console.log(randomHP);

   // function calculateAttack(randomHP);
//});
