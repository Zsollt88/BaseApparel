function emailValidator() {
    let email = document.getElementById("Email").value;
    if (email.includes("@") != true) {
        document.getElementById("warning").style.visibility = "visible";
        document.getElementById("exclamationMark").style.visibility = "visible";
    } else {
        document.getElementById("warning").style.visibility = "hidden";
        document.getElementById("exclamationMark").style.visibility = "hidden";
    }
}