let imgbox = document.querySelector(".imgbox");
let qrimg = document.querySelector(".qrimg");
let qrtext = document.querySelector(".qrtext");

let Generateqr = () => {
  if (qrtext.value.length > 0) {
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);
    imgbox.classList.add("show-img");
  } else {
    qrtext.classList.add('error');
    setTimeout(() => {
      qrtext.classList.remove('error');
    }, 1000);
  }
};