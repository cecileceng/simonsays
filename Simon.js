	
// MAIN JS FILE

//VARIABLES
var winCounter = 0;
var options =["red","green","blue","yellow"];
var userGuess = [];
var computerGuess = [];

function computerChoice(){
	computerGuess += options[Math.floor(Math.random()*options.length)];
};

function reset (){
	winCounter = 0;
	userGuess;
	computerGuess = [];
};


	$("#start").on("click", function(){
		reset();
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
	});

	$(".btn").on("click", function(){
		userGuess += this.id ;
		console.log(userGuess);
			if(userGuess.length < computerGuess.length){
				return;
			}	else if (userGuess === computerGuess){
					winCounter++;
					userGuess = [];
					console.log("before" + computerGuess);
					computerChoice();
					console.log("after" + computerGuess);
					console.log(winCounter);
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