function selectPiece(piece, id) {
    sameSpace(id)
    if (model.selectedPiece != null && model.selectedPiece != piece) {
        ;
        show()
    }
    if (model.selectedPiece != null && model.selectedPiece == piece) {
        ;
        model.selectedPiece = null;
        console.log('Unselected Piece')
        return show()
    }
    model.selectedPiece = piece;;
    console.log(model.selectedPiece)
    show()
}

function sameSpace(id) {
    console.log(document.getElementById(id).getBoundingClientRect())
}

function movePiece(thisX, thisY) {
    if (model.selectedPiece == null) return console.log('No piece chosen');
    model.selectedPiece.cx = thisX + 5;
    model.selectedPiece.cy = thisY + 5;
    show()
}

function rollDice() {
    return model.diceNumber = Math.ceil(Math.random() * 6);
}

function reset() {
    model.selected = false;
    model.selectedPiece = null;
    model.diceNumber = null;
    modelPieces = [
        { name: 'yellow1', cx: "21.2", cy: "111.2" },
        { name: 'yellow2', cx: '39.1', cy: '111.2' },
        { name: 'yellow3', cx: '21.2', cy: '128.2' },
        { name: 'yellow4', cx: '39.2', cy: '128.2' },
        { name: 'red1', cx: '111.2', cy: '111.2' },
        { name: 'red2', cx: '129.2', cy: '111.2' },
        { name: 'red3', cx: '111.2', cy: '128.2' },
        { name: 'red4', cx: '129.2', cy: '128.2' },
        { name: 'blue1', cx: '111.2', cy: '21.2' },
        { name: 'blue2', cx: '129.2', cy: '21.2' },
        { name: 'blue3', cx: '111.2', cy: '38.2' },
        { name: 'blue4', cx: '129.2', cy: '38.2' },
        { name: 'green1', cx: '21.2', cy: '21.2' },
        { name: 'green2', cx: '39.2', cy: '21.2' },
        { name: 'green3', cx: '21.2', cy: '38.2' },
        { name: 'green4', cx: '39.2', cy: '38.2' },
    ];
    show()
    console.log('Game reset');
}

function save() {
    if (model.selectedPiece != null) {;
        model.selectedPiece = null;
        show()
    }
    model.savedGame = JSON.parse(JSON.stringify(modelPieces));
    model.savedDice = model.diceNumber;
    console.log('Game saved');
}

function restore() {
    if (model.savedGame == null) return console.log('No saved game');
    model.selectedPiece = null;
    model.diceNumber = model.savedDice;
    modelPieces = JSON.parse(JSON.stringify(model.savedGame));
    show()
    console.log('Game restored');
}

// document.getElementById(model.selectedPiece).cx.baseVal.value = thisx + 5;
// document.getElementById(model.selectedPiece).cy.baseVal.value = thisy + 5;