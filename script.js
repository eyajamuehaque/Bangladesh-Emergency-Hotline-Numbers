
function Calling(serviceName,Number){
    const coins = parseInt(document.getElementById("coin").innerText)

    if(coins<20){
        alert("⚠️ Not enough coins!")
    } 
    else{
    const service = document.getElementById(serviceName).innerText
    const num = document.getElementById(Number).innerText
    alert("📞Calling "+service+" "+num+"...")

    const update = coins - 20
    document.getElementById("coin").innerText = update;
    }
}



function addToCallHistory(serviceName, Number) {
    const service = document.getElementById(serviceName).innerText
    const num = document.getElementById(Number).innerText
    const history = document.getElementById("call-history");
    const add = document.createElement("div");
    add.className = "flex justify-between p-3 hind-siliguri bg-gray-100 rounded-lg";
    add.innerHTML =
        '<div>' +
            '<p class="font-semibold">' + service + '</p>' +
            '<p class="text-gray-500">' + num + '</p>' +
        '</div>' +
        '<p class="text-gray-500">' + new Date().toLocaleTimeString() + '</p>';
    history.prepend(add);

    document.getElementById("no-history").style.display = "none";
}


document.getElementById("clear").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("call-history").innerHTML = "";
    document.getElementById("no-history").style.display = "block";
});


document.getElementById("call-1").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-1-service","call-1-num")
    addToCallHistory("call-1-name","call-1-num")

})

document.getElementById("call-2").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-2-service","call-2-num")
    addToCallHistory("call-2-name","call-2-num")
})

document.getElementById("call-3").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-3-service","call-3-num")
    addToCallHistory("call-3-name","call-3-num")
})

document.getElementById("call-4").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-4-service","call-4-num")
    addToCallHistory("call-4-name","call-4-num")
})

document.getElementById("call-5").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-5-service","call-5-num")
    addToCallHistory("call-5-name","call-5-num")
})

document.getElementById("call-6").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-6-service","call-6-num")
    addToCallHistory("call-6-name","call-6-num")
})

document.getElementById("call-7").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-7-service","call-7-num")
    addToCallHistory("call-7-name","call-7-num")
})

document.getElementById("call-8").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-8-service","call-8-num")
    addToCallHistory("call-8-name","call-8-num")
})

document.getElementById("call-9").addEventListener("click",function(e){
    e.preventDefault()

    Calling("call-9-service","call-9-num")
    addToCallHistory("call-9-name","call-9-num")
})

let copyBtns = 0;

const copy = document.getElementsByClassName("copy-btn");

for(const btn of copy){
    btn.addEventListener("click",function(e){
        e.preventDefault()

        copyBtns++
        document.getElementById("copy-count").innerText = copyBtns;

        const number = btn.parentNode.parentNode.querySelector("h2").innerText;

        navigator.clipboard.writeText(number)
            .then(() => {
                alert("Number " + number + " copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    })
}



let favCount = 0;

const hearts = document.getElementsByClassName("fav");

for(const heart of hearts){
    heart.addEventListener("click",function(e){
        e.preventDefault()

        favCount++
        document.getElementById("fav-count").innerText = favCount;
    })
}