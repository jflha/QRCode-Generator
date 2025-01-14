<script>
	function generateQRCode() {
    const value = document.getElementById('qr-code-value').value.trim();

    if (!value) {
        alert('Please enter a valid text or URL.');
        return;
    }

    const qrCode = new QRious({
        value: value, 
        size: 400, 
        level: 'H' 
    });

    const qrCodeImage = qrCode.toDataURL();

    const imgElement = document.getElementById('qr-code-image');
    imgElement.src = qrCodeImage;
    imgElement.classList.remove('hidden'); // Make the image visible

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.classList.remove('hidden');
}

function refreshPage() {
    document.getElementById('qr-code-value').value = '';
    const imgElement = document.getElementById('qr-code-image');
    imgElement.src = '';
    imgElement.classList.add('hidden');

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.classList.add('hidden');
}
</script>
