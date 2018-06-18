console.log("xox");

var XState = [];
var OState = [];
var freeState = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var fieldElements = document.querySelectorAll("td");

fieldElements.forEach(function(element) {
    element.addEventListener("click", fieldClicked);
});

function fieldClicked(event) {
    if (isSubset([Number(event.srcElement.id)], freeState)) {
        freeState.removeElement(Number(event.srcElement.id));
        document.getElementById(event.srcElement.id).innerText = "X";
        XState.push(Number(event.srcElement.id));
        if (XState.length >= 3 && isAWin(XState)) alert("You win!");
        else computerMove();
    } else {
        alert("Field occupied, choose another, please.")
    }

}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
};

Array.prototype.removeElement = function (element) {
    var index = this.indexOf(element);
    this.splice(index, 1);
};
/*function generateRandomSingleDigitNumber() {
    var random = Math.ceil((Math.random()*10));
    return random !== 10 ? random : 1;
}*/

function computerMove() {
    var random = freeState.randomElement();
    document.getElementById("" + random).innerText = "O";
    freeState.removeElement(random);
    OState.push(random);
    if (OState.length >= 3 && isAWin(OState)) alert("You lose!");
}

function isSubset(source, target) {
    return source.every(function(val) { return target.indexOf(val) >= 0; });
}

function isAWin(state) {
    console.log(state, "state");
    var winningStates = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    console.log(winningStates);
    var isAWin = false;
    winningStates.forEach(function(winningState) {  console.log(winningState,"winningState");
    console.log(isSubset(winningState, state), "is state the winning state");
    if (isSubset(winningState, state)) isAWin = true; });

    return isAWin;

}
