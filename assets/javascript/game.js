$(document).ready(function () {

	function genNumber(min, max) {
		return Math.floor((Math.random() * max) + min);
	}
	
	var firstGemNumber = genNumber(1, 12);
	var secondGemNumber = genNumber(1, 12);
	var thirdGemNumber = genNumber(1, 12);
	var fourthGemNumber = genNumber(1, 12);;
	var randomNumber = genNumber(18, 120);
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	function startGame() {

		randomNumber = genNumber(18, 120 - 18);
		firstGemNumber = genNumber(1, 12);
		secondGemNumber = genNumber(1, 12);
		thirdGemNumber = genNumber(1, 12);
		fourthGemNumber = genNumber(1, 12);
		$(".randomNumber").html(randomNumber);
		totalScore = 0;
		$(".total").html(totalScore);

	}
	startGame()

	function checkNumber() {

		if (totalScore === randomNumber) {
			wins++;
			$("#wins").html(wins);
			startGame();
		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html(losses);
			startGame();
		} //console.log(totalScore  ,  randomNumber)
	} 

	$(".gem1").on("click", function () {
		totalScore = totalScore + firstGemNumber;
		$(".total").html(totalScore);
		checkNumber();
	})
	$(".gem2").on("click", function () {
		totalScore = totalScore + secondGemNumber;
		$(".total").html(totalScore);
		checkNumber();
	})
	$(".gem3").on("click", function () {
		totalScore = totalScore + thirdGemNumber;
		$(".total").html(totalScore);
		checkNumber();
	})
	$(".gem4").on("click", function () {
		totalScore = totalScore + fourthGemNumber;
		$(".total").html(totalScore);
		checkNumber();
	})
	$(".randomNumber").ready(function () {
		$(".randomNumber").html(randomNumber);
	})

})