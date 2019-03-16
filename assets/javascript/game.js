function getComputerGuess() {
    var computerGuess = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    return computerGuess

}


$(document).ready(function () {



    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //var targetNumber=0;
    var red =0;
    var white =0;
    var blue= 0;
    var green= 0;


    var computerGuess = getComputerGuess();
    $("#targetNumber").text(computerGuess);


    var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
    var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
    var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
    var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);
    $(".red").attr("data-crystalValue", stone1);
    $(".white").attr("data-crystalValue",stone2);
    $(".blue").attr('data-crystalValue', stone3);
    $(".green").attr('data-crystalValue', stone4);

    function reset() {

        // we need to reset
        // 1. totalScore -DONE
        // 2. computerGuess -DONE
        // 3. stone1,2,3,4 - DONE

        console.log("reset");
        totalScore=0;
        $("#totalScore").text(totalScore);

        //GET NEW RANDOM NUMBER AGAIN
        computerGuess = getComputerGuess();
        $("#targetNumber").text(computerGuess);

        stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
        stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
        stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
        stone4 = parseInt(Math.floor(Math.random() * 12) + 1);
        $(".red").attr("data-crystalValue", stone1);
        $(".white").attr("data-crystalValue",stone2);
        $(".blue").attr('data-crystalValue', stone3);
        $(".green").attr('data-crystalValue', stone4);

        // console.log(computerGuess);
        // console.log(stone1);
        // console.log(stone2);
        // console.log(stone3);
        // console.log(stone4);
    }


    $(".red").on("click", function () {
        //console.log(totalScore + ", "+computerGuess);
        var crystalValue = parseInt($(this).attr("data-crystalValue"));
        totalScore  += crystalValue;

        $("#totalScore").text(totalScore);
         console.log(totalScore + ", "+computerGuess);
        if (totalScore == computerGuess) {
            wins++;
            $("#wins").text(wins);
            reset()

        } else if (totalScore > computerGuess) {
            losses++;
            $("#losses").text(losses);
            reset()
            //reset();
        }

    });


    $(".white").on("click", function () {
        var crystalValue = parseInt($(this).attr("data-crystalValue"));
        totalScore  += crystalValue;

        $("#totalScore").html(totalScore);
        //console.log(totalScore);

        if (totalScore == computerGuess) {
            wins++;
            $("#wins").text(wins);
            reset();

        } else if (totalScore > computerGuess) {
            losses++;
            $("#losses").text(losses);
            reset()

        }

    });


    $(".blue").on("click", function () {
        var crystalValue = parseInt($(this).attr("data-crystalValue"));
        totalScore  += crystalValue;

        $("#totalScore").html(totalScore);
        //console.log(totalScore);

        if (totalScore == computerGuess) {
            wins++;
            $("#wins").text(wins);
            reset();

        } else if (totalScore > computerGuess) {
            losses++;
            $("#losses").text(losses);
            reset()

        }

    });


    $(".green").on("click", function () {
        var crystalValue = parseInt($(this).attr("data-crystalValue"));
        totalScore  += crystalValue;

        $("#totalScore").html(totalScore);
        //console.log(totalScore);

        if (totalScore == computerGuess) {
            wins++;
            $("#wins").text(wins);
            reset();

        } else if (totalScore > computerGuess) {
            losses++;
            $("#losses").text(losses);
            reset()

        }

    });
    //testing all random number
    console.log("computerGuess" + computerGuess);
    console.log("stone1 " + stone1);
    console.log("stone2 " + stone2);
    console.log("stone3 " + stone3);
    console.log("stone4 " + stone4);
});














 //$(".crystal").on("click",function() {
//  var crystalValue = $(this).attr("crystalValue");
//score = score + crystal;
// $("#totalScore").text(totalScore);


// wins and losses
//function checkifwon() {
//
/*     if (totalScore === computerGuess) {

        wins++;
        $("#wins").text("You Win");
        $("#wins").text("wins: " + wins);
        reset();
    } else if (score > computerGuess) {

        lost++;
        console.log(lost);
        $("#wins").text("You Lost");
        $("#loses").text("Lost: " + lost);
        reset();
    } */
