document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (username.trim() !== "" && password.trim() !== "") {
        window.location.href = "../index.html";
    } else {
        alert("Please enter both username and password.");
    }
}

function stampImage1(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/ManchesterUnited.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}

function stampImage2(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/oldtrafford.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}

function stampImage3(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/oldtrafford.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}

function stampImage4(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/oldtrafford.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}

function stampImage5(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/oldtrafford.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}

function stampImage6(boxId) {
    var box = document.getElementById(boxId);
    box.innerHTML = '<img src="../images/oldtrafford.png" alt="Stamped Image" style="width: 100px; height: 100px;">';
}
