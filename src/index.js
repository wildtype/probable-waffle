import { QRCodeSVG } from '@cheprasov/qrcode';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', () => {
    let text = document.getElementById('text').value;
    let imageUrl = document.getElementById('image').value;
    let imageOption = null;

    if (imageUrl) {
      imageOption = {
        image: {
          source: imageUrl,
          width: '20%',
          height: '20%',
          x: 'center',
          y: 'center',
        }
      };
    }

    let qrSVG = new QRCodeSVG(text, imageOption);
    let dataUrlWithSVGQRCode = qrSVG.toDataUrl();
    let xmlWithQRCode = qrSVG.toString();

    document.getElementById('qr').innerHTML = xmlWithQRCode;
  });
});
