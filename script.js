const qrInput = document.getElementById('qr-input');
const qrBtn = document.getElementById('qr-btn');
const qrImg = document.getElementById('qr-img');

function QR() {
    const inputValue = qrInput.value;
    // once the button is clicked input box will be cleared
    // order of the code is important
    qrInput.value = '';
    // QR code generation
    // if(inputValue===''){
    // or
    if (!inputValue) {
        //  "falsy" values in JavaScript include false, 0, null, undefined, NaN, and the empty string ("").
        alert('Plese enter a value');
        return;
    } else {
        // 
        // qrImg.textContent = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}` ❌❌❌
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        // once i get the qr img i will also upadte the alt image
        qrImg.alt = `QR code for ${inputValue}`
    }
}
qrInput.addEventListener('keypress', (e) => {
    if ("Enter" === e.key)
        QR();
});

qrBtn.addEventListener('click', QR);