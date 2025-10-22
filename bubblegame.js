let intervalId;
let intervalVal = 60
let TotalScore = 0
let cntHitFunc = 0;

const createBubble = () => {
    let bbls = ""
    document.querySelector("#pbtm").innerHTML = bbls;
    for (let i = 1; i < 76; i++) {
        let bblVal = Math.floor(Math.random() * 10)
        bbls += `<div class="bubble" onclick={hitted(event)}>${bblVal}</div>`
        // console.log(bbls);

    }
    document.querySelector("#pbtm").innerHTML = bbls;
    cntHitFunc=0
}

const cngTimer = () => {
    intervalId = setInterval(() => {
        if (intervalVal > 0) {
            intervalVal--;
            document.querySelector("#bblTimer").textContent = intervalVal;
        }
        else {
            clearInterval(intervalId)
        }
    }, 1000)
}

const cngHit = () => {
    const divs = document.querySelectorAll(".bubble");
    // console.log(divs);
    // console.log(cntHitFunc++);
    // let hit = 10
    cntHitFunc++;
    let hit = Math.floor(Math.random() * 10)
    // if(cntHitFunc>2){
    //     hit=1
    // }

    let flag = false;
    // let cnt = 0;
    divs.forEach(div => {
        // console.log(div.innerText);
        // console.log(cnt++);
        
        
        if(div.innerText===hit.toString()){
            flag = true;
            console.log(flag);
        }

        // if()
    });
    if(flag==false){
        document.querySelector("#bblHit").textContent = cngHit()
        // console.log(flag);
    }
    else if(cntHitFunc==1){
        document.querySelector("#bblHit").textContent = hit;
    }
    else{
        return hit
    }
    console.log(hit);
    

    // document.querySelector("#bblHit").textContent = hit;


}

const hitted = (e) => {
    // console.log("hitted");
    // console.log(e.srcElement.innerText);
    let bubbleValue = e.srcElement.innerText

    // console.log(bubbleValue);
    let hitVal = document.querySelector("#bblHit").textContent;
    // console.log(hitVal);

    // console.log(hitVal === bubbleValue);


    if (hitVal === bubbleValue) {
        TotalScore += 10
        document.querySelector("#bblScore").innerHTML = TotalScore;
        cngHit()
        createBubble()
    }
    else {
        TotalScore -= 10;
        document.querySelector("#bblScore").innerHTML = TotalScore;
        cngHit()
        createBubble()
    }
}


setTimeout(() => {
    cngHit()
    
}, 500);
createBubble()
cngTimer()