let db = firebase.firestore()
let model = null;
let modelPieces = null;

db.collection('app').doc('model').onSnapshot(
    function (collectionSnapshot) {
        console.log(collectionSnapshot.data().pieces);
        model = collectionSnapshot.data();
        modelPieces = collectionSnapshot.data().pieces;
        show()
    }
)

function addDatabase() {
    // -> Lager ny collection om den ikke finnes <-
    return db.collection("app").doc('model').set({
        Nei: 'Nei'
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
    return db.collection("model").doc("Bw3HpNujEkSEPHvSTMWD").get().then(function (doc) {
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