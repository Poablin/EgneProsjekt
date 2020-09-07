let db = firebase.firestore()

function updateAll() {
    return db.collection('ludoApp').doc('model').onSnapshot(
        function (collectionSnapshot) {
            console.log(collectionSnapshot.data().pieces);
            model = collectionSnapshot.data();
            modelPieces = collectionSnapshot.data().pieces;
            show()
        }
    )
}

function addDatabase() {
    // -> Lager ny collection om den ikke finnes <-
    return db.collection("ludoApp").doc('model').set({
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
            { name: 'green2', cx: '39.2', cy: '21.2', selected: false, index: 13 },
            { name: 'green3', cx: '21.2', cy: '38.2', selected: false, index: 14 },
            { name: 'green4', cx: '39.2', cy: '38.2', selected: false, index: 15 },
        ],
        diceNumber: null,
        selectedPiece: null,
        savedGame: null,
        savedDice: null,

    }
    ).then(function () {
        console.log("Document successfully written!");
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function addDatabaseMerge() {
    // -> Samme som over, bare at den merger og ikke replacer hele <-
    return db.collection("testModel").doc('test').set({
        Neiduen: 'Nei'
    }, {
        merge: true
    }).then(function () {
        console.log("Document successfully written!");
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function getModelInfo() {
    return db.collection("ludoApp").doc("model").get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

// -> Denne er samme som oppe, uten at den oppdaterer seg realtime <-
//         db.collection('model').doc('Bw3HpNujEkSEPHvSTMWD').get().then(
//             function (collectionSnapshot) {
//                 console.log(collectionSnapshot.data().pieces);
//                 model = collectionSnapshot.data();
//                 pieceObject = collectionSnapshot.data().pieces;
//                 selectedPiece = collectionSnapshot.data().selectedPiece;
//                 show()
//             }
//         )

// -> Samme som over, men er for hver array med forEach() <-
//          db.collection('model').onSnapshot(
//             function (collectionSnapshot) {
//                 collectionSnapshot.forEach(
//                 function (modelItemSnapshot) {
//                 console.log(modelItemSnapshot.data().pieces);
//                 model = modelItemSnapshot.data();
//                 pieceObject = modelItemSnapshot.data().pieces;
//                 selectedPiece = modelItemSnapshot.data().selectedPiece;
//             }
//         )
//         show()
//     }
// )