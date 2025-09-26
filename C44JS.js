let boxs=document.querySelectorAll(".box");
let nqypn=document.querySelector(".nqypn");
let winsec=document.querySelector(".winsec");
let cellimg=document.querySelector(".cellimg");

let a1q=document.querySelector("#a1");
let a2q=document.querySelector("#a2");
let a3q=document.querySelector("#a3");
let a4q=document.querySelector("#a4");
let b1q=document.querySelector("#b1");
let b2q=document.querySelector("#b2");
let b3q=document.querySelector("#b3");
let b4q=document.querySelector("#b4");
let c1q=document.querySelector("#c1");
let c2q=document.querySelector("#c2");
let c3q=document.querySelector("#c3");
let c4q=document.querySelector("#c4");
let d1q=document.querySelector("#d1");
let d2q=document.querySelector("#d2");
let d3q=document.querySelector("#d3");
let d4q=document.querySelector("#d4");

let na1=0;
let na2=0;
let na3=0;
let na4=0;
let nb1=0;
let nb2=0;
let nb3=0;
let nb4=0;
let nc1=0;
let nc2=0;
let nc3=0;
let nc4=0;
let nd1=0;
let nd2=0;
let nd3=0;
let nd4=0;

let va1=0;
let va2=0;
let va3=0;
let va4=0;
let vb1=0;
let vb2=0;
let vb3=0;
let vb4=0;
let vc1=0;
let vc2=0;
let vc3=0;
let vc4=0;
let vd1=0;
let vd2=0;
let vd3=0;
let vd4=0;

let nqp=0;
let n;

function boxa1(){
    na1=1;
    na2=1;
    na3=1;
    na4=1;
    nb1=1;
    nc1=1;
    nd1=1;
    nb2=1;
    nc3=1;
    nd4=1;
}
function boxa2(){
    na1=1;
    na2=1;
    na3=1;
    na4=1;
    nb2=1;
    nc2=1;
    nd2=1;
    nb1=1;
    nb3=1;
    nc4=1;
}
function boxa3(){
    na1=1;
    na2=1;
    na3=1;
    na4=1;
    nb3=1;
    nc3=1;
    nd3=1;
    nb2=1;
    nc1=1;
    nb4=1;
}
function boxa4(){
    na1=1;
    na2=1;
    na3=1;
    na4=1;
    nb4=1;
    nc4=1;
    nd4=1;
    nb3=1;
    nc2=1;
    nd1=1;
}

function boxb1(){
    nb1=1;
    nb2=1;
    nb3=1;
    nb4=1;
    na1=1;
    nc1=1;
    nd1=1;
    nc2=1;
    nd3=1;
    na2=1;
}
function boxb2(){
    nb1=1;
    nb2=1;
    nb3=1;
    nb4=1;
    na2=1;
    nc2=1;
    nd2=1;
    na1=1;
    na3=1;
    nc1=1;
    nc3=1;
    nd4=1;
}
function boxb3(){
    nb1=1;
    nb2=1;
    nb3=1;
    nb4=1;
    na3=1;
    nc3=1;
    nd3=1;
    na2=1;
    na4=1;
    nc2=1;
    nd1=1;
    nc4=1;
}
function boxb4(){
    nb1=1;
    nb2=1;
    nb3=1;
    nb4=1;
    na4=1;
    nc4=1;
    nd4=1;
    na3=1;
    nc3=1;
    nd2=1;
}

function boxc1(){
    nc1=1;
    nc2=1;
    nc3=1;
    nc4=1;
    nb1=1;
    na1=1;
    nd1=1;
    nb2=1;
    na3=1;
    nd2=1;
}
function boxc2(){
    nc1=1;
    nc2=1;
    nc3=1;
    nc4=1;
    nb2=1;
    na2=1;
    nd2=1;
    nb1=1;
    nb3=1;
    na4=1;
    nd1=1;
    nd3=1;
}
function boxc3(){ 
    nc1=1;
    nc2=1;
    nc3=1;
    nc4=1;
    nb3=1;
    na3=1;
    nd3=1;
    nb2=1;
    na1=1;
    nb4=1;
    nd2=1;
    nd4=1;
}
function boxc4(){
    nc1=1;
    nc2=1;
    nc3=1;
    nc4=1;
    nb4=1;
    na4=1;
    nd4=1;
    nb3=1;
    na2=1;
    nd3=1;
}

