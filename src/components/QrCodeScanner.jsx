import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

const QrCodeScanner = ({
  fps,
  qrbox,
  aspectRatio,
  disableFlip,
  qrCodeSuccessCallback,
  qrCodeErrorCallback,
}) => {
  useEffect(() => {
    const config = {
      fps,
      qrbox,
      aspectRatio,
      disableFlip,
    };

    const verbose = true;

    // Suceess callback is required.
    if (!qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }

    let html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    html5QrcodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);

    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export default QrCodeScanner;
