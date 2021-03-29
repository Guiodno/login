document.addEventListener("DOMContentLoaded",() => {

    let name="laguerre guiodno"

function helloWorld(name){
    alert(`bonjour ${name}`)
}

var count = 0
 var h = document.createElement("h1")


document.getElementById('click').addEventListener("click", function(){
    

    count = count + 1
    console.log(count)
    h.textContent = count

    document.querySelector('div').append(h)
})

})





