var users = [];
if(localStorage.a_users) {
    users = JSON.parse(localStorage.a_users);
    document.getElementById("table").style.display = null;
    for(var i=0; i<users.length; i++){
        document.getElementById("table").innerHTML += "<tr>" + "<td>"+users[i].username+"</td>" + "<td>"+users[i].email+"</td>"
        + "<td>"+users[i].location+"</td>" + "<td>"+users[i].company+"</td>" + "<td>"+users[i].gender+"</td>" + "</tr>";
    }
}

document.getElementById('btn').addEventListener('click', function() {
    var username=document.getElementById('uname').value;
    if(username == ""){
        // document.getElementById("c1").innerHTML="Please enter username";
        document.getElementById("err_msg_usrname").innerHTML = '<p style="color: red">Please enter username</p>';
    } else{
        document.getElementById("err_msg_usrname").innerHTML="";
    }

    var password=document.getElementById('pwd').value;
    if(password == ""){
        // document.getElementById("c2").innerHTML="Please enter password";
        document.getElementById("err_msg_pwd").innerHTML = '<p style="color: red">Please enter password</p>';
    } else{
        document.getElementById("err_msg_pwd").innerHTML="";
    }

    var email=document.getElementById('email').value;
    if(email == ""){
        // document.getElementById("c3").innerHTML="Please enter email";
        document.getElementById("err_msg_email").innerHTML = '<p style="color: red">Please enter email</p>';
    } else{
        document.getElementById("err_msg_email").innerHTML="";
    }

    var location=document.getElementById('loc').value;
    if(location == ""){
        // document.getElementById("c4").innerHTML="Please enter location";
        document.getElementById("err_msg_loc").innerHTML = '<p style="color: red">Please enter location</p>';
    } else{
        document.getElementById("err_msg_loc").innerHTML="";
    }

    var company=document.getElementById('cmpy').value;
    if(company == ""){
        // document.getElementById("c5").innerHTML="Please enter company";
        document.getElementById("err_msg_cmpy").innerHTML = '<p style="color: red">Please enter company</p>';
    } else{
        document.getElementById("err_msg_cmpy").innerHTML="";
    }

    var gender=getRadioBoxValue('gender');
    if(gender == ""){
        // document.getElementById("c6").innerHTML="Please select gender";
        document.getElementById("err_msg_gender").innerHTML = '<p style="color: red">Please select gender</p>';
    } else{
        document.getElementById("err_msg_gender").innerHTML="";
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
    } else {
        alert("Please enter all information")
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

