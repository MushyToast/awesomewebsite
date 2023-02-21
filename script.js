function click(){
    {localStorage.x=1};

    setTimeout(function(){
    while(1)location.reload(1)
    }, 1000)
}

$('document').ready(function(){
    let button = document.getElementById("submit")
    let input = document.getElementById("inp")
    button.onclick = function(){
        if (parseInt(input.value) === 19){
            click()
        }
    }
})