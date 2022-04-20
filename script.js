const qrData = document.getElementById("qr-data")
var qrcode = new QRCode(document.getElementById("qrcode"));

function getData() {
    let data = qrData.value
    qrcode.makeCode(data)
    alert(data)
}