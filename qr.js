var set = false;



function getCode() {
  var string = 'pyd.co.id/';
  var alpha = 'abcdefghijklmnopqrstuvwxwyz';
  // var num = '0123456789';
  for(i=0; i<5; i++){
    i < 3 ? string += alpha[Math.floor(Math.random() * alpha.length)] : string += Math.floor(Math.random() * 10);
  }
  document.getElementById("qr-result").textContent = string;
  return string;
}

var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 500,
  height : 500
});

function generateWebQRCode() {
  var code = getCode();
  qrcode.makeCode(code);
}
