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
function isSignedEmpty() {
    var user = document.getElementById("signeduser").value;
    var passwd = document.getElementById("signedpasswd").value;
    if (user == '' || passwd == '') return false;
    return true;
}

const sideNav = {}
const button = {}

sideNav.off = function () {
    document.getElementsByClassName("sideNav")[0].style.width = "0"
}

sideNav.on = function () {
    document.getElementsByClassName("sideNav")[0].style.width = "20%"
}


sideNav.login = function(){
    document.getElementById("loginIcon").style.display = "none"
    document.getElementById("signoutIcon").style.display = ""
}

sideNav.logout = function(){
    document.getElementById("loginIcon").style.display = ""
    document.getElementById("signoutIcon").style.display = "none"
}


button.close = function(){
    var miniC = document.getElementsByClassName("minicanvas")[0]
    var parentObj = miniC.parentNode
    parentObj.removeChild(miniC)
}

function timer(id){
    setInterval(function() {
        document.getElementById(id).innerHTML = Date.now()
    }, 1000);
}