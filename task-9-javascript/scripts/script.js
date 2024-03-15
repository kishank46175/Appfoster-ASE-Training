let frag=document.getElementById("color-shades")


let ans=[]

function spiltDiv(num,divs){
    if(num==0) return ;
    let val=Math.floor(num/divs);
    ans.push(val);
    console.log(val)
    spiltDiv(num-val,divs-1);
}




const randomColor=()=>{
    let val="0123456789ABCDEF";
    let cons="#";

    for(let i=0;i<6;i++){
        cons=cons+val[Math.floor(Math.random()*16)];
    }
    // console.log(cons);
    return cons;
};

function createSpan(val,splits){
    ans.reverse();

    let odd=val%splits;

    for(let i=0;i<ans.length;i++){

        var x = document.createElement("DIV");
        var t = document.createTextNode(ans[i]);
        x.appendChild(t);


        div=4;
        if(odd && i==0){
            x.style.width=Math.floor(((100/splits) +(100%splits))) + "%"
        } 
            
        else {
            x.style.width=Math.floor(((100/splits) )) + "%"
        }
        
        x.style.backgroundColor=randomColor();
        x.style.color="white";
        x.style.alignContent="center"

        frag.appendChild(x);
    }
}



function initiateFun(){

    let val=document.getElementById("number-entered").value ||0;
    let splits=document.getElementById("splits").value ||1 ;
    // console.log(val + " " + splits)

    if(val<0 || splits<0){
        alert('Please Enter positive Number');
        document.getElementById("number-entered").value="";
        document.getElementById("splits").value="";
        return ;
    }

    if(splits>val){
        alert('Splits cannot be greater than Number ');
        document.getElementById("number-entered").value="";
        document.getElementById("splits").value="";
        return ;
    }
    spiltDiv(val,splits);
    createSpan(val,splits)
}

