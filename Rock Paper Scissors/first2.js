userscore=0
compscore=0
box=document.querySelector("#box");
o=document.querySelector(".o");
rock=document.querySelector("#rock");
paper=document.querySelector("#paper");
scissors=document.querySelector("#scissors");
para=document.body.querySelector("h2");
start=document.body.querySelector("#start")
user=document.body.querySelector("#user")
comp2=document.body.querySelector("#comp")

compchoice=()=>{
    arr=["rock","paper","scissors"]
    idx=Math.floor(Math.random()*3)
    console.log(arr[idx])
    return arr[idx]
}
rock.onclick=(userchoice)=>{
    console.log("rock is selected")
    rock.style.border="5px solid pink"
    comp=compchoice();
    if(comp==="rock"){
        console.log("its a draw");
        para.innerText="its a draw,try again"
        start.style.backgroundColor="aqua"
    }
    else if(comp==="paper") {
        console.log("lose");
        para.innerText="you lose,paper beats your rock"
        start.style.backgroundColor="red"
        compscore=compscore+1;
              comp2.innerText=compscore;

    }
    else{
        console.log("win");
        para.innerText="you won,your rock beats scissors"
        start.style.backgroundColor="green"
         userscore=userscore+1;
             user.innerText=userscore;
    }
    
    
    
}
paper.onclick=(userchoice)=>{
    console.log("paper is selected")
    paper.style.border="5px solid skyblue"
    comp=compchoice();
    if(comp==="paper"){
        console.log("its a draw");
        para.innerText="its a draw,try again"
        start.style.backgroundColor="aqua"
    }
    else if(comp==="scissors") {
        console.log("lose");
        para.innerText="you lose,scissors beats your paper"
        start.style.backgroundColor="red"
        compscore=compscore+1;
              comp2.innerText=compscore;

    }
    else{
        console.log("win");
        para.innerText="you won,your paper beats rock"
        start.style.backgroundColor="green"
         userscore=userscore+1;
             user.innerText=userscore;
    }
}
scissors.onclick=(userchoice)=>{
    console.log("scissors is selected")
    scissors.style.border="5px solid yellow"
    comp=compchoice();
    if(comp==="scissors"){
        console.log("its a draw");
        para.innerText="its a draw,try again"
        start.style.backgroundColor="aqua"
    }
    else if(comp==="rock") {
        console.log("lose");
        para.innerText="you lose,rock beats your scissors"
        start.style.backgroundColor="red"
        compscore=compscore+1;
              comp2.innerText=compscore;

    }
    else{
        console.log("win");
        para.innerText="you won,your scissors beats paper"
        start.style.backgroundColor="green"
         userscore=userscore+1;
             user.innerText=userscore;
    }
}


