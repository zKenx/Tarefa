const inputs = document.querySelectorAll(".input")


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus")
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus")
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl)
    input.addEventListener("blur", remcl)
})


function showTime(){

    //obtém a data/hora atual
    var date = new Date()
    
    var h = date.getHours() // 0 - 23
    var m = date.getMinutes() // 0 - 59
    var s = date.getSeconds() // 0 - 59s
    var session = "AM"
    
    if(h >= 12){
        h = h - 12
        session = "PM"
    }

    if(h == 0){
        h = 12
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    var time = h + ":" + m + ":" + s + " " + session
    document.getElementById("MyClockDisplay").innerText = time
    document.getElementById("MyClockDisplay").textContent = time
    setTimeout(showTime, 1000)
}

showTime()

