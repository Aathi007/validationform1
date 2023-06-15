const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   validatefuction()

})
function validatefuction()
{
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();
    if(usernameval=='')
    {
        seterror(username,"username is empty");
    }
    else
    {
        setsucess(username);
    }
    if(emailval=='')
    {
        seterror(email,"email is empty");
    }
    else if(!validateEmail(emailval))
    {
        seterror(email,"enter valid email");
    }
    else
    {
        setsucess(email);
    }
    if(passwordval==' ')
    {
        seterror(password,"password is empty");
    }
    else if(passwordval.length<8)
    {
        seterror(password,"enter 8 digit");
    }
    else
    {
        setsucess(password);
    }
    if(cpasswordval==' ')
    {
        seterror(cpassword,"cpassword is empty");
    }
    else if(cpasswordval!=passwordval)
    {
        seterror(cpassword,"Does not match email");
    }
    else
    {
        setsucess(cpassword);
    }
}
function seterror(element,message)
{
    const inputfunct=element.parentElement;
    const input1funct=inputfunct.querySelector('.error');
    input1funct.innerText=message;
    input1funct.classList.add('error');
    input1funct.classList.remove('success');

}
function setsucess(element)
{
    const inputfunct=element.parentElement;
    const input1funct=inputfunct.querySelector('.error');
    input1funct.innerText= '';
    input1funct.classList.add('success');
    input1funct.classList.remove('error');
}
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
