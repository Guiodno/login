document.addEventListener("DOMContentLoaded", function(){

    let email = 0
    let password = 0

    let button = document.querySelector("#click")

    document.querySelector("#email").addEventListener("keyup", e =>{
        console.log(e.target.value)
        email = e.target.value.length
    })

    document.querySelector('#password').addEventListener("keyup", e=>{
        console.log(e.target.value)
        password = e.target.value.length
    })

    let message = document.createElement("h1")

    button.addEventListener('click', ()=>{

        if((email > 0) && (password > 0)){
            message.textContent = "all things good !"
            document.querySelector("div").append(message)
        }else{
            message.textContent = "empty email or password"
            document.querySelector("div").append(message)
        }
    })

})