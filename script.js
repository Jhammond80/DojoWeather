// console.log("Hello world!")

function tempload(){
    alert("Loading weather report..")
}

var hideCookie = document.querySelector(".cookieBox")

function iAccept(){
    hideCookie.remove()
}



// converting c and f need to convert f to c on selection
// conversion for c is 9/5 = 1.8  x temp + 32 = f
// conversion for f is 5/9 x temp -32 = c
// * take in to the account of operations 
// need to schedual a time to figure this out I attempted several ways and finally had to follow the vid
// i am having a hard time with more complex functions!

function cel(tempC){
    return Math.round(9/5 * tempC + 32)
}
function far(tempC){
    return Math.round(5/9 * (tempC - 32))
}


function switchTemp(element){
    for(let i = 1; i <= 8; i++){
        var tempC = document.querySelector("#temp" + i)
        let valOfTemp = parseInt(tempC.innerText)
    if(element.value == "c"){
            tempC.innerText = far(valOfTemp)
    }else {
            tempC.innerText = cel(valOfTemp)
        }
    
    }
}
    
// can not get the deg sign to appear back
    


