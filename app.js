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
    if (localStorage.getItem("BurBuiLoauth") == null) {
        if (window.location.href.includes("index.html") == false)
            window.location = "index.html"
    }
    if (localStorage.getItem("BurBuiLoauth") != null) {
        console.log(window.location.href)
        if (window.location.href.includes("board.html")) {
            console.log("window");
        } else {
            window.location = "board.html"
        }
    }
    document.getElementById("connected").addEventListener("mouseup", function() {
        localStorage.setItem("ghghgh", document.getElementById("connected").innerHTML)

    });
    if (localStorage.getItem("ghghgh") != null) {
        document.getElementById("connected").innerHTML = localStorage.getItem("ghghgh")
    }
    var ddddd = document.getElementsByTagName("LI");
    for (let j = 0; j < ddddd.length; j++) {
        const element = ddddd[j];
        element.addEventListener("mousemove", function() {
            localStorage.setItem("ghghgh", document.getElementById("connected").innerHTML)
        });

        element.addEventListener("mousedown", function() {
            element.style.cursor = "grabbing";
        });
        element.addEventListener("mouseup", function() {
            element.style.cursor = "grab";
        });
    }

    // var database = firebase.database();
    // var ref = database.ref("/");
    // ref.on("value", gotData, errData);

    $('.sortable').sortable();
    $('.handles').sortable({
        handle: 'span'
    });
    $('.connected').sortable({
        connectWith: '.connected'
    });
    $('.exclude').sortable({
        items: '1.disaabled'
    });
    all()


});

function gg(event) {
    var nme = event.target.parentElement.nodeName;
    var eeee = event.target.parentElement;
    if (nme == "LI") {
        nme = "UL";
        eeee = eeee.parentElement;
    }
    var ffff = eeee.querySelectorAll("LI");
    var data = [];
    for (let j = 0; j < ffff.length; j++) {
        const element = ffff[j];
        data.push('<li class="item">' + element.innerHTML + '</li>');
    }

    var task = prompt("Please enter your Task", "");
    var ddff = '<li class="item">' + task + '</li>';
    data.splice(ffff.length - 1, 0, ddff);
    data.pop();
    data[data.length] = '<li draggable="false" class="disaabled add"><img class="affi" src="https://th.bing.com/th/id/OIP.uAC1lff55NnsG_OqdHQM8QHaHa?w=188&h=188&c=7&o=5&pid=1.7"></li>'
    eeee.innerHTML = (data.join(""));

    all();
    localStorage.setItem("ghghgh", document.getElementById("connected").innerHTML)
}

function all() {
    var ele = document.getElementsByClassName("add");
    for (let i = 0; i < ele.length; i++) {
        const d = ele[i];


        d.addEventListener("click", function(event) {
            gg(event)
        });

    }
}

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