function boxd1(){
    nd1=1;
    nd2=1;
    nd3=1;
    nd4=1;
    nb1=1;
    nc1=1;
    na1=1;
    nc2=1;
    nb3=1;
    na4=1;
}
function boxd2(){
    nd1=1;
    nd2=1;
    nd3=1;
    nd4=1;
    nb2=1;
    nc2=1;
    na2=1;
    nc1=1;
    nc3=1;
    nb4=1;
}
function boxd3(){
    nd1=1;
    nd2=1;
    nd3=1;
    nd4=1;
    nb3=1;
    nc3=1;
    na3=1;
    nc2=1;
    nb1=1;
    nc4=1;
}
function boxd4(){
    nd1=1;
    nd2=1;
    nd3=1;
    nd4=1;
    nb4=1;
    nc4=1;
    na4=1;
    nc3=1;
    nb2=1;
    na1=1;
}

function boxa1opp(){
    na1=0;
    na2=0;
    na3=0;
    na4=0;
    nb1=0;
    nc1=0;
    nd1=0;
    nb2=0;
    nc3=0;
    nd4=0;
}
function boxa2opp(){
    na1=0;
    na2=0;
    na3=0;
    na4=0;
    nb2=0;
    nc2=0;
    nd2=0;
    nb1=0;
    nb3=0;
    nc4=0;
}
function boxa3opp(){
    na1=0;
    na2=0;
    na3=0;
    na4=0;
    nb3=0;
    nc3=0;
    nd3=0;
    nb2=0;
    nc1=0;
    nb4=0;
}
function boxa4opp(){
    na1=0;
    na2=0;
    na3=0;
    na4=0;
    nb4=0;
    nc4=0;
    nd4=0;
    nb3=0;
    nc2=0;
    nd1=0;
}

function boxb1opp(){
    nb1=0;
    nb2=0;
    nb3=0;
    nb4=0;
    na1=0;
    nc1=0;
    nd1=0;
    nc2=0;
    nd3=0;
    na2=0;
}
function boxb2opp(){
    nb1=0;
    nb2=0;
    nb3=0;
    nb4=0;
    na2=0;
    nc2=0;
    nd2=0;
    na1=0;
    na3=0;
    nc1=0;
    nc3=0;
    nd4=0;
}
function boxb3opp(){
    nb1=0;
    nb2=0;
    nb3=0;
    nb4=0;
    na3=0;
    nc3=0;
    nd3=0;
    na2=0;
    na4=0;
    nc2=0;
    nd1=0;
    nc4=0;
}
function boxb4opp(){
    nb1=0;
    nb2=0;
    nb3=0;
    nb4=0;
    na4=0;
    nc4=0;
    nd4=0;
    na3=0;
    nc3=0;
    nd2=0;
}

function boxc1opp(){
    nc1=0;
    nc2=0;
    nc3=0;
    nc4=0;
    nb1=0;
    na1=0;
    nd1=0;
    nb2=0;
    na3=0;
    nd2=0;
}
function boxc2opp(){
    nc1=0;
    nc2=0;
    nc3=0;
    nc4=0;
    nb2=0;
    na2=0;
    nd2=0;
    nb1=0;
    nb3=0;
    na4=0;
    nd1=0;
    nd3=0;
}
function boxc3opp(){ 
    nc1=0;
    nc2=0;
    nc3=0;
    nc4=0;
    nb3=0;
    na3=0;
    nd3=0;
    nb2=0;
    na1=0;
    nb4=0;
    nd2=0;
    nd4=0;
}
function boxc4opp(){
    nc1=0;
    nc2=0;
    nc3=0;
    nc4=0;
    nb4=0;
    na4=0;
    nd4=0;
    nb3=0;
    na2=0;
    nd3=0;
}

function boxd1opp(){
    nd1=0;
    nd2=0;
    nd3=0;
    nd4=0;
    nb1=0;
    nc1=0;
    na1=0;
    nc2=0;
    nb3=0;
    na4=0;
}
function boxd2opp(){
    nd1=0;
    nd2=0;
    nd3=0;
    nd4=0;
    nb2=0;
    nc2=0;
    na2=0;
    nc1=0;
    nc3=0;
    nb4=0;
}
function boxd3opp(){
    nd1=0;
    nd2=0;
    nd3=0;
    nd4=0;
    nb3=0;
    nc3=0;
    na3=0;
    nc2=0;
    nb1=0;
    nc4=0;
}
function boxd4opp(){
    nd1=0;
    nd2=0;
    nd3=0;
    nd4=0;
    nb4=0;
    nc4=0;
    na4=0;
    nc3=0;
    nb2=0;
    na1=0;
}

