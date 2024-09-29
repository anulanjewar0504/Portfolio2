var popup = document.getElementById('popup');
function pop() {

    popup.style.zIndex = "1";
    popup.style.transition = '0.7s ease-in-out';
    popup.style.scale = "1.3";
}

function green() {
    var gr = document.getElementById("yes");

    if (gr.style.backgroundColor == "green") {
        gr.style.backgroundColor = ""
        gr.style.color = ""
    }
    else {
        gr.style.backgroundColor = "green";
        gr.style.color = "white"
    }
}

function red() {
    var gr = document.getElementById("no");

    if (gr.style.backgroundColor == "red") {
        gr.style.backgroundColor = "";
        gr.style.color = ""
    }
    else {
        gr.style.backgroundColor = "red";
        gr.style.color = "white";
    }

}

function close() {
    popup.style.zIndex = '';  // Hide the popup by setting low z-index
    popup.style.transition = '0.7s ease-in-out';  // Animate hiding (optional)
}
