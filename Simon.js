	
// MAIN JS FILE

//VARIABLES
var winCounter = 0;
var options =["red","green","blue","yellow"];
var userGuess = [];
var computerGuess = [];
var counterClicks =0;

function computerChoice(){
	computerGuess += options[Math.floor(Math.random()*options.length)];
};

function reset (){
	winCounter = 0;
	userGuess;
	computerGuess = [];
};

function compareInput(){
	if(computerGuess[counterClicks] !== userGuess[counterClicks]){
		alert("FAIL!");
		reset();
	}
};


	$("#start").on("click", function(){
		reset();
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
	});

	$(".btn").on("click", function(){
		counterClicks ++;
		userGuess += this.id ;
		console.log(userGuess);
		//compareInput();
		
			if(userGuess.length < computerGuess.length){
				return;
			}	else if (userGuess === computerGuess){
					winCounter++;
					$('#counter').html(winCounter);
					userGuess = [];
					console.log("before" + computerGuess);
					computerChoice();
					console.log("after" + computerGuess);
					console.log(winCounter);
					console.log(computerGuess);
				}
	});

/*
function displayComputerChoice(){
	for(i=0;i<computerGuess.length;i++){
		if(){}
		computerGuess.indexOf(i);
	};
};*/

/*


on click (){
	computerGuess()
}*/
