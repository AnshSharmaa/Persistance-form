var i = 1;


function add() {

    if (document.getElementById("name").value && document.getElementById("num").value && document.getElementById("email").value) {

        document.getElementById("info").style.display = "flex";

        name = document.getElementById("name").value;
        num = document.getElementById("num").value;
        email = document.getElementById("email").value;

        var table = document.getElementById("info");
        var trow = table.insertRow(i);

        var tname = trow.insertCell(0);
        tname.innerText = name;

        var tmob = trow.insertCell(1);
        tmob.innerText = num;

        var tmail = trow.insertCell(2);
        tmail.innerText = email;

        var delbutton= trow.insertCell(3);
        delbutton.innerHTML = '<input type="button" id="delete" value="Delete" onclick="deleteRow(this)">';

        i++;
    }
    else {
        alert("One or many field/s are empty");
    }
}

function deleteRow(r) {
    var x = r.parentNode.parentNode.rowIndex;
    document.getElementById("info").deleteRow(x);
    i--;
  }