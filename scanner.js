import QrScanner from "/qr-scanner.min.js";
QrScanner.WORKER_PATH = '/qr-scanner-worker.min.js';

const video = document.getElementById('qr-video');
const camQrResult = document.getElementById('cam-qr-result');

function setResult(label, result) {
    var checker = '';
    var req = 'pyd.co.id';
    for(var i=0; i <req.length; i++) {
        checker += result[i];
    }
    if(checker == req) {
        label.textContent = result;
        label.style.color = 'teal';
        clearTimeout(label.highlightTimeout);
        label.highlightTimeout = setTimeout(() => label.style.color = 'inherit', 100);
    }
}
const scanner = new QrScanner(video, result => setResult(camQrResult, result));
scanner.start();
