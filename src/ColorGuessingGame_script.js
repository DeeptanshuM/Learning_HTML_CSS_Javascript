var colors=["aqua", "black", "blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var colors_list = colors.join()
var target;
var guess;
var isCorrect = false;
var number_of_guesses = 0;

function anfang() {
    target = colors[Math.floor(Math.random() * colors.length)];

    while(!isCorrect) {
        guess = prompt("I am thinking of one of these colors:\n\n" + colors_list +
            "\n\nWhat color am I thinking of?");
        number_of_guesses += 1;
        isCorrect = check_guess();
    }
}

function check_guess() {
    if(colors.indexOf(guess) < 0){
        alert("Sorry, I don't recognize your color.\n\nPlease try again.");
        return false;
    }
    if(guess > target){
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically higher than mine.\n\n" +
            "Please try again.");
        return false;
    }
    if(guess < target){
        alert("Sorry, your guess is not correct!\n\n" +
            "Hint: your color is alphabetically lower than mine.\n\n" +
            "Please try again.");
        return false;
    }

    document.body.style.background = guess;

    alert("Congratulations! You have guessed color!\n\n" +
        "It took you " + number_of_guesses + " guesses to finish the game!\n\n" +
        "You can see the color in the background.");

    return true;
}
