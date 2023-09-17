
var form = document.querySelector('form');
var userName = form.querySelector("input[name=username]");
var email = form.querySelector("input[name=email]");
var pass = form.querySelector("input[name=pass]");
var conPass = form.querySelector("input[name=conPass]");
var submit = form.querySelector("button");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(pass.value == conPass.value){
        let user = [
            {
                userName: userName.value,
                userEmail: email.value,
                userPassword: pass.value
            }
        ];
        localStorage.setItem("user", JSON.stringify(user));
        
        pass.value = "";
        conPass.value = "";
        email.value = "";
        userName.value = "";
    }else{
        let p = document.querySelector(".p");
        p.innerHTML = "Password don't match";
        p.classList.add("match");
        setTimeout(()=>{
            p.innerHTML = "";
            p.classList.remove("match");
        },1500);
    }
});




