// Alert Me Functionality
function alertName() {
    var name = document.getElementById("name").value;
    if (name) {
        alert("Hi " + name + "!");
    }
}

// Change Color Functionality
let isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "blue";
    }
    isBlue = !isBlue;
}

// Text Tester Validation Functionality
function validateText() {
    var testText = document.getElementById("testText").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(testText)) {
        alert("Text contains special characters!");
    } else {
        alert("Text is valid!");
    }
}

// Add Text Functionality
function addText() {
    var heading = document.getElementById("main-heading");
    heading.innerHTML += " Add Text";
}