function clearnumber(){
    if(va1==1){
        boxa1();
    }
    if(va2==1){
        boxa2();
    }
    if(va3==1){
        boxa3();
    }
    if(va4==1){
        boxa4();
    }
    if(vb1==1){
        boxb1();
    }
    if(vb2==1){
        boxb2();
    }
    if(vb3==1){
        boxb3();
    }
    if(vb4==1){
        boxb4();
    }
    if(vc1==1){
        boxc1();
    }
    if(vc2==1){
        boxc2();
    }
    if(vc3==1){
        boxc3();
    }
    if(vc4==1){
        boxc4();
    }
    if(vd1==1){
        boxd1();
    }
    if(vd2==1){
        boxd2();
    }
    if(vd3==1){
        boxd3();
    }
    if(vd4==1){
        boxd4();
    }
}

function playMusic(){
    let pa=new Audio("achive-sound.mp3");
    pa.play();
}

function GameWinMusic(){
    let gwm=new Audio("game-level-completed.wav");
    gwm.play();
}

function numqueenpl(){
    nqp=0;
    if(va1==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(va2==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(va3==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(va4==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vb1==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vb2==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vb3==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vb4==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vc1==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vc2==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vc3==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vc4==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vd1==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vd2==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vd3==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if(vd4==1){
        nqp++;
        let n = nqp;
        nqypn.innerHTML=n;
    }
    if((va1==0)&&(va2==0)&&(va3==0)&&(va4==0)&&
       (vb1==0)&&(vb2==0)&&(vb3==0)&&(vb4==0)&&
       (vc1==0)&&(vc2==0)&&(vc3==0)&&(vc4==0)&&
       (vd1==0)&&(vd2==0)&&(vd3==0)&&(vd4==0)){
            let n = 0;
            nqypn.innerHTML=n;
       }

}

function clearall(){
    na1=0;
    na2=0;
    na3=0;
    na4=0;
    nb1=0;
    nb2=0;
    nb3=0;
    nb4=0;
    nc1=0;
    nc2=0;
    nc3=0;
    nc4=0;
    nd1=0;
    nd2=0;
    nd3=0;
    nd4=0;

    va1=0;
    va2=0;
    va3=0;
    va4=0;
    vb1=0;
    vb2=0;
    vb3=0;
    vb4=0;
    vc1=0;
    vc2=0;
    vc3=0;
    vc4=0;
    vd1=0;
    vd2=0;
    vd3=0;
    vd4=0;

    a1q.style.backgroundImage="none";
    a2q.style.backgroundImage="none";
    a3q.style.backgroundImage="none";
    a4q.style.backgroundImage="none";

    b1q.style.backgroundImage="none";
    b2q.style.backgroundImage="none";
    b3q.style.backgroundImage="none";
    b4q.style.backgroundImage="none";

    c1q.style.backgroundImage="none";
    c2q.style.backgroundImage="none";
    c3q.style.backgroundImage="none";
    c4q.style.backgroundImage="none";

    d1q.style.backgroundImage="none";
    d2q.style.backgroundImage="none";
    d3q.style.backgroundImage="none";
    d4q.style.backgroundImage="none";

    nqp=0;
    nqypn.innerHTML=0;
}

function win(){
    if(nqp==4){
        winsec.style.backgroundColor="rgba(161,159,159,0.5)";
        winsec.style.border="2px solid black";
        winsec.innerHTML="You won the Game"
        cellimg.style.backgroundImage="url('cellebration.png')";
        GameWinMusic();
    }
    else{
        winsec.innerHTML=null;
        winsec.style.backgroundColor="transparent";
        winsec.style.border="none";
    }
}

boxs.forEach((boxid)=>{
    boxid.addEventListener("click",()=>{
        let id=boxid.getAttribute("id");
        console.log(id);
        if(id=='a1'){
            if(na1==0){
                va1=1;
                a1q.style.backgroundImage="url('crown1.png')";
                boxa1();
                numqueenpl();
                playMusic()
            }
            else{
                va1=0;
                a1q.style.backgroundImage="none";
                boxa1opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='a2'){
            if(na2==0){
                va2=1;
                a2q.style.backgroundImage="url('crown1.png')";
                boxa2();
                numqueenpl();
                playMusic()
            }
            else{
                va2=0;
                a2q.style.backgroundImage="none";
                boxa2opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='a3'){
            if(na3==0){
                va3=1;
                a3q.style.backgroundImage="url('crown1.png')";
                boxa3();
                numqueenpl();
                playMusic()
            }
            else{
                va3=0;
                a3q.style.backgroundImage="none";
                boxa3opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='a4'){
            if(na4==0){
                va4=1;
                a4q.style.backgroundImage="url('crown1.png')";
                boxa4();
                numqueenpl();
                playMusic()
            }
            else{
                va4=0;
                a4q.style.backgroundImage="none";
                boxa4opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='b1'){
            if(nb1==0){
                vb1=1;
                b1q.style.backgroundImage="url('crown1.png')";
                boxb1();
                numqueenpl();
                playMusic()
            }
            else{
                vb1=0;
                b1q.style.backgroundImage="none";
                boxb1opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='b2'){
            if(nb2==0){
                vb2=1;
                b2q.style.backgroundImage="url('crown1.png')";
                boxb2();
                numqueenpl();
                playMusic()
            }
            else{
                vb2=0;
                b2q.style.backgroundImage="none";
                boxb2opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='b3'){
            if(nb3==0){
                vb3=1;
                b3q.style.backgroundImage="url('crown1.png')";
                boxb3();
                numqueenpl();
                playMusic()
            }
            else{
                vb3=0;
                b3q.style.backgroundImage="none";
                boxb3opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='b4'){
            if(nb4==0){
                vb4=1;
                b4q.style.backgroundImage="url('crown1.png')";
                boxb4();
                numqueenpl();
                playMusic()
            }
            else{
                vb4=0;
                b4q.style.backgroundImage="none";
                boxb4opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='c1'){
            if(nc1==0){
                vc1=1;
                c1q.style.backgroundImage="url('crown1.png')";
                boxc1();
                numqueenpl();
                playMusic()
            }
            else{
                vc1=0;
                c1q.style.backgroundImage="none";
                boxc1opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='c2'){
            if(nc2==0){
                vc2=1;
                c2q.style.backgroundImage="url('crown1.png')";
                boxc2();
                numqueenpl();
                playMusic()
            }
            else{
                vc2=0;
                c2q.style.backgroundImage="none";
                boxc2opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='c3'){
            if(nc3==0){
                vc3=1;
                c3q.style.backgroundImage="url('crown1.png')";
                boxc3();
                numqueenpl();
                playMusic()
            }
            else{
                vc3=0;
                c3q.style.backgroundImage="none";
                boxc3opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='c4'){
            if(nc4==0){
                vc4=1;
                c4q.style.backgroundImage="url('crown1.png')";
                boxc4();
                numqueenpl();
                playMusic()
            }
            else{
                vc4=0;
                c4q.style.backgroundImage="none";
                boxc4opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='d1'){
            if(nd1==0){
                vd1=1;
                d1q.style.backgroundImage="url('crown1.png')";
                boxd1();
                numqueenpl();
                playMusic()
            }
            else{
                vd1=0;
                d1q.style.backgroundImage="none";
                boxd1opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='d2'){
            if(nd2==0){
                vd2=1;
                d2q.style.backgroundImage="url('crown1.png')";
                boxd2();
                numqueenpl();
                playMusic()
            }
            else{
                vd2=0;
                d2q.style.backgroundImage="none";
                boxd2opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='d3'){
            if(nd3==0){
                vd3=1;
                d3q.style.backgroundImage="url('crown1.png')";
                boxd3();
                numqueenpl();
                playMusic()
            }
            else{
                vd3=0;
                d3q.style.backgroundImage="none";
                boxd3opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='d4'){
            if(nd4==0){
                vd4=1;
                d4q.style.backgroundImage="url('crown1.png')";
                boxd4();
                numqueenpl();
                playMusic()
            }
            else{
                vd4=0;
                d4q.style.backgroundImage="none";
                boxd4opp();
                clearnumber();
                numqueenpl();
            }
        }
        if(id=='ca'){
            console.log("Clear All");
            clearall(); 
        }
        win();
    });
});