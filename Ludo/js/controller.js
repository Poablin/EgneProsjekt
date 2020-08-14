function selectPiece(piece) {
    if (selectedPiece != null && selectedPiece != piece) {
        selectedPiece.selected = 'pieces';
        show()
    }
    if (selectedPiece != null && selectedPiece == piece) {
        selectedPiece.selected = 'pieces';
        selectedPiece = null;
        console.log(selectedPiece)
        return show()
    }
    selectedPiece = piece;
    selectedPiece.selected = 'selected';

    show()
    console.log(selectedPiece)
}

function sameSpace() {
    for (let value of pieces) {
        console.log(value);
    }
}

function movePiece(thisX, thisY) {
    if (selectedPiece == null) return console.log('No piece chosen');
    selectedPiece.cx = thisX + 5;
    selectedPiece.cy = thisY + 5;
    show()
}

function rollDice() {
    return diceNumber = Math.ceil(Math.random() * 6);
}

function reset() {
    selected = false;
    selectedPiece = null;
    diceNumber = null;
    pieces = [
        { name: "yellow1", cx: "21.2", cy: "111.2", selected: 'pieces' },
        { name: 'yellow2', cx: '39.1', cy: '111.2', selected: 'pieces' },
        { name: 'yellow3', cx: '21.2', cy: '128.2', selected: 'pieces' },
        { name: 'yellow4', cx: '39.2', cy: '128.2', selected: 'pieces' },
        { name: 'red1', cx: '111.2', cy: '111.2', selected: 'pieces' },
        { name: 'red2', cx: '129.2', cy: '111.2', selected: 'pieces' },
        { name: 'red3', cx: '111.2', cy: '128.2', selected: 'pieces' },
        { name: 'red4', cx: '129.2', cy: '128.2', selected: 'pieces' },
        { name: 'blue1', cx: '111.2', cy: '21.2', selected: 'pieces' },
        { name: 'blue2', cx: '129.2', cy: '21.2', selected: 'pieces' },
        { name: 'blue3', cx: '111.2', cy: '38.2', selected: 'pieces' },
        { name: 'blue4', cx: '129.2', cy: '38.2', selected: 'pieces' },
        { name: 'green1', cx: '21.2', cy: '21.2', selected: 'pieces' },
        { name: 'green2', cx: '39.2', cy: '21.2', selected: 'pieces' },
        { name: 'green3', cx: '21.2', cy: '38.2', selected: 'pieces' },
        { name: 'green4', cx: '39.2', cy: '38.2', selected: 'pieces' },
    ];
    show()
    console.log('Game reset');
}

function save() {
    if (selectedPiece != null) {
        selectedPiece.selected = 'pieces';
        selectedPiece = null;
        show()
    }
    savedGame = JSON.parse(JSON.stringify(pieces));
    savedDice = diceNumber;
    console.log('Game saved');
}

function restore() {
    if (savedGame == null) return console.log('No saved game');
    selectedPiece = null;
    diceNumber = savedDice;
    pieces = JSON.parse(JSON.stringify(savedGame));
    show()
    console.log('Game restored');
}

// document.getElementById(selectedPiece).cx.baseVal.value = thisx + 5;
// document.getElementById(selectedPiece).cy.baseVal.value = thisy + 5;