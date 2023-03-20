const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%/()=?@~;:+=^*_-0123456789' ;
let output=document.getElementById("output");
function randomvalue(value){
    return Math.floor(Math.random()*value);

}

function genpass(){
    let length= document.getElementById('length').value;
    document.getElementById("lenval").textContent  = length;
    let str= ''
    for(let i=0;i<length;i++){
        let random = randomvalue(characters.length);
        str+= characters.charAt(random);
    }
    output.value=str;


}

function copyclip()
{
    output.select();
    document.execCommand('copy');
    alert("Password Copid!!");
}



 