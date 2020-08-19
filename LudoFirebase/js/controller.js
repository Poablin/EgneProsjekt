// function selectPiece(piece) {
//     // Problemet nå er at model.selectedPiece ikke blir like piece, siden det er desimal forskjeller.
//     if (model.selectedPiece != null && model.selectedPiece != piece) {
//         model.selectedPiece.selected = false;
//         show()
//     }
//     if (model.selectedPiece != null && model.selectedPiece == piece) {
//         model.selectedPiece.selected = false;
//         model.selectedPiece = null;
//         console.log(model.selectedPiece)
//         return show()
//     }
//     model.selectedPiece = piece;
//     model.selectedPiece.selected = true;
//     db.collection('app').doc('model').set(
//         {
//             selectedPiece: piece,
//         }, { merge: true }
//     ).then(show())

//     console.log(model.selectedPiece)
// }

function selectPiece(piece) {
    model.selectedPiece = piece;
    model.selectedPiece.selected = true;
    db.collection('app').doc('model').set(
        { selectedPiece: model.selectedPiece }, { merge: true }
    )
}

function sameSpace(id) {
    console.log(document.getElementById(id).getBoundingClientRect())
}

function movePiece(thisX, thisY) {
    // Kan ikke velge spesikift array element i firebase, så må oppdatere hele arrayet
    if (model.selectedPiece === null) return console.log('No piece chosen');
    const index = model.selectedPiece.index;
    modelPieces[index].cx = thisX + 5;
    modelPieces[index].cy = thisY + 5;
    db.collection('app').doc('model').set({
        pieces: modelPieces,
        selectedPiece: model.selectedPiece,
    }, { merge: true })
    show()
}

function rollDice() {
    return db.collection('app').doc('model').set({
        diceNumber: Math.ceil(Math.random() * 6),
    }, { merge: true })
}

function reset() {
    db.collection('app').doc('model').set({
        pieces: [
            { name: 'yellow1', cx: "21.2", cy: "111.2", selected: false, index: 0 },
            { name: 'yellow2', cx: '39.1', cy: '111.2', selected: false, index: 1 },
            { name: 'yellow3', cx: '21.2', cy: '128.2', selected: false, index: 2 },
            { name: 'yellow4', cx: '39.2', cy: '128.2', selected: false, index: 3 },
            { name: 'red1', cx: '111.2', cy: '111.2', selected: false, index: 4 },
            { name: 'red2', cx: '129.2', cy: '111.2', selected: false, index: 5 },
            { name: 'red3', cx: '111.2', cy: '128.2', selected: false, index: 6 },
            { name: 'red4', cx: '129.2', cy: '128.2', selected: false, index: 7 },
            { name: 'blue1', cx: '111.2', cy: '21.2', selected: false, index: 8 },
            { name: 'blue2', cx: '129.2', cy: '21.2', selected: false, index: 9 },
            { name: 'blue3', cx: '111.2', cy: '38.2', selected: false, index: 10 },
            { name: 'blue4', cx: '129.2', cy: '38.2', selected: false, index: 11 },
            { name: 'green1', cx: '21.2', cy: '21.2', selected: false, index: 12 },
            { name: 'green2', cx: '39.2', cy: '21.2', selected: false, index: 14 },
            { name: 'green3', cx: '21.2', cy: '38.2', selected: false, index: 15 },
            { name: 'green4', cx: '39.2', cy: '38.2', selected: false, index: 16 },
        ],
        selectedPiece: null,
        diceNumber: null,
    }, { merge: true })
    updateAll()
    console.log('Game reset');
}

function save() {
    db.collection('app').doc('model').set({
        savedGame: modelPieces,
        savedDice: model.diceNumber,
    }, { merge: true })
}

function restore() {
    // -> Get det man skal ha først, så set etterpå <-
    db.collection('app').doc('model').get().then(
        function (snapshot) {
            model.savedGame = snapshot.data().savedGame;
            model.diceNumber = snapshot.data().savedDice;
        }
    )
    db.collection('app').doc('model').set({
        pieces: model.savedGame,
        diceNumber: model.savedDice,
    }, { merge: true }
    )
}