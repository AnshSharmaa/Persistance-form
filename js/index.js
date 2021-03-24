var i = 1;


function add() {
    var error = 0;
    nam = document.getElementById("name").value;
    num = document.getElementById("num").value;
    email = document.getElementById("email").value;

    
    if(nam=="" || num=="" || email==""){
        alert("No field should be blank");
        error = 1;
    }
    if (nam.length < 3) {
        error = 1;
    }
    if (num.length < 10) {
        error = 1;
    }
    console.log(error)
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        error = 1;
    }

    if (error === 0) {

        document.getElementById("info").style.display = "flex";


        var table = document.getElementById("info");
        var trow = table.insertRow(i);

        var tnam = trow.insertCell(0);
        tnam.innerText = nam;

        var tmob = trow.insertCell(1);
        tmob.innerText = num;

        var tmail = trow.insertCell(2);
        tmail.innerText = email;

        var delbutton = trow.insertCell(3);
        delbutton.innerHTML = '<input type="button" id="delete" value="Delete" onclick="deleteRow(this)">';

        i++;
    }
    else {
        alert("Input is not correct");
    }
}

function deleteRow(r) {
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("info").deleteRow(x);
    i--;
}