function buttonClick(){
    const fname = document.getElementById("first").value; //first name
    const lname = document.getElementById("last").value; //last name
    const element = document.getElementById("full") //combining both first and last name
    element.value = fname+""+lname //combining first and last anme
}
function mymessage() {
    alert("Thank you! Remember, knowledge is power")
} //pop up displaying message

function formValidation()  //Zip Code start
{  
    var zip = document.reg.zip; 
    allnumeric(zip);

function allnumeric(zip)
{   
    var numbers = /^[0-9]+$/;  //identifying numbers
    if(zip.value.match(numbers))  
    {  
        document.getElementById("msg").innerHTML=("OK &#x2713;");
        msg.style.color="green";
    }  
    else if (zip.numbers < 5) //no more than 5
    {
        msg.innerHTML=("Has to be 5 numbers."); //if more than 5
        msg.style.color="red";
    }
    else
    {  
        msg.innerHTML=("Numbers only please."); //error if anything than numbers
        msg.style.color="red";
    }  
};  
    return false;
};;