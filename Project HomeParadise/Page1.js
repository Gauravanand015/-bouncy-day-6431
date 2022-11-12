let book = document.querySelectorAll(".btn-two")

for(let i = 0; i<book.length ; i++){
    book[i].addEventListener("click",()=>{
        cartNumbers();
    })
}

function onload(){

    let productNumber = localStorage.getItem("cartNumbers");

    if(productNumber){
        document.querySelector(".top-corner").innerText = productNumber
    }

}


function cartNumbers(){
    let productNumber = localStorage.getItem("cartNumbers");

    productNumber = parseInt(productNumber)

    if(productNumber){
        localStorage.setItem("cartNumbers",productNumber+1)
        document.querySelector(".top-corner").innerText = productNumber+1
    }
    else{
        localStorage.setItem("cartNumbers",1)

        document.querySelector(".top-corner").innerText = 1
    }

}

onload();