let decision ;

document.getElementById("myAnswer").onclick = function(){

    decision = document.getElementById("chantAnswer").value;
    //document.getElementById("chantAnswer").value = 'hi'

    if (decision === 'hi') {
        
        window.location.href = 'theotherside.html'
    }
    else{
        const newH1 = document.createElement("h1")
        newH1.textContent="Nothing happens."
        document.body.prepend(newH1)

    }

}




