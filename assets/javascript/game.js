//Good Guy Objects
var lukeMe =  {
    title: "Luke Skywalker",
    hp: 100,
    ap: 10
    }
var obiMe = {
    title: "Obi-Wan",
    hp: 100,
    ap: 20}
var vaderMe = {
    title: "Darth Vader",
    hp: 100,
    ap: 30}
var empMe = {
    title: "Emperor Palpatine",
    hp: 100,
    ap: 40}

//Bad Guy Objects
var lukeBad =  {
    title: "Luke Skywalker",
    hp: 100,
    ap: 10}
var obiBad= {
    title: "Obi-Wan",
    hp: 100,
    ap: 15}
var vaderBad = {
    title: "Darth Vader",
    hp: 100,
    ap: 30}
    
var empBad = {
    title: "Emperor Palpatine",
    hp: 100,
    ap: 40}

var selectedBadHealth; 
var selectedGoodHealth; 
//var personBad;
var selectedBadAP ;
var selectedGoodAp ;
        
    //Good Guy Selection - 1.Luke / 2.Obi / 3.Vader / 4.Emp
function whoAmI(personMe){
    
    if (personMe === "lukeMe"){
        selectedGoodHealth = lukeMe.hp;
        selectedGoodAP = lukeMe.ap;
        $('.healthPointsGood').text(selectedGoodHealth);
        $('.chosenMe').text(lukeMe.title);

        $('p.obiMe, p.vaderMe, p.empMe, p.lukeBad').hide();
        $('p.obiBad , p.empBad , p.vaderBad').show();
    }
    
    else if (personMe === "obiMe"){
        selectedGoodHealth = obiMe.hp;
        selectedGoodAP = obiMe.ap;
        $('.healthPointsGood').text(selectedGoodHealth);
        $('.chosenMe').text(obiMe.title);
        
        $('p.lukeMe, p.vaderMe, p.empMe, p.obiBad').hide();
        $('p.lukeBad , p.empBad , p.vaderBad').show();
    }

    else if (personMe === "vaderMe"){
        selectedGoodHealth = vaderMe.hp;        
        selectedGoodAP = vaderMe.ap;        
        $('.healthPointsGood').text(selectedGoodHealth);
        $('.chosenMe').text(vaderMe.title);
    
        $('p.obiMe, p.lukeMe , p.empMe , p.vaderBad').hide();
        $('p.obiBad , p.empBad , p.lukeBad').show(); 
    }

    else if (personMe === "empMe"){
        selectedGoodHealth = empMe.hp; 
        selectedGoodAP = empMe.ap;
        $('.healthPointsGood').text(selectedGoodHealth);
        $('.chosenMe').text(empMe.title);
 
        $('p.obiMe , p.vaderMe , p.lukeMe , p.empBad').hide(); $('p.obiBad , p.lukeBad , p.vaderBad').show();
    }
};


    //Bad Guy Selection - 1.Luke / 2.Obi / 3.Vader / 4.Emp
function whoBad(personBad){
    //console.log(personBad)
    if (personBad === "lukeBad"){
        selectedBadHealth = lukeBad.hp;
        selectedBadAP = lukeBad.ap;
        $('.healthPointsBad').text(lukeBad.hp);
        $('.chosenBad').text(lukeBad.title);
        //fadeToggle
        $('p.obiBad , p.vaderBad , p.empBad').hide();
    }  

    else if (personBad === "obiBad"){
        selectedBadHealth = obiBad.hp;
        selectedBadAP = obiBad.ap;        
        $('.healthPointsBad').text(obiBad.hp);
        //console.log("I am " + person);
        $('.chosenBad').text(obiBad.title);
        //fadeToggle
        $('p.lukeBad , p.vaderBad , p.empBad').hide();

    }   
    else if (personBad === "vaderBad"){
        selectedBadHealth = vaderBad.hp;
        $('.healthPointsBad').text(vaderBad.hp);
        $('.chosenBad').text(vaderBad.title);
        $('p.obiBad , p.empBad, p.lukeBad').hide();
    }

    else if (personBad === "empBad"){
        selectedBadHealth = empBad.hp;
        selectedBadAP = empBad.ap;        
        $('.healthPointsBad').text(empBad.hp);
        $('.chosenBad').text(empBad.title);
        $('p.obiBad, p.vaderBad , p.lukeBad').hide();
    }
}


    // Define Good Guy
$('.topRow p').on('click', function(){
    var playerMe = $(this).attr('data-player');
    $('.chosenMe').text(playerMe);
    whoAmI(playerMe);
});

    //  Define Bad Guy  
$('.botRow p').on('click', function(){
    var playerBad = $(this).attr('data-player');
    $('.chosenBad').text(playerBad);
    whoBad(playerBad);
});


$('button').on('click', function (){
    if(selectedBadHealth>0 && selectedGoodHealth>0){
        selectedGoodHealth -= selectedBadAP;
        selectedBadHealth -= selectedGoodAP;
        selectedGoodAP += 6;    
        $('.healthPointsGood').text(selectedGoodHealth);
        $('.healthPointsBad').text(selectedBadHealth);
       // if (selectedBadHealth<0){alert('win')}
       // else(selectedGoodHealth<0){alert('lose')}
    }


  //You Win Round #1
    else if (selectedBadHealth<0){
        
        console.log(personBad);
        //$(personBad).hide();
        //$('p.empBad , p.vaderBad').show();
    }

    //You Lose
    else if (selectedGoodHealth<0){
        alert("THE FORCE IS NOT WITH YOU....")
    }
});
