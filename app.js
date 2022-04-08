function run() {
    document.getElementById("paragraph").innerHTML = "hello peeps";
    document.getElementById("paragraph").style.backgroundColor = "gray";
    document.getElementById("paragraph").style.color = "black";
    document.getElementById("paragraph").style.padding = "50px";
    randomNum();
    userNumber();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML=ran;
    x.style.backgroundColor = "purple";
    x.style.color = "#e6a5a1";
    x.style.padding = "40px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").Value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "green";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumbers()