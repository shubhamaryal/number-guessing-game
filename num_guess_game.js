const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1)+min);

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${min} - ${max}.`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess>max || guess<min) {
        window.alert("Please enter a valid number");
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("Too low!Try again");
        }
        else if(guess>answer){
            window.alert("Too high! Try again");
        }
        else{
            window.alert(`Corrrect! The answer is ${answer}. It took you ${attempt}.`)
            running=false;
        }
    }
}