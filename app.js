$(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyA-wxTJlW3lwsOnJMgnoRT6xr7oYJEY914",
        authDomain: "burbuilo.firebaseapp.com",
        databaseURL: "https://burbuilo-default-rtdb.firebaseio.com",
        projectId: "burbuilo",
        storageBucket: "burbuilo.appspot.com",
        messagingSenderId: "1013944365766",
        appId: "1:1013944365766:web:bd7889311ba50a75d8ddc7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
});
function user() {
    firebase.auth().signInWithEmailAndPassword(document.getElementById("passssss").value, document.getElementById("mail").value)
        .then((user) => {
            localStorage.setItem("BurBuiLoauth", true)
            window.location = "board.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}