$(document).ready(function() {

function genNumber(min, max) {
	return Math.floor((Math.random() * max) + min);
}
	

	var	firstGemNumber = genNumber(1, 12);	
	var	secondGemNumber =  genNumber(1, 12);
	var	thirdGemNumber =  genNumber(1, 12);
	var	fourthGemNumber = genNumber(1, 12);;
	var randomNumber = genNumber(18, 120);
	var totalScore = 0;
	var wins = 0;
	var losses = 0;



	$(".gem1").on("click", function(){
		totalScore = totalScore + firstGemNumber;
		$(".total").html(totalScore);
	})
	$(".gem2").on("click", function(){
		totalScore = totalScore + secondGemNumber;
		$(".total").html(totalScore);
	})
	$(".gem3").on("click", function(){
		totalScore = totalScore + thirdGemNumber;
		$(".total").html(totalScore);
	})
	$(".gem4").on("click", function(){
		totalScore = totalScore + fourthGemNumber;
		$(".total").html(totalScore);
	})
	// create a random number between 19 and 120
	$(".randomNumber").ready(function(){
		randomNumber = Math.floor((Math.random() * 120) + 19);
		$(".randomNumber").html(randomNumber);
	})

	$(".total").ready(function(){
	
	})
	if (totalScore === randomNumber) {
		wins++;
		$(".wins").html(wins++)
	} else {
		losses++;
		$(".losses").html(losses++);
	}
})