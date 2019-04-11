function clickMe() {
    checkPassword();
}

function displayText(){
    var x = document.getElementById("frm1");
    var username = document.getElementById("username").value;
    var greetingText = "";
    var inputDisplay = "";
    var textLabel ="";
    
    var ul = document.createElement("ul");
    document.getElementById("confirm-section").appendChild(ul);
    var li = document.createElement("li");

    for (var i = 0; i < x.length -1; i++){
        textLabel = document.getElementById("label"+i).innerText + "  ";
        inputDisplay = textLabel + "<i>" + x.elements[i].value + "</i>";
        li.appendChild(document.createTextNode(inputDisplay));
        ul.appendChild(li);
    }

    greetingText = "Hello " + username + "</br>" + "Below is your input:<br>" + inputDisplay;
    document.getElementById("greeting-text").innerHTML= greetingText;
    return greetingText;
}

function checkPassword(){
    var pw = document.getElementById("pw").value;
    var username = document.getElementById("username").value;
    var lname = document.getElementById("pw").value;
    var fname = document.getElementById("username").value;

    var text = "";
    var passValidateText = "";
    if (pw.length < 8){
        text ="Your password is too weak. Please input at least 8 characters."
    } else if (pw.includes(username) || pw.includes(fname) && pw.includes(lname)){
        text ="You should not put your information on the password.";
    } else {
        text = stupidPassword(pw);
    }
    console.log(pw);
    document.getElementById("validate-text").innerHTML = text;
    if (text === "") {
        displayText();
    }
}

function stupidPassword(x){
    var stupidPassArray = [
        "12345678", "password", "iloveyou", "nopassword", "87654321", "123456789", "987654321"
    ];

    for (var i = 0; i < stupidPassArray.length; i++){
        if (x === stupidPassArray[i]){
            console.log(stupidPassArray[i]);
            return "You are using a bad password. Please think about security.";
            break;
        }
        return "";
    }
}