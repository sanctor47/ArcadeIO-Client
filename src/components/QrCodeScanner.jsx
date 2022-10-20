import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCodeScanner = () => {
  const [qrscan, setQrscan] = useState("No result");
  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: 240, width: 320 }}
        legacyMode
      />
      <p>{qrscan}</p>
    </>
  );
};

export default QrCodeScanner;
