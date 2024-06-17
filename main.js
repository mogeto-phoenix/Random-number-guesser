function getRandomNumber(){
    return Math.floor(Math.random()*10);
}
function ranNum(){
    document.getElementById("loading-icon").style.display="flex";
    document.getElementById("display").style.display="none";
    let randomNumber=getRandomNumber();
    let answer=document.getElementById("number").value;
    document.getElementById("display").innerHTML="";
    console.log(randomNumber);
    if(answer===randomNumber){        
        setTimeout(function(){
        document.getElementById("loading-icon").style.display="none";
        let result=document.getElementById("display");
        result.style.display="flex";
        var msg=new SpeechSynthesisUtterance();
            msg.text="You've guessed correctly";
            window.speechSynthesis.speak(msg);
            checkColor()
        result.textContent+="You've guessed correctly";
        },2000);
    }
    else if(answer===""){
        setTimeout(function(){     
        document.getElementById("loading-icon").style.display="none";
        let result=document.getElementById("display");
        result.style.display="flex";
        var msg=new SpeechSynthesisUtterance();
            msg.text="Please enter number";
            window.speechSynthesis.speak(msg);
            checkColor()
        result.innerHTML+="Please enter number";
            },2000);
    }
    else if(answer<0||answer>9){
        setTimeout(function(){
        document.getElementById("loading-icon").style.display="none";
        let result=document.getElementById("display");
        result.style.display="flex";
        var msg=new SpeechSynthesisUtterance();
        msg.text="Please enter number within range 0-9";
        window.speechSynthesis.speak(msg);
        checkColor()
        result.textContent+="Please enter number within range 0-9";
        },2000);
    }
    else{
        setTimeout(function(){
            document.getElementById("loading-icon").style.display="none";
            let result=document.getElementById("display");
            result.style.display="flex";
            var msg=new SpeechSynthesisUtterance();
            msg.text="Oops! try again";
            window.speechSynthesis.speak(msg);
            checkColor()
            result.innerHTML+="Oops! try again";
        },2000);
    }
}
function checkColor(){
    let randomNumber=getRandomNumber();
    let answer=document.getElementById("number").value;
    document.getElementById("display").style.color="";
    if(answer===randomNumber){
        let result=document.getElementById("display");
        result.style.color+="green";
    }
    else if(answer===""){
        let result=document.getElementById("display");
        result.style.color+="blue"; 
    }
    else if(answer<0||answer>9){
        let result=document.getElementById("display");
        result.style.color+="yellow";  
    }
    else{
        let result=document.getElementById("display");
        result.style.color+="red";
    }
}



