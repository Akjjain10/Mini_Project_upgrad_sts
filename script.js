function ValidateEmail(mail) 
{var emailc=document.getElementById('email').value;
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    return (true)
  }
  else if(emailc==="")
  {
      alert('Please Enter Email Address');
  }
  else{
    alert("You have entered an invalid email address!");
}
    return (false)
}

function namecheck(){
    var namec=document.getElementById('name').value;
    var len=namec.length;
    if(len<3)
    {
        alert("Name should be of minimum 3 Length");
    }
}

function numberCheck(){
    var x=document.getElementById('number').value;
    var len=x.length;
    if(len<10)
    {
        alert("Number must be of 10 digits");
    }
    else if(len>10)
    {
        alert("Number must be of 10 digits");
    }
}

function load() {
    document.getElementById('show').style.display="none";
  }

function required()
{
    document.getElementById('show').style.display="block";
    var row_div = document.createElement("DIV");
    row_div.setAttribute("class","row");

var col_25_div1=document.createElement("DIV");
col_25_div1=document.setAttribute("class","col-25");
var namec=document.getElementById('name').value;
var txtnode1=document.createTextNode(namec);
col_25_div1.appendChild(txtnode1);
row_div.appendChild(col_25_div1);

var col_25_div2=document.createElement("DIV");
col_25_div2=document.setAttribute("class","col-25");
var numberc=document.getElementById('number').value;
var txtnode2=document.createTextNode(numberc);
col_25_div2.appendChild(txtnode2);
row_div.appendChild(col_25_div2);

var col_25_div3=document.createElement("DIV");
col_25_div3=document.setAttribute("class","col-25");
var emailc=document.getElementById('email').value;
var txtnode3=document.createTextNode(emailc);
col_25_div3.appendChild(txtnode3);
row_div.appendChild(col_25_div3);

var col_25_div4=document.createElement("DIV");
col_25_div4=document.setAttribute("class","col-25");
var delbtn=document.createElement("BUTTON");
delbtn.setAttribute("class","delete");
var btntext=document.createTextNode("Delete");
delbtn.appendChild(btntext);
col_25_div4.appendChild(delbtn);
row_div.appendChild(col_25_div4);

var element = document.getElementById("show");
element.appendChild(row_div);
}

