$(document).ready(function() {

    var minNumber = 19;
    var maxNumber = 120;
    var imgmin = 1;
    var imgmax = 12;
    var show = true;
    var win = 0;
    var loss = 0;
    var score = 0;

    //Setting the random number for score to be matched
    var randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);

    //Setting up the random numbers for the Crystals
    var imgnum1 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
    var imgnum2 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
    var imgnum3 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
    var imgnum4 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);

    //Checking if the random number function works
    // console.log("The number is: "+randomNumber);
    // console.log("The img number1 is: "+imgnum1);
    // console.log("The img number2 is: "+imgnum2);
    // console.log("The img number3 is: "+imgnum3);
    // console.log("The img number4 is: "+imgnum4);

    document.getElementById("compscore").textContent = randomNumber;

    $("button").on("click", function(){

        if(show){
            $("#instruction").hide(1000);
            show = false;
        }else{
            $("#instruction").show(1000);
            show = true;
        }
    });

    function reset(){
        randomNumber = Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
        imgnum1 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
        imgnum2 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
        imgnum3 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
        imgnum4 = Math.floor(Math.random()*(imgmax-imgmin+1)+imgmin);
        score = 0;
        document.getElementById("compscore").textContent = randomNumber;
    }

    $("#1").on("click", function(){
        $(this).fadeOut(100).fadeIn(100);
        score = score+imgnum1;
        if(score==randomNumber){
            win++;
            reset();
        };
        if(score>randomNumber){
            loss++;
            reset();
        };
        document.getElementById("win").textContent = win;
        document.getElementById("loss").textContent =loss;
        document.getElementById("myscore").textContent = score;
    });

    $("#2").on("click", function(){
        $(this).fadeOut(100).fadeIn(100);
        score = score+imgnum2;
        if(score==randomNumber){
            win++;
            reset();
        };
        if(score>randomNumber){
            loss++;
            reset();
        };
        document.getElementById("win").textContent = win;
        document.getElementById("loss").textContent = loss;
        document.getElementById("myscore").textContent = score;
    });

    $("#3").on("click", function(){
        $(this).fadeOut(100).fadeIn(100);
        score = score+imgnum3;
        if(score==randomNumber){
            win++;
            reset();
        };
        if(score>randomNumber){
            loss++;
            reset();
        };
        document.getElementById("win").textContent = win;
        document.getElementById("loss").textContent = loss;
        document.getElementById("myscore").textContent = score;
    });

    $("#4").on("click", function(){
        $(this).fadeOut(100).fadeIn(100);
        score = score+imgnum4;
        if(score==randomNumber){
            win++;
            reset();
        };
        if(score>randomNumber){
            loss++;
            reset();
        };
        document.getElementById("win").textContent = win;
        document.getElementById("loss").textContent = loss;
        document.getElementById("myscore").textContent = score;
    });








    








});
