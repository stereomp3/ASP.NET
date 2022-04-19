function ClickButton() {
    if (document.getElementById("test01").value == "") {
        alert("no input")
        
    }
    else {
        document.getElementById("testarea").innerText = document.getElementById("test01").value
    }
}

function isEmpty() {
    var user = document.getElementById("user").value;
    var passwd = document.getElementById("passwd").value;
    if (user == '' || passwd == '') return false;
    return true;
}