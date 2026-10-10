// Number Guessing Game
const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum)+1)+minNum;


let running = true;
let attempts =0;

while(running)
{
    let guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}.`);
    guess = Number(guess);
    if(isNaN(guess))
    {
        window.alert("Enter valid number !!");
    }
    else if(guess<minNum || guess>maxNum)
    {
        window.alert("Enter valid number !!");
    }
    else
    {
        attempts++;
        if(guess<answer)
        {
        window.alert("HIGHER !!");
        }
        else if(guess>answer)
        {
        window.alert("LOWER !!");
        }
        else
        {
        window.alert(`CORRECT !! The number was ${answer}. You guessed it in ${attempts} attempts.`);
        running = false;
        }
    }
}
