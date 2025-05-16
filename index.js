let imgbox=document.querySelector(".imgbox");
let qrimg=document.querySelector(".qrimg");
let qrtext=document.querySelector(".qrtext")
let error=document.que
let Generateqr=()=>{
    if(qrtext.value.length >0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
        imgbox.classList.add("show-img")
    }
    else{
       
    }

} 