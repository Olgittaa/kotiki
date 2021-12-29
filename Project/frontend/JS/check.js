function cancel() {
  window.location.href = "../index.html";
}
function registration()
{

var uname= document.getElementById("t1").value;
var email= document.getElementById("t2").value;
var first_name= document.getElementById("t3").value;
var second_name= document.getElementById("t4").value;
var pwd= document.getElementById("t5").value;
var cpwd= document.getElementById("t7").value;
var phone= document.getElementById("t6").value;
let cancelBtn= document.querySelector(".cancel");


//email id expression code
var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var letters = /^[A-Za-z]+$/;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(uname=='')
{
alert('Please enter your user name');
}
else if(!letters.test(uname))
{
alert('Name field required only alphabet characters');
}
else if(email=='')
{
alert('Please enter your user email id');
}
else if (!filter.test(email))
{
alert('Invalid email');
}
else if(first_name=='')
{
alert('Please enter the user name.');
}
else if(!letters.test(first_name))
{
alert('User name field required only alphabet characters');
}
else if(second_name=='')
{
alert('Please enter the user name.');
}
else if(!letters.test(second_name))
{
alert('User name field required only alphabet characters');
}
else if(pwd=='')
{
alert('Please enter Password');
}
else if(cpwd=='')
{
alert('Enter Confirm Password');
}
else if(!pwd_expression.test(pwd))
{
alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
}
else if(pwd != cpwd)
{
alert ('Password not Matched');
}
else if(document.getElementById("t7").value.length < 6)
{
alert ('Password minimum length is 6');
}
else if(document.getElementById("t7").value.length > 12)
{
alert ('Password max length is 12');
}
else
{
//alert('Thank You for Registration');
// Redirecting to other page or webste code.
//  window.location = "./registrationSuccessfull.html";
}
}
