let db = firebase.firestore();

function addDatabase() {
    // -> Lager ny collection om den ikke finnes <-
    return db.collection("home").doc('model').set({
        test: null
    }, { merge: true }
    ).then(function () {
        console.log("Document successfully written!");
    })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

function getModelInfo() {
    return db.collection("home").doc("model").get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}
