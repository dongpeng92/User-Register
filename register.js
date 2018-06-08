var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    document.getElementById("table").style.display = null;
    for(var i=0; i<users.length; i++){
        document.getElementById("table").innerHTML += "<tr>" + "<td>"+users[i].username+"</td>" + "<td>"+users[i].email+"</td>"
            + "<td>"+users[i].location+"</td>" + "<td>"+users[i].company+"</td>" + "<td>"+users[i].gender+"</td>" + "</tr>";
    }
}

function addOne() {
    document.getElementById("table").insertAdjacentHTML('beforeend',
        `<tr>
            <td>${users[i].username}</td>
            <td>${users[i].email}</td>
            <td>${users[i].location}</td>
            <td>${users[i].company}</td>
            <td>${users[i].gender}</td>
          </tr>`);
}

document.getElementById('btn').addEventListener('click', function() {
    var username=document.getElementById('uname').value;
    document.querySelectorAll("p.err_msg").forEach(function (element) {
        element.remove();
    });
    if(username == ""){
        document.getElementById("uname").insertAdjacentHTML('afterend','<p class="err_msg" id="err_uname" style="color: red">Please enter username</p>') ;
    }

    var password=document.getElementById('pwd').value;
    if(password == ""){
        document.getElementById("pwd").insertAdjacentHTML('afterend','<p class="err_msg" id="err_pwd" style="color: red">Please enter password</p>') ;
    }

    var email=document.getElementById('email').value;
    if(email == ""){
        document.getElementById("email").insertAdjacentHTML('afterend','<p class="err_msg" id="err_email" style="color: red">Please enter email</p>') ;
    }

    var location=document.getElementById('loc').value;
    if(location == ""){
        document.getElementById("loc").insertAdjacentHTML('afterend','<p class="err_msg" id="err_loc" style="color: red">Please enter location</p>') ;
    }

    var company=document.getElementById('cmpy').value;
    if(company == ""){
        document.getElementById("cmpy").insertAdjacentHTML('afterend','<p class="err_msg" id="err_cmpy" style="color: red">Please enter company</p>') ;
    }

    var gender=getRadioBoxValue('gender');
    if(gender == ""){
        document.getElementById("gender").insertAdjacentHTML('afterend','<p class="err_msg" id="err_gender" style="color: red">Please enter gender</p>') ;
    }

    if(username!="" && password!="" && email!="" && location!="" && company!="" && gender!=""){
        var user = {
            'username':username,
            'password':password,
            'email': email,
            'location': location,
            'company': company,
            'gender': gender,
        };
        users.push(user);
        localStorage.a_users = JSON.stringify(users);
        addOne();
    }
});

function getRadioBoxValue(radioName){
    var obj = document.getElementsByName(radioName);
    for(i = 0; i < obj.length; i++){
        if(obj[i].checked)
            return obj[i].value;
    }
    return "";
}